import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { AppProvider } from "./context/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AppProvider>
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
