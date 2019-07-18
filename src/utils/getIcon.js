const getIcon = function(id) {
    if(id >= 200 && id < 300){
        return "RAIN";
    } if (id >= 300 && id < 500){
        return "SLEET";
    } if (id >= 500 && id < 600){
        return "RAIN";
    } if (id >= 600 && id < 700){
        return "SNOW";
    } if (id >= 700 && id < 800){
        return "FOG";
    } if (id === 800){
        return "CLEAR_DAY";
    } if (id >= 801 && id < 803){
        return "PARTLY_CLOUDY_DAY";
    } if (id >= 802 && id < 900){
        return "CLOUDY";
    } if (id === 905 || (id >= 951 && id <= 956)){
        return "WIND";
    } if (id >= 900 && id < 1000){
        return "RAIN";
    }
};

export { getIcon };
