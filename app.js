const express = require("express");
const path = require("node:path");
const app = express();


const indexRouter = require("./routes/indexRouter");



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);




app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send(err);
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`My first express app - listening on port ${PORT}!`);
});
