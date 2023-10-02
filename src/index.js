import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import ErrorComponent from "./components/ErrorComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Food from "./pages/Food";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Main />,
			},
			{
				path: "/menu",
				element: <Menu />,
			},
			{
				path: "/menu/:foodId",
				element: <Food />,
			},
		],
		errorElement: <ErrorComponent />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
