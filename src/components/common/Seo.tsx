import { Helmet } from "react-helmet-async";
import { siteSeo } from "../../config/seo";

type SeoProps = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

export function Seo({ title, description = siteSeo.defaultDescription, path = "/", image, structuredData }: SeoProps) {
  const fullTitle = siteSeo.titleTemplate.replace("%s", title);
  const canonical = `${siteSeo.canonicalBaseUrl}${path}`;
  const imageUrl = image ? `${siteSeo.canonicalBaseUrl}${image}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteSeo.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      <meta name="twitter:card" content={imageUrl ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {structuredData ? (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      ) : null}
    </Helmet>
  );
}
