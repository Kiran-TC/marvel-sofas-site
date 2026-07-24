import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";

async function stageClientAssets() {
  const buildDir = "dist";
  const clientDir = `${buildDir}/client`;
  const reservedEntries = new Set([".openai", "client", "server"]);

  await rm(clientDir, { recursive: true, force: true });
  await mkdir(clientDir, { recursive: true });

  const entries = await readdir(buildDir, { withFileTypes: true });
  await Promise.all(
    entries
      .filter((entry) => !reservedEntries.has(entry.name))
      .map((entry) =>
        cp(`${buildDir}/${entry.name}`, `${clientDir}/${entry.name}`, {
          recursive: true,
        }),
      ),
  );
}

const worker = `const immutableAssetPattern = /\\\\.[a-fA-F0-9]{8,}\\\\./;

function withCaching(response, pathname) {
  const headers = new Headers(response.headers);
  if (pathname.startsWith("/assets/") && immutableAssetPattern.test(pathname)) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else {
    headers.set("Cache-Control", "public, max-age=300");
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const asset = await env.ASSETS.fetch(request);
    if (asset.status !== 404) {
      return withCaching(asset, url.pathname);
    }

    if (request.method === "GET" || request.method === "HEAD") {
      const indexRequest = new Request(new URL("/index.html", request.url), request);
      return env.ASSETS.fetch(indexRequest);
    }

    return new Response("Not found", { status: 404 });
  },
};
`;

await stageClientAssets();
await mkdir("dist/server", { recursive: true });
await writeFile("dist/server/index.js", worker, "utf8");
