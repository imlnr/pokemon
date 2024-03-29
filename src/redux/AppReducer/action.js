import axios from "axios";
import { ADD_POKE_FAILURE, ADD_POKE_REQUEST, ADD_POKE_SUCCESS, GET_POKE_FAILURE, GET_POKE_REQUEST, GET_POKE_SUCCESS } from "./actionType";

export const fetchPoke = () => {
    return async (dispatch) => {
        dispatch({ type: GET_POKE_REQUEST });
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6`);
            dispatch({ type: GET_POKE_SUCCESS, payload: res.data.results })
        } catch (error) {
            console.error(error);
            dispatch({ type: GET_POKE_FAILURE })
        }
    }

}
export const addPoke = (x) => {
    return async (dispatch) => {
        dispatch({ type: ADD_POKE_REQUEST });
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${x}&limit=9`);
            dispatch({ type: ADD_POKE_SUCCESS, payload: res.data.results })
        } catch (error) {
            console.error(error);
            dispatch({ type: ADD_POKE_FAILURE })
        }
    }

}