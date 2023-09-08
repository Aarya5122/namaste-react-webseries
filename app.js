import React from "react";
import ReactDOM from "react-dom/client";

const jsxElement = (
	<h1>here we go with the chapter one of react and three of the course.</h1>
);

const heading = React.createElement("h1", { id: "heading" }, "Chapter: 3-1");

console.log(jsxElement);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxElement);
