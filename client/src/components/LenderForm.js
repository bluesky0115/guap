import React, {Component} from 'react';
import axios from 'axios';
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
	    let change = {[e.target.name]: e.target.value}
	    this.setState({
	      [e.target.name]: e.target.value,
	    })
	  }

	handleSubmit(e) {
		e.preventDefault();
	    const password = bcrypt.hashSync(e.target.password.value, salt);
	    const passwordConf = e.target.passwordConf.value
	    const passwordConfhash = bcrypt.hashSync(e.target.passwordConf.value, salt);
	    axios.post('/', {
	        email: e.target.email.value,
	        username: e.target.username.value,
	        password: password,
	        passwordConf: passwordConf,
	      })
	      .then((response) => {
	        this.setState.passwordMatch = bcrypt.compareSync(passwordConf, password);
	        this.setState.users = [...this.state.users, ]
	      })
	      .catch(error => {
	        console.log(error)
	      })
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
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
		          <label>Email</label><br />
		          <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/><br/>
		          <label>Username</label><br />
		          <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/><br/>
		          <label>Password</label><br />
		          <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/><br/>
		          <label>Confirm Password</label><br />
		          <input type="password" name="passwordConf" onChange={this.handleChange} value={this.state.passwordConf}/><br/>
		          <input type="submit" />
		        </form> 
		        <a href="/marketplace">Market</a>
	        <div>
	          {this.state.users.map(x => <li>{x.email}</li>)}
	        </div>
			</div>
		);
	}
}

export default LenderForm;