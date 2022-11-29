const express = require("express");
const helmet = require("helmet");
const path = require("path");

const app = express();
require("dotenv").config();
const port = process.env.PORT || 3002;
const cors = require("cors");
const corsConfig = {
	credentials: true,
	origin: true,
};
app.use(cors(corsConfig));
const router = require("./app.router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	helmet({
		crossOriginResourcePolicy: false,
		crossOriginEmbedderPolicy: false,
	})
);
app.use("/cdn", router);

// Static file
app.use(express.static(path.join(__dirname, "Upload/file"), { index: false }));

app.get("/", (req, res) => {
	res.send("WELCOME TO MY CDN");
});

app.get("/cdn", (req, res) => {
	res.send("WELCOME TO MY CDN");
});

app.listen(port, () => {
	console.log(`Server is start at http://localhost:${port}`);
});
