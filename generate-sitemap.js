import fs from "fs";
import routes from "./src/sitemapRoutes.js";
import { blogRouteMeta } from "./src/data/blogRoutes.js";

const DOMAIN = "https://www.jm-ventures.in";
const today = new Date().toISOString().split("T")[0];

// Dynamically pull in blog routes so you don't have to hand-edit
// sitemapRoutes.js every time a new blog post is added.
const blogRoutes = ["/blog", ...blogRouteMeta.map((b) => `/blog/${b.slug}`)];

const allRoutes = [...routes, ...blogRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    let priority = "0.8";
    const changefreq = "daily";

    if (route === "/") {
      priority = "1.0";
    } else if (
      route === "/projects" ||
      route.startsWith("/iconic") ||
      route.startsWith("/london") ||
      route.startsWith("/ace") ||
      route.startsWith("/galaxy") ||
      route.startsWith("/gaur")
    ) {
      priority = "0.9";
    } else if (route === "/blog") {
      priority = "0.9";
    } else if (route.startsWith("/blog/")) {
      priority = "0.7";
    } else if (
      route === "/privacy-policy" ||
      route === "/terms-and-conditions"
    ) {
      priority = "0.3";
    }

    return `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("")}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", xml);

console.log("✅ Sitemap generated successfully!");