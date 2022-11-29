import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./styles/theme.scss";

import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { router } from "./routes/routes";

function App() {
	pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.js`;

	return (
		<RouterProvider router={router} />
		// 	<AppLayout />
		// </RouterProvider>
	);
}

export default App;
