import React from 'react';
import './App.css';
import Home from "./components/Home"
import Beers from "./components/Beers"
import NewBeer from "./components/NewBeer"
import RandomBeer from "./components/RandomBeer"
import SingleBeer from "./components/SingleBeer"
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/beers/:beerId" component={SingleBeer}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/new-beer" component={NewBeer}/>
      </Switch>
      </div>
    );
  }

}

export default App;
