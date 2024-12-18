const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
	user: {
		type: String,
		required: true,
	},
	contact: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	url: {
		type: String,
	},
	price: {
		type: Number,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("post", postSchema);
