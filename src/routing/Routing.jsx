import React from 'react'
import { Route, Switch} from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Country from '../pages/Country';
import CountryDetails from '../component/CountryDetails';


const Routing = () => {
    return (
        <Switch>
             <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/country" component={Country}/>
              <Route exact path="/country/:name" component={CountryDetails}/>
        </Switch>
    )
}

export default Routing
