import React from 'react';
import { 
	BrowserRouter as Router,
	Route, 
	Link, 
	Switch } 
from 'react-router-dom';
import LenderForm from './LenderForm';
import Account from './Account';

class Routes extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/lender/signup" component={LenderForm} />
					<Route path="/lender/account" component={Account} />
					<Route path="/marketplace" component={Account} />
					<Route path="/marketplace/:loanid" component={Account} />
					<Route path="/lender/account/loan" component={Account} />
					<Route path="/lender/account/loan/:loanid" component={Account} />
					<Route path="/lender/account/transfer" component={Account} />
					<Route path="/borrower/signup" component={Account} />
					<Route path="/borrower/account" component={Account} />
					<Route path="/borrower/request" component={Account} />
					<Route path="/borrower/loan" component={Account} />
				</Switch>
			</Router>
		);
	}
}

export default Routes;