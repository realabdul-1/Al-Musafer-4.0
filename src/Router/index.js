import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Home from '../Components/Home';
import Fleet from '../Components/Fleet';
import Services from '../Components/Services';
import Contactus from '../Components/Contactus';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/home"><Home /></Route>
				<Route exact path="/fleet"><Fleet /></Route>
				<Route exact path="/services"><Services /></Route>
				<Route exact path="/contactus"><Contactus /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;