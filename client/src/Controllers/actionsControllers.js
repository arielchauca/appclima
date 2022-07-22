export function filterCities (state, payload){
    if(state.cities.find(e => e.id === payload.id)){
        return [...state.cities]
    }else{

        return [...state.cities, payload]
    }
}

export function deleteCities (state, payload) {
    return state.cities.filter(e => e.id !== payload)
}