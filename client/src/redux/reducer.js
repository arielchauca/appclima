import { GET_CITY_BY_NAME } from '../redux/types.js';
import { filterCities } from '../Controllers/actionsControllers.js';

const initialState = {
    cities: []
}

function rootReducer(state = initialState, { type, payload}){
    switch(type){
        case GET_CITY_BY_NAME: return {
            ...state,
            cities: filterCities(state, payload)
        }

        default:
            return state;
    }
}

export default rootReducer;
