export function filterCities (state, payload){
    if(state.cities.find(e => e.id === payload.id)){
        return [...state.cities]
    }else{

        return [...state.cities, payload]
    }
}