import React from 'react';
import { Route, Switch } 
from 'react-router-dom';
import App from '../App'
import LenderForm from '../components/LenderForm';
import Account from '../components/Account';
import Home from '../components/Home';


class Routes extends React.Component {
	render() {
		return (
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/lender/signup" component={LenderForm} />
					<Route exact path="/lender/account" component={Account} />
					<Route exact path="/marketplace" component={Account} />
					<Route exact path="/marketplace/:loanid" component={Account} />
					<Route exact path="/lender/account/loan" component={Account} />
					<Route exact path="/lender/account/loan/:loanid" component={Account} />
					<Route exact path="/lender/account/transfer" component={Account} />
					<Route exact path="/borrower/signup" component={Account} />
					<Route exact path="/borrower/account" component={Account} />
					<Route exact path="/borrower/request" component={Account} />
					<Route exact path="/borrower/loan" component={Account} />
				</Switch>
		);
	}
}

export default Routes;