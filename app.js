/*
<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>
*/

import React from "react"
import ReactDOM from "react-dom/client";

const heading = React.createElement(
	"h1",
	{ id: "heading", key: "headkey" },
	"Starting the react web-series journey."
);

const para = React.createElement(
	"p",
	{ class: "text", key: "paraKey" },
	"Let's go."
);

const child = React.createElement("div", { id: "child" }, [heading, para]);

const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(parent);
