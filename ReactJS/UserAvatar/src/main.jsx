import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AvatarProvider } from "./context/AvatarContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AvatarProvider>
      <App />
    </AvatarProvider>
  </StrictMode>
);
