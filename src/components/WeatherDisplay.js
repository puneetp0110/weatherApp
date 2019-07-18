import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import randomColor from "randomcolor";
import { getWeather } from './weather';

import WeekWeather from './WeekWeather';

const Container = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    max-width: 100%;
`;
class WeatherDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weather: null,
            color: randomColor({ luminosity: "dark", format: "hex" }),
            city: "",
            country: ""
        };
    }

    componentDidMount() {
        getWeather(this.props.selectedCity).then((response) => {
            this.setState({
                weather: response,
                city: response.city.name,
                country: response.city.country
            });
        });
    }

    render() {
        return (
            <Container className="weather-card">
                <div style={{position:"absolute", maxWidth:"50%",top: "30%", left: "25%"}}>
                    {this.state.weather && this.state.weather.city && this.state.weather.list ? <WeekWeather color={this.state.color}
                        weekWeather={this.state} /> : null}
                </div>
            </Container>
        );
    }
}
WeatherDisplay.propTypes = {
    selectedCity: PropTypes.string.isRequired
};
export default WeatherDisplay;