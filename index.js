const express = require('express');
const app = express();

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

// app.get('/', (req,res) => {
// 	res.send(`
// 		<form action="/" method="post">
// 			<label>Email</label><br />
// 			<input type="text" name="email"/><br/>
// 			<label>Username</label><br />
// 			<input type="text" name="username"/><br/>
// 			<label>Password</label><br />
// 			<input type="password" name="password"/><br/>
// 			<label>Confirm Password</label><br />
// 			<input type="password" name="passwordConf"/><br/>
// 			<input type="submit" />
// 		</form>	
// 	`);
// })

app.post('/', (req,res, err) => {
	User.create({
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
		passwordConf: req.body.passwordConf
	})
	return res.redirect('/')
})

app.listen(5000, console.log('Server running on port 5000'))