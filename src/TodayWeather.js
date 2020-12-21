import React, { Component } from 'react';
import axios from 'axios';

export default class TodayWeather extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }
    
  render() {
    const data = this.state.data;
      if(Object.keys(data).length !== 0) {
        return (
          <div className="main">
            <div className="icon">
              <img src="" alt=""/>
            </div>
            <div className="temp">
              <p>Aujourd'hui</p>
              <h1>Lens</h1>
              <p>Température: {this.state.data.daily[0].temp.day} °C</p>
              <p>{this.state.data.daily[0].weather[0].description}</p>
            </div>
          </div>
        )
      }
      else {
        return (<p>Loading..</p>)
      }
  }
}


