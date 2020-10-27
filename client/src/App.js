import Nav from "./Navigation.component/Nav"
import React,{useState,useEffect} from "react"
import {Switch,Route} from "react-router-dom"
import Home from "./Home/Home";
import FoodsPage from "./Foods/FoodsPage";
import "./App.css"
function App() {
  

  return (
    <div className="App">
        <Nav/>
        <div className="App__body">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/food/:category?"  component={FoodsPage}/>
        </Switch>
        </div>
    </div>
  );
}

export default App;
