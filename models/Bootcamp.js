const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please add a name'],
		unique: true,
		trim: true,
		maxlength: [50, 'Name cannot be more than 50 characters'],
	},
	slug: String,
	description: {
		type: String,
		required: [true, 'Please add a description'],
		unique: true,
		trim: true,
		maxlength: [500, 'Description cannot be more than 500 characters'],
	},
	website: {
		type: String,
		match: [
			/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
			'Please use a valid URL with HTTP or HTTPS',
		],
	},
	phone: {
		type: String,
		maxlength: [20, 'Phone number can not be longer than 20 characters'],
	},
	email: {
		type: String,
	},
});
