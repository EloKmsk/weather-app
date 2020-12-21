import React, {Component} from "react";
import './App.css';
import TodayWeather from './TodayWeather';
import OtherdayWeather from "./OtherdayWeather";

class App extends Component {
  render() {
      return (
        <div className="App">
          <div className="place">
            <input type="text" className="one" placeholder="Longitude"/>
            <input type="text" className="two" placeholder="Latitude"/>
          </div>
          <TodayWeather/>
          <OtherdayWeather/>
        </div>
      );
  }
}

export default App;



