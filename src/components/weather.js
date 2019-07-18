
const openWeatherApiKey = "d06d175e216dbb57af4544308dfd01b2";

/**
 * get the weater for given city 
 */
export async function getWeather(city) {
    try {
        return await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${openWeatherApiKey}`).then((response) => response.json());
        // This is a second api
        // const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}`);
    } catch (error) {

        throw new Error(`Weather fetch failed or could not resolve with error: ${error.message}`);
    }
}

export default getWeather;