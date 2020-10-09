import React from 'react';
import './App.css';
import HomePage from './PageComponent/homepage.component';
import {Switch,Route} from 'react-router-dom';
import ShopPage from "./Component/shop/shop.component"
import Header from "./Component/header-component/header.component"


function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
<Route exact path='/' component={HomePage}></Route>
<Route exact path='/shop' component={ShopPage}></Route>
</Switch>   
    </div>
  );
}

export default App;
