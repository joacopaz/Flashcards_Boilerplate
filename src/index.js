import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App";
import store from "./app/store";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
