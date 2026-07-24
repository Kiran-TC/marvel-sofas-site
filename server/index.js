const immutableAssetPattern = /\\.[a-fA-F0-9]{8,}\\./;

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
