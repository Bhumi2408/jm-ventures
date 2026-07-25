import { Helmet } from "react-helmet-async";

/**
 * SEO.jsx
 * Reusable, SSR-safe meta tag component (works with react-helmet-async).
 * Use this on EVERY page (blog listing, blog detail, home, about, etc.)
 * by passing page-specific title/description/image/url.
 *
 * `schema` accepts a single JSON-LD object OR an array of them — each gets
 * rendered as its own <script type="application/ld+json"> tag.
 *
 * Usage:
 *  <SEO
 *    title="Blog | JM Ventures"
 *    description="Insights on Dholera, Yamuna Expressway & NCR real estate investment."
 *    url="https://www.jm-ventures.in/blog"
 *    schema={articleSchema}
 *  />
 */
const SEO = ({
  title = "JM Ventures | Real Estate Investment Advisory",
  description =
    "JM Ventures — Real estate investment advisory across Dholera SIR, Noida, Greater Noida and Yamuna Expressway. RERA compliant, title clear, NRI friendly.",
  image = "https://www.jm-ventures.in/assets/jmlogo-BcCr1TT-.png",
  url = "https://www.jm-ventures.in/",
  type = "website",
  keywords = "JM Ventures, Dholera SIR, Yamuna Expressway plots, Noida real estate, real estate investment India, RERA compliant plots",
  publishedTime,
  modifiedTime,
  author = "JM Ventures",
  schema,
}) => {
  const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="JM Ventures" />

      {/* Article specific (blog detail pages) */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* JSON-LD structured data (Article, FAQPage, etc.) */}
      {schemaList.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;