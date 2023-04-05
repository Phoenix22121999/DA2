const express = require("express");
const helmet = require("helmet");
const path = require("path");

const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const cors = require("cors");
const corsConfig = {
	credentials: true,
	origin: true,
};
app.use(cors(corsConfig));
const router = require("./app.router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use("/api", router);

// Static file     
app.use(express.static('Upload'));



app.get("/", (req, res) => {
	res.send("WELCOME TO MY BACK-END");
});

app.get("/api", (req, res) => {
	res.send("WELCOME TO MY API");
});

app.listen(port, () => {
	console.log(`Server is start at http://localhost:${port}`);
});
