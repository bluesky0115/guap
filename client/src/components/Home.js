import React from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import {connect} from 'react-redux';
import store from '../store';
import {Redirect} from 'react-router';
import {activeUser} from '../actions/index'

// 		localStorage.setItem('activeUser', JSON.stringify({isActive: false, activeUser: ''}))
// console.log(store.getState())
const mapStateToProps = (state) => {
	return { 
		activeUser: state.activeUser,
		isActive: state.isActive
	}
}

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			activeUser: this.props.activeUser,
			isActive: this.props.isActive,
		}

	    this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
	    this.setState({[e.target.name]: e.target.value})
		// console.log(this.state.password)
	}

	handleSubmit(e) {
		e.preventDefault();
		let password = e.target.password.value;
		axios.post('/userAuth', {
			email: e.target.email.value
		})
			.then(res => {
				bcrypt.compare(password, res.data.password, (err, result) => {
					if (err) throw err;
					if (result) {
						store.dispatch(activeUser(res.data.username))
						localStorage.setItem('activeUser', JSON.stringify(store.getState()))
						window.location = '/lender/account'
					} else {
						console.log('Invalid login info');
					}
				});
			})
			.catch(error => {
				console.log(error);
			});
	}


	render() {
		console.log(localStorage.activeUser ? 'hey' : 'hoe')
		const isActive = this.props.isActive
		return (
			<div>
			{isActive ? (
				<Redirect to='/lender/account' />
			) : (
				<form onSubmit={this.handleSubmit}>
					<h1>Sign in</h1><br/>
					<label>Email</label><br/>
					<input type="text" name="email" onChange={this.handleChange} /><br/>
					<label>Password</label><br/>
					<input type="text" name="password" onChange={this.handleChange} /><br/>
					<input type="submit"/>
				</form>
			)}
			</div>
		);
	}
}


export default connect(mapStateToProps)(Home);;