const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
	    unique: true,
	    required: true,
	    trim: true
	},
	username: {
	    type: String,
	    unique: true,
	    required: true,
	    trim: true
	},
	password: {
	    type: String,
	    required: true,
	},
	passwordConf: {
	    type: String,
	    required: true,
	}
});

let User = module.exports = mongoose.model('User', userSchema)
