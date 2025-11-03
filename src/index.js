import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./context/CartContext";   // ✅ correct path

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CartProvider>        {/* ✅ this must wrap <App /> */}
      <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
