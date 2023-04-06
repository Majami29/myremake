import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "https://raw.githubusercontent.com/Majami29/myremake/main/index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
