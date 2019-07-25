import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import randomColor from "randomcolor";
import { getWeather } from './weather';
import WeekWeather from './WeekWeather';
import {Checkbox} from "@salesforce/design-system-react";
/*
    Styles for displaying Weather for entire week
*/
const Container = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    max-width: 100%;
`;
/*
    ToggleButton is still not used but it would be used in 
    future to convert between Celcius and Farenhite
*/
const toggleButton = {
    fontSize: 12,
    textAlign: "left",
    color: "black",
    border: "5px outset white",
    itemAlign: "left",
    borderRadius: 10,
    position: "absolute",
    top: "30%",
    left:"5%"
}
class WeatherDisplay extends React.Component {
    /*
        State:
        weather => Response of the API call.
        color => Which color we want to display with weather,
        city => City returned from api call.
        country => Country returned from API call
        unit => Either Celcius or Farenhite based on user selection
    onTemperatureUnitButtonClick is bind to be able to use props and state
    */
    constructor(props) {
        super(props);

        this.state = {
            weather: null,
            color: randomColor({ luminosity: "dark", format: "hex" }),
            city: "",
            country: "",
            unit:"Metric"
        };
        this.onTemperatureUnitButtonClick = this.onTemperatureUnitButtonClick.bind(this)
    }
    /*
        Still under implementation
        Expected behaviour: User selects either Celcius and Farenhite 
        and calculations will be changed accordingly.
    */
    onTemperatureUnitButtonClick = (() => {
        this.setState({
            unit:""
        })
    })
    /*
        Call to getWeather with selectedCity as argument.
        Make it a promise as it asyncronous. 
        As soon as we return response from getWeather
        we use setState
        weather => Response 
        city => City returned from api call.
        country => Country returned from API call

        To do:
        Issue:
        componentDidMount is only called once so if users wants to 
        change state api call would not happen again.

    */
    componentDidMount() {
        getWeather(this.props.selectedCity).then((response) => {
            this.setState({
                weather: response,
                city: response.city.name,
                country: response.city.country
            });
        });
    }
    /*
        render:
        Checkbox => to change between Celcius and Farenhite (No props)
        WeekWeather will be rendered only when state.weather, 
        state.weather.city and state.weather.list are not undefined
        to display content of 7 days
            Props: 
                    Color => Background of component
                    weekWeather => response of Api along with city and state
    */
    render() {
        return (
            <Container className="weather-card">
            <div style={toggleButton}>
                    <Checkbox
                        labels={{label:"Celcius"}}
                        id="checkbox-toggle"
                        variant="toggle"
                        onChange={this.onTemperatureUnitButtonClick}
                    />
                </div>
                <div style={{position:"absolute", maxWidth:"50%",top: "30%", left: "25%"}}>
                    {this.state.weather && this.state.weather.city && this.state.weather.list ? <WeekWeather color={this.state.color}
                        weekWeather={this.state} /> : null}
                </div>
            </Container>
        );
    }
}
/*
    Validation to make sure selectedCity is not empty.
*/
WeatherDisplay.propTypes = {
    selectedCity: PropTypes.string.isRequired
};
export default WeatherDisplay;