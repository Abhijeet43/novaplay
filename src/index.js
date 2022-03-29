import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoProvider, AuthProvider } from "./context/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <VideoProvider>
        <App />
      </VideoProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
