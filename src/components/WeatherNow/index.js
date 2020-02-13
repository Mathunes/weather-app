import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actionSearch from '../../actions';
import { connect } from 'react-redux';
import api from '../../services/api'

class WeatherNow extends Component {
    state = {
        userPosition: {
            lat: -15.7801,
            long: -47.9292
        },
    }

    componentDidUpdate() {
        console.log(this.props)
        
    }

    searchWeather() {
        this.props.searchWeatherNow(false, this.state.userPosition.lat, this.state.userPosition.long);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    userPosition: {
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    }
                });

                this.searchWeather();
            }, () => {
                this.searchWeather();
            });
        } else {
            this.searchWeather();
        }
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        let container;
        
        if (this.props.nowWeather.found) {
            if (!this.props.nowWeather.loading) {
                container =     
                    <div>
                        <h2>{this.props.nowWeather.data.name}</h2>
                        {this.props.nowWeather.data.weather.map((item, i) => {
                            return (
                                <span key={i}>{item.main}<br /></span>
                            )
                        })}
                        <span>Now</span><br />
                        <span>{this.props.nowWeather.data.main.temp}°C</span><br />
                        <span>Max: {this.props.nowWeather.data.main.temp_max}°C</span><br />
                        <span>Min: {this.props.nowWeather.data.main.temp_min}°C</span><br />
                        <span>Feels like: {this.props.nowWeather.data.main.feels_like}°C</span><br />
                        <span>Humidity: {this.props.nowWeather.data.main.humidity}°C</span><br />
                    </div>
            }
        }

        return (
            <div>
                {container}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    nowWeather: state.nowWeather
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionSearch, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WeatherNow);