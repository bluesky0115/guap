const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

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
	// passwordConf: {
	//     type: String,
	//     required: true,
	// }
});

userSchema.pre('save', () => {
	console.log("Saving new user")
})

let User = module.exports = mongoose.model('User', userSchema)
