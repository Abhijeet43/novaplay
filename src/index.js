import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  VideoProvider,
  AuthProvider,
  LikeProvider,
  PlaylistProvider,
  PlaylistModalProvider,
} from "./context/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <LikeProvider>
        <PlaylistProvider>
          <PlaylistModalProvider>
            <VideoProvider>
              <App />
            </VideoProvider>
          </PlaylistModalProvider>
        </PlaylistProvider>
      </LikeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
