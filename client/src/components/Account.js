import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
	return {
		activeUser: state.activeUser
	}
}

class Account extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeUser: this.props.activeUser
		}
	}


	handleSignout(e) {
		localStorage.clear();
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<a href="/" onClick={this.handleSignout}>Sign-out</a>
				Signed in as {this.props.activeUser}
			</div>
		);
	}
}

export default connect(mapStateToProps)(Account);