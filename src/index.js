/**
 * This file is the entry point of the SportSee application.
 * It creates a router with specified routes and their corresponding elements.
 * @module index
 */

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./styles/scss/main.scss";
import App from "./pages/App";
import ErrorPage from "./pages/ErrorPage";
import DashboardPage from "./pages/DashboardPage";
import Profile from "./pages/Profile";

/**
 * Creates a router with specified routes and their corresponding elements.
 * @function createBrowserRouter
 * @param {Array} routes - An array of route objects.
 * @returns {Object} - Returns a router object.
 */
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: "/profile/user/:id",
                element: <Profile />,
            },
            {
                path: "/settings",
                element: <div>Réglage</div>,
            },
            {
                path: "/community",
                element: <div>Communauté</div>,
            },
        ],
    },
]);

/**
 * Renders the SportSee application.
 * @function ReactDOM.createRoot
 * @param {HTMLElement} document.getElementById("root") - The root element of the application.
 * @returns {void}
 */
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

/**
 * Measures the performance of the SportSee application.
 * @function reportWebVitals
 * @param {function} console.log - A function to log results.
 * @returns {void}
 */
reportWebVitals();
