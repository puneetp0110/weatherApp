import React from "react";
import Skycons from "react-skycons";
import PropTypes from "prop-types";
import Moment from "moment";
import NumberEasing from "che-react-number-easing";
import { getIcon } from "../utils/getIcon";

export default class WeatherItem extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            response:""
        }
    }
    /*
        getDerivedStateFromProps:
            Convert all props to state
            Returned items will converted to state variable
    */
    static getDerivedStateFromProps(props, state) {
        const temperature = props.data.temp.max;
        const weatherType = props.data.weather[0].description;
        const icon = props.data.weather[0].id;

        return {
            temperature,
            weatherType,
            icon,
        };
    }
    /*
        Used to render days
    */
    _renderDayName() {
        const days = {
            sameDay: "[Today]",
            nextDay: "ddd",
            nextWeek: "ddd",
            lastDay: "ddd",
            lastWeek: "ddd"
        };

        return <p className="timestamp">
            {Moment(this.props.data.dt * 1000).calendar(null, days)}
        </p>;
    }
    /*
        render
            temperature => Temperature of that specific day.
            weatherType => Example rainy etc.
            icon => To display icon (Not working currently)
    */
    render() {
        let temperature; let weatherType; let icon;
        temperature = this.state.temperature;
        weatherType = this.state.weatherType;
        icon = this.state.response.icon;
        return (
            <div className={`weather-item ${  this.props.theme}`}>
                <p className="location">
                    <span className="city">{this.props.city}</span>
                    <span className="country">{this.props.country ? `, ${this.props.country}` : null}</span>
                </p>
                <Skycons color="white" icon={getIcon(icon)} /> 
                {/* Not able to load icons yet but able to get icon names. Related to loading css */}
                {this._renderDayName()}
                <div className="temperature-info">
                    <p className="temperature">
                        {/*
                            NumberEasing is used for displaying temperature. In case number changes 
                            really fast.
                        */}
                        <NumberEasing value={Math.round(temperature)}
                            speed={1200}
                            ease='circInOut' />
                        °C
                    </p>
                    <p className="info">{weatherType}</p>
                </div>
            </div>
        );
    }

}
/*
    props validations
*/
WeatherItem.propTypes = {
    theme: PropTypes.string,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
};