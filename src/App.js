import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './layout/Header';
import Routing from './routing/Routing';
import Footer from './layout/Footer';
import Loadding from './component/Loadding';


const  App = () => {

const [getloader, setloader] = useState(true)

useEffect(() => {
  setloader(!getloader);
}, [])

  return (
    <div className="App">
       <Router>
       <Header/>
      { getloader ? <Loadding/> :  <Routing/> }
     
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
