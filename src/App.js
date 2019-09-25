import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 

import './App.css';


import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';



import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';


class  App extends React.Component  {

	unsubscribeFromAuth = null;

	componentDidMount() {

		const { setCurrentUser } = this.props;


		this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
	          	setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()
						});
				});
			}
				else {
				setCurrentUser(userAuth);} 			
		});
	}

	componentWillUnmount() {
				this.unsubscribeFromAuth();
			}

  
	render() {

		return (
	  	<div>
	  		<Header/>
		  	<Switch>
			    <Route  exact path = '/' component={HomePage} />
			    <Route  exact path = '/checkout' component={CheckoutPage} />
			    <Route exact path ='/signin'
		            render={() =>
		              this.props.currentUser ? (
                <Redirect to='/' />
			              ) : (
			                <SignInAndSignUpPage />
			              )
			            }
			          />
			    <Route  path = '/shop' component={ShopPage}/>
			</Switch>
	    </div>);

	}

}


const mapDispatchToProps = dispatch => ({
	setCurrentUser : user => dispatch (setCurrentUser(user) )
})

const mapStateToProps = createStructuredSelector ({
	currentUser: selectCurrentUser
})


export default connect(mapStateToProps,mapDispatchToProps,)(App);	