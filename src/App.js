import React from "react";
import "./App.css";
import PokemonGallery from "./component/PokemonGallery"
import {BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import About from "./component/About";
import Home from "./component/Home";
import Header from "./component/Header"
import paths from "./constant/paths";
import PokemonDetailsPage from "./component/PokemonDetailsPage"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
    </div>
    <Switch>
    <Route path={paths.home} component={Home}/>
  <Route path={paths.about} component={About}/>
  <Route path={paths.PokemonGallery} component={PokemonGallery}/>
  <Route path={'/pokemon/:pokemonId'} component={PokemonDetailsPage}/>
    <Redirect to="/" render ={() => <Home/>}/>
    </Switch>

    </BrowserRouter>
  );
}
export default App;