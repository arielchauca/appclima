import { GET_CITY_BY_NAME } from "./types";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getCityByName = (name) => async (dispatch) => {
  try {
    let city;
    if (name) {
      city = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`
      );
      if (city.data) {
        const ciudad = {
            min: Math.round(city.data.main.temp_min),
            max: Math.round(city.data.main.temp_max), 
            img: city.data.weather[0].icon,
            id: city.data.id,
            wind_spped: city.data.wind.speed,
            wind_deg: city.data.wind.deg,
            temp: city.data.main.temp,
            name: city.data.name,
            weather: city.data.weather[0].main,
            description: city.data.weather[0].description,
            clouds: city.data.clouds.all,
            latitud: city.data.coord.lat,
            longitud: city.data.coord.lon
          };
        dispatch({
          type: GET_CITY_BY_NAME,
          payload: ciudad,
        });
      } else {
        console.log("no se encontro la ciudad");
      }
    } else {
      console.log("No ingreso un nombre");
    }
  } catch (error) {
    console.log({
      message: error.message,
      origin: "getCityName Actions",
      error: error,
    });
  }
};
