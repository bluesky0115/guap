import React, {Component} from 'react';
import axios from 'axios';
import store from '../store';
import {activeUser} from '../actions/index'
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);


class LenderForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
	      email: '',
	      username: '',
	      password: '',
	      passwordConf: '',
	      passwordMatch: false,
	      users: [],
	    }

	    this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
	    this.setState({[e.target.name]: e.target.value})
	  }

	handleSubmit(e) {
		e.preventDefault();
		const username = e.target.username.value;
	    const password = bcrypt.hashSync(e.target.password.value, salt);
	    const passwordConf = e.target.passwordConf.value;
	    const passwordMatch = bcrypt.compareSync(passwordConf, password);
	    if (passwordMatch === true) {
		    axios.post('/', {
		        email: e.target.email.value,
		        username: e.target.username.value,
		        password: password,
		        // passwordConf: passwordConf,
		      })
		      .then((response) => {
		        store.dispatch(activeUser(username))
				localStorage.setItem('activeUser', JSON.stringify(store.getState()))
				window.location = '/lender/account'
		      })
		      .catch(error => {
		        console.log(error)
		      })
		} else {
			console.log('Wrong password')
		}
	}

	componentDidMount() {
	    axios.get('/users')
	    	.then(response => {
	          this.setState({users: response.data});
	        })
	        .catch(error => {
	          console.log(error)
	        }); 
	  }

	render() {
		console.log(this)
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
		          <label>Email</label><br />
		          <input type="text" name="email" onChange={this.handleChange} autoComplete="email" value={this.state.email}/><br/>
		          <label>Username</label><br />
		          <input type="text" name="username" onChange={this.handleChange} autoComplete="username" value={this.state.username}/><br/>
		          <label>Password</label><br />
		          <input type="password" name="password" onChange={this.handleChange} autoComplete="new-password" value={this.state.password}/><br/>
		          <label>Confirm Password</label><br />
		          <input type="password" name="passwordConf" onChange={this.handleChange} autoComplete="new-password" value={this.state.passwordConf}/><br/>
		          <input type="submit" />
		        </form> 
			</div>
		);
	}
}

export default LenderForm;