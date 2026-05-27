import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Register } from "./pages/Register/Register.jsx";
import "./index.css";
import App from "./App.jsx";
// main.jsx
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ChatPage from "./pages/chat/ChatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // redirige a /register
  },
  {
    path: "/chat",
    element: <ChatPage />, // ← ahora apunta a ChatPage
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
