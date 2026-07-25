// entry-server.jsx (SSR render)
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "./router";
import App from "./App";

export function render(url) {
  const helmetContext = {};

  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  );

  // helmet can be undefined if NO <Helmet>/<SEO /> was rendered anywhere
  // in the tree for this route (e.g. a page that doesn't use <SEO /> yet).
  // Guard with optional chaining + fallback so a missing SEO tag on some
  // page never crashes the whole server render.
  const { helmet } = helmetContext;

  return {
    html,
    head: {
      title: helmet?.title?.toString() ?? "",
      meta: helmet?.meta?.toString() ?? "",
      link: helmet?.link?.toString() ?? "",
    },
  };
}