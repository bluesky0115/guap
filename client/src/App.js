import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConf: '',
    }

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let change = {[e.target.name]: e.target.value}
    this.setState(change)
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/', {
        email: e.target.email.value,
        username: e.target.username.value,
        password: e.target.password.value,
        passwordConf: e.target.passwordConf.value
      })
      .then((response) => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
