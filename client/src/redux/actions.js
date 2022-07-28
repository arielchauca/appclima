import {
  GET_CITY_BY_NAME,
  DELETE_CITY,
  GET_CITY_BY_ID,
  GET_DAYS_BY_CITY,
  CLEAR_DETAILS,
  CLEAR_DAYS,
} from "./types";
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
          wind_speed: city.data.wind.speed,
          wind_deg: city.data.wind.deg,
          temp: city.data.main.temp,
          name: city.data.name,
          visibility: city.visibility,
          weather: city.data.weather[0].main,
          description: city.data.weather[0].description,
          pressure: city.data.main.pressure,
          clouds: city.data.clouds.all,
          latitud: city.data.coord.lat,
          longitud: city.data.coord.lon,
          humidity: city.data.main.humidity,
          feel: city.data.main.feels_like,
          time: city.timezone,
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

export const deleteCity = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_CITY,
      payload: id,
    });
  } catch (error) {
    console.log({
      message: error.message,
      origin: "deleteCity Actions",
      error: error,
    });
  }
};

export const getCityById = (id) => async (dispatch) => {
  try {
    let city = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`
    );

    const ciudad = {
      min: Math.round(city.data.main.temp_min),
      max: Math.round(city.data.main.temp_max),
      img: city.data.weather[0].icon,
      id: city.data.id,
      wind_speed: city.data.wind.speed,
      wind_deg: city.data.wind.deg,
      temp: Math.round(city.data.main.temp),
      name: city.data.name,
      visibility: city.data.visibility,
      weather: city.data.weather[0].main,
      description: city.data.weather[0].description,
      pressure: city.data.main.pressure,
      clouds: city.data.clouds.all,
      latitud: city.data.coord.lat,
      longitud: city.data.coord.lon,
      humidity: city.data.main.humidity,
      feel: Math.round(city.data.main.feels_like),
      time: city.data.timezone,
    };

    dispatch({
      type: GET_CITY_BY_ID,
      payload: ciudad,
    });
  } catch (error) {
    console.log({
      message: error.message,
      origin: "getCityById Actions",
      error: error,
    });
  }
};

export const getCityByCoors = (lat, lon) => async (dispatch) => {
  try {
    const city = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    console.log(
      "🚀 ~ file: actions.js ~ line 110 ~ getCityByCoors ~ city",
      city.data
    );

    const ciudad = {
      min: Math.round(city.data.main.temp_min),
      max: Math.round(city.data.main.temp_max),
      img: city.data.weather[0].icon,
      id: city.data.id,
      wind_speed: city.data.wind.speed,
      wind_deg: city.data.wind.deg,
      temp: Math.round(city.data.main.temp),
      name: city.data.name,
      visibility: city.data.visibility,
      weather: city.data.weather[0].main,
      description: city.data.weather[0].description,
      pressure: city.data.main.pressure,
      clouds: city.data.clouds.all,
      latitud: city.data.coord.lat,
      longitud: city.data.coord.lon,
      humidity: city.data.main.humidity,
      feel: Math.round(city.data.main.feels_like),
      time: city.data.timezone,
    };

    dispatch({
      type: GET_CITY_BY_NAME,
      payload: ciudad,
    });
  } catch (error) {
    console.log({
      message: error.message,
      origin: "getCityByCoors Actions",
      error: error,
    });
  }
};

export const getDaysCity = (lat, long) => async (dispatch) => {
  try {
    const city = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`
    );
    dispatch({
      type: GET_DAYS_BY_CITY,
      payload: city.data,
    });
  } catch (error) {
    console.log({
      message: error.message,
      origin: "getDaysCity Actions",
      error: error,
    });
  }
};

export const clearDays = () => (dispatch) => {
  try {
    dispatch({
      type: CLEAR_DAYS,
    });
  } catch (error) {
    console.log({
      message: error.message,
      origin: "clearDays Actions",
      error: error,
    });
  }
};

export const clearDetails = () => (dispatch) => {
  try {
    dispatch({
      type: CLEAR_DETAILS,
    });
  } catch (error) {
    console.log({
      message: error.message,
      origin: "clearDetails Actions",
      error: error,
    });
  }
};
