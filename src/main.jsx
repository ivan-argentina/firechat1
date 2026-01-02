import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./config/firebase.js";
import { FirebaseServices } from "./config/firebase-services.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseServices>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirebaseServices>
    </FirebaseAppProvider>
  </StrictMode>
);
