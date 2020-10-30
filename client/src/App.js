import Nav from "./Navigation.component/Nav"
import React,{useState,useEffect} from "react"
import {Switch,Route} from "react-router-dom"
import Home from "./Home/Home";
import FoodsPage from "./Foods/FoodsPage";
import "./App.css"
import Login from "./Login";
function App() {
  const [navEnabled,setNavEnabled] = useState(true);

  return (
    <div className="App">
        
        {navEnabled && <Nav/>}
        <div className="App__body">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/food/:category?"  component={FoodsPage}/>
          <Route path="/login"  children={<Login setDisableNav={setNavEnabled}/>}/>
        </Switch>
        </div>
    </div>
  );
}

export default App;
