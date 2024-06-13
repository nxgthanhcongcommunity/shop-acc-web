import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./stores";
import { ParallaxProvider } from "react-scroll-parallax";
import { ToastProvider, WebSocketProvider } from "./providers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ParallaxProvider>
        <WebSocketProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </WebSocketProvider>
      </ParallaxProvider>
    </Provider>
  </React.StrictMode>,
);
