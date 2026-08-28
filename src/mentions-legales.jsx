import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MentionsLegales from "./pages/MentionsLegales.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MentionsLegales />
  </StrictMode>
);
