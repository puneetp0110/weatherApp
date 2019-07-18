import React from "react";
import PropTypes from "prop-types";
import WeatherItem from "./WeatherItem";
import { shadeColor } from "../utils/shade-color";

const test = {
    display:"flex",
    justifyContent: "space-between",
    fontSize: 10,
    textAlign: "center",
    color: "white",
    border: "5px outset white",
};
const container = {
    flex:1,
    marginTop: "20%",
};
export default class WeekWeather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {color} = this.props;
        return (
            <div className="week-container" style={container}>
                <div className="week-all-days" style={test}>
                    {this.props.weekWeather.weather.list.map((item, i) => {
                        const style = {
                            backgroundColor: shadeColor(color, -(i + 1) / 20)
                        };
                        return (<div key={i} className="week-one-day" style={style}>
                            <WeatherItem theme="small" data={item} country={this.props.weekWeather.weather.city.country} city={this.props.weekWeather.weather.city.name} />
                        </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
{/*
  props validation
*/}
WeekWeather.propTypes ={
    color: PropTypes.string.isRequired,
    weekWeather: PropTypes.object.isRequired
};