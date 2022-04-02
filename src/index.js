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
  WatchLaterProvider,
} from "./context/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <LikeProvider>
        <PlaylistProvider>
          <PlaylistModalProvider>
            <WatchLaterProvider>
              <VideoProvider>
                <App />
              </VideoProvider>
            </WatchLaterProvider>
          </PlaylistModalProvider>
        </PlaylistProvider>
      </LikeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
