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
  HistoryProvider,
  CategoryProvider,
  LoaderProvider,
} from "./context/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <LoaderProvider>
        <CategoryProvider>
          <LikeProvider>
            <PlaylistProvider>
              <PlaylistModalProvider>
                <WatchLaterProvider>
                  <HistoryProvider>
                    <VideoProvider>
                      <App />
                    </VideoProvider>
                  </HistoryProvider>
                </WatchLaterProvider>
              </PlaylistModalProvider>
            </PlaylistProvider>
          </LikeProvider>
        </CategoryProvider>
      </LoaderProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
