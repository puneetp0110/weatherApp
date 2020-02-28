import React from 'react';
import PropTypes from 'prop-types';
import {
    Dropdown,
} from '@salesforce/design-system-react';
import WeatherDisplay from './WeatherDisplay';
import Image from "../assets/images/logo.svg";
import Background from "../assets/images/welcome-mat/bg-info@2x.png";
import DropImage from "../assets/images/themes/oneSalesforce/banner-user-default.png";
/*
Create styles for header, dropdown and Salesforce
*/
const salesforce = {
    position: "absolute",
    top: 20,
    left: 20,
    border: "2px outset white"
};
const header = {
    display:"flex",
    justifyContent:"space-between",
    backgroundImage: `url(${Background})`,
    opacity: .8,
    maxWeidth: "100%",
    height: "Auto",
    alignItems: 'center',
    border: "5px outset black"
};
const DropDownList = {
    height: "10%",
    width: "30%",
    position: "absolute",
    top: "30%",
    right: "35%",
    backgroundImage: `url(${DropImage})`,
    fontSize: 20,
    borderRadius: 20,
    border: "5px outset blue",
};

class SelectCity extends React.Component {
    /*
    Constructor:
    Define state and bind seletcity so it 
    can access props and state.
    */
    constructor(props) {
        super(props);
        this.state = {
            selectedCity: "",
        };
        this.selectCity.bind(this);
    }

    /*
    Everytime user selects city from dropdown
    onSubmit is called.
    Value of city is updated in state. Everytime 
    state is changed, component will re-render
    */
    onSubmit = ((e) => {
        this.setState({
            selectedCity: e,
        });
    })

    /*
    SelectCity:
    return Dropdown and which is rendered using render()
    */
    selectCity = (() => {
        return (
            <Dropdown
                style={DropDownList}
                label="Select a city"
                onSelect={(value) => {
                    this.onSubmit(value.label);
                }}
                options={this.props.cityList}
            />
        );
    })

    /*
        Screen will contain three components
        Header, Dropdown and Weather Display 
        WeatherDisplay will only be rendered 
        when state.selectedCity is not undefined

        Every time state is updated, components will
        be re-rendered.
    */
    render() {
        return (
            <div style={{flex:1 ,alignItem: "center",}}>
                <div style={header}>
                    <h1 style={{paddingLeft:"40%", paddingTop: "50px" }}>Check Weather!!!!</h1>
                    <img src={Image} height="100" width="100" style={salesforce} />
                </div>
                <div style={{ alignItems:"center",maxWidth:"100%", height:"40", display:"flex"}}>
                    {this.selectCity()}
                </div>
                <div>
                    {this.state.selectedCity ? <WeatherDisplay selectedCity={this.state.selectedCity} /> : null}
                </div>
            </div>
        );
    }

};
/*
    props validation:
    Verify if cityList is an array or not.
*/
SelectCity.propTypes={
    cityList: PropTypes.array
};
export default SelectCity;