import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import PowerProvider from "./PowerProvider.tsx";
import { StrictMode } from "react";

ReactDom.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PowerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PowerProvider>
  </StrictMode>
);

//TODO change screen size at PowerApps deployment screen
//TODO Push to git hub
