import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SelectCity from './SelectCity';
import WeatherDisplay from './WeatherDisplay';
import Login from './Login';

const App = () => (
    <Router>
        {/* Create a list of cities that we want to display on
        dropdown and pass them as props to SelecCity component and render */}
        <div className="App">
            {/* <SelectCity cityList={[{ label: 'Milwaukee', value: 'A0' },
                { label: 'Chicago', value: 'B0' },
                { label: 'Minneapolis', value: 'C0' },
                { label: 'Dallas', value: 'D0' }]} /> */}
            <Route path ="/Login" component={Login}></Route>
            {/* <Route path ="/WeatherDisplay" component={WeatherDisplay}></Route> */}
        </div>
    </Router>
);

export default App;
