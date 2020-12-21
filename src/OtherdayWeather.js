import React, { Component } from 'react';
import axios from 'axios';

export default class OtherdayWeather extends Component {
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
                <div className="bottom">
                    <div className="day">
                        <p><strong>Jeudi</strong></p>
                        <img src="" alt=""/>
                        <p>{this.state.data.daily[1].temp.day}°C</p>
                    </div>
                    <div className="day">
                        <p><strong>Vendredi</strong></p>
                        <img src="" alt=""/>
                        <p>{this.state.data.daily[2].temp.day}°C</p>
                    </div>
                    <div className="day">
                        <p><strong>Samedi</strong></p>
                        <img src="" alt=""/>
                        <p>{this.state.data.daily[3].temp.day}°C</p>
                    </div>
                    <div className="day">
                        <p><strong>Dimanche</strong></p>
                        <img src="" alt=""/>
                        <p>{this.state.data.daily[4].temp.day}°C</p>
                    </div>
                </div>
            )
        }
        else {
            return (<p>Loading..</p>);
          }
    }
}

