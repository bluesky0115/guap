const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/gwap');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	email: String
});

User = require('./models/User')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
	console.log('Database connected...')
});

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/users', (req,res) => {
	User.find()
		.then(response => {
			res.send(response.map(user => {
				return user
			}))
		})
})

app.post('/', (req,res, err) => {
	// newUser = new User
	// bcrypt.genSalt(10, function(err, salt) {
	//     bcrypt.hash(req.body.password, salt, function(err, hash) {
	//         // Store hash in your password DB.
	// 	    newUser.password = hash
	//     });
	// });
	// newUser.email = req.body.email
	// console.log(newUser)
	User.create({
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
		passwordConf: req.body.passwordConf
	})
	return res.redirect('/')
})

app.listen(5000, console.log('Server running on port 5000'))