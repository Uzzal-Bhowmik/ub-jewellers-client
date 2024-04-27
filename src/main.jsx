import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "animate.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./providers/AuthProvider.jsx";
import "react-pagination-bar/dist/index.css";
import "@moxy/react-animate-text/dist/index.css";
import "pace-js";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store.js";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </ReduxProvider>
  </React.StrictMode>
);
