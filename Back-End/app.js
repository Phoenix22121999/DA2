const express = require("express");
// const {routers} = require('./Router/index');
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
app.use("/api", router);

app.get("/", (req, res) => {
	res.send("WELCOME TO MY BACK-END");
});

app.get("/api", (req, res) => {
	res.send("WELCOME TO MY API");
});

app.listen(port, () => {
	console.log(`Server is start at http://localhost:${port}`);
});
