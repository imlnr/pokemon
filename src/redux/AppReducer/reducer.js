import { ADD_POKE_FAILURE, ADD_POKE_REQUEST, ADD_POKE_SUCCESS, GET_POKE_FAILURE, GET_POKE_REQUEST, GET_POKE_SUCCESS } from "./actionType";

const initialState = {
    isLoading: false,
    isError: false,
    pokemon: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKE_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case GET_POKE_SUCCESS:
            return { ...state, isLoading: false, isError: false, pokemon: action.payload };
        case GET_POKE_FAILURE:
            return { ...state, isLoading: false, isError: true };
        case ADD_POKE_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case ADD_POKE_SUCCESS:
            return { ...state, isLoading: false, isError: false, pokemon: [...state.pokemon, ...action.payload] };
        case ADD_POKE_FAILURE:
            return { ...state, isloading: false, isError: false }
        default:
            return state;
    }
}
