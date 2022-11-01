import React from "react";
import {
	BrowserRouter as Router,
	// Switch,
	// Route,
	// Link,
} from "react-router-dom";
import "./App.css";
import "./styles/theme.scss";
import { AppLayout } from "./components/AppLaypout/AppLayout";
function App() {
	return (
		<Router>
			<AppLayout />
		</Router>
	);
}

export default App;
