import { Action } from "@ngrx/store";
import { initState, PartsState, PartsStateEnum } from "./parts.state";
import { PartsActions, PartsActionsTypes } from "./parts.actions";

export function PartsReducer(state : PartsState = initState, action:Action) {
    switch(action.type){ // Pour chaque action, on retourne un Clone du state (immutable)
        case PartsActionsTypes.GET_ALL_PARTS:
            console.log("Loading...");
            return {...state, dataState:PartsStateEnum.LOADING} // Renvoi un clone du state + le nouveau dataState

        case PartsActionsTypes.GET_ALL_PARTS_SUCCESS:
            return {...state, dataState:PartsStateEnum.LOADED, parts:(<PartsActions> action).payload}

        case PartsActionsTypes.GET_ALL_PARTS_ERROR:
            return{...state, dataState:PartsStateEnum.ERROR, errorMessage:(<PartsActions> action).payload}

        default : 
            return {...state}
    }
} // Le reducer reçoit state actuel + action dispatchée dans le store et retourne le new state