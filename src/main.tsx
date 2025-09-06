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

//TODO retry connection to PowerPlatform
//TODO stody useState and useEffect more
//TODO show login user from Power Platform data source
//TODO connect to Dataverse to store tasks
//TODO add more features to kanban board (e.g. due dates, priorities, etc.)

//References: Youtube https://www.youtube.com/watch?v=UBFgFNYbSTA
