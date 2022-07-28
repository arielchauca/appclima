import {
  GET_CITY_BY_NAME,
  DELETE_CITY,
  GET_DAYS_BY_CITY,
  GET_CITY_BY_ID,
  CLEAR_DETAILS,
  CLEAR_DAYS,
} from "../redux/types.js";
import {
  filterCities,
  deleteCities,
} from "../Controllers/actionsControllers.js";

const initialState = {
  cities: [],
  details: {},
  cityDays: {},
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CITY_BY_NAME:
      return {
        ...state,
        cities: filterCities(state, payload),
      };
    case DELETE_CITY:
      return {
        ...state,
        cities: deleteCities(state, payload),
      };
    case GET_CITY_BY_ID:
      return {
        ...state,
        details: payload,
      };
    case GET_DAYS_BY_CITY:
      return {
        ...state,
        cityDays: payload,
      };
    case CLEAR_DETAILS:
      return {
        ...state,
        details: {},
      };
    case CLEAR_DAYS:
      return {
        ...state,
        cityDays: {},
      };
    default:
      return state;
  }
}

export default rootReducer;
