import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoProvider, AuthProvider, LikeProvider } from "./context/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <LikeProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </LikeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
