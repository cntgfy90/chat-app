import React from "react";
import ReactDOM from "react-dom";

import App from "./routes/AppRoutes";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
	console.log(module);
	module.hot.accept('./routes/AppRoutes', () => {
		ReactDOM.render(<App />, document.getElementById("root"));
	});
}
