import React, {Component} from 'react';

class Account extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: 'Kar'
		}
	}

	render() {
		return (
			<div>
				<a href="/lender/signup">Signup</a>

			</div>
		);
	}
}

export default Account;