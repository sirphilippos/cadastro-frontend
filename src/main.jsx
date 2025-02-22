import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Cadastro from "./containers/Cadastro/Cadastro";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cadastro />
  </StrictMode>
);
