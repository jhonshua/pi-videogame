import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import Detail from './components/Detail/Detail.jsx';
import Create from './components/Create/Create.jsx'
import Page404 from './components/Page404/Page404.jsx';







function App() {
  return (
    <div className="App">
     
   <Switch>
        <Route exact path={"/"} component={LandingPage } />
        <Route exact path={"/home"} component={Home } />
        <Route exact path={"/detail/:id"} component={Detail } />
        <Route exact path={"/create"} component={Create } />
        <Route path={"*"} component={Page404} />
    
   </Switch>




    </div>
  );
}

export default App;
