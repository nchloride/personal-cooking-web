import Nav from "./Navigation.component/Nav"
import React,{useState,useEffect} from "react"
import {Switch,Route} from "react-router-dom"
import Home from "./Home/Home";
import FoodsPage from "./Foods/FoodsPage";
import "./App.css"
import Dashboard from "./dashboard";
import {useDispatch} from "react-redux"
import { fetchFoods } from "./actions/foodActions";
import Recipe from "./Recipe/Recipe";
import Footer from "./Footer/Footer";
import Service from "./Services/Service";
import NotFound from "./NotFound/NotFound";


function App() {
  const [navEnabled,setNavEnabled] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoods());

  }, [])
  return (
    <>
      <div className="App__background-cover"></div>
      <div className="App">
          
          {navEnabled && <Nav/>}
          <div className="App__body">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/foods/:category?"  component={FoodsPage}/>
            <Route path="/recipe/:foodname?" component={Recipe}/>
            <Route path="/services" component={Service}/>
            <Route path="/dashboard"  children={<Dashboard setEnableNav={setNavEnabled}/>}/>
            <Route path="*" exact component={NotFound}/>
          </Switch>
          </div>
          {navEnabled && <Footer/>}
          
      </div>
    </>
  );
}

export default App;
