const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = require("./models/User");

const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/airbnb");

app.use(express.json());
app.use(cors());

const salt = bcrypt.genSaltSync(10);

app.post("/register", cors(), async (req, res) => {
	const { email, password } = req.body;

	const createdUser = await userModel.create({
		email,
		password: bcrypt.hashSync(password, salt),
	});
	res.json(createdUser);
	console.log(createdUser);
});

app.post("/login", cors(), async (req, res) => {
	const { email, password } = req.body;
	const found = await userModel.findOne({ email });

	if (found) {
		const result = bcrypt.compareSync(password, found.password);
		if (result) {
			res.json(found);
		} else {
			res.json(null);
		}
	} else {
		res.json(null);
	}
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
