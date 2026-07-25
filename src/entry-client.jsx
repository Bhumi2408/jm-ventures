// entry-client.jsx
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "./router";
import App from "./App";
import "./index.css";

hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);