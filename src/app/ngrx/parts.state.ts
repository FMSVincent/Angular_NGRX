import { Parts } from "../model/parts.model";

export enum PartsStateEnum{ // Les différents états du state
    LOADING = "Loading", // chargement en cours
    LOADED = "Loaded", // chargé 
    ERROR = "Error", // erreur
    INITIAL ="Initial" // état initial 
}
export interface PartsState { // Strucuture du STATE
    parts : Parts[],
    errorMessage:string,
    dataState : PartsStateEnum // état du state
}

// Il est nécessaire de définir l'état du state avec des valeurs par défaut
export const initState : PartsState = {
    parts : [],
    errorMessage:"",
    dataState : PartsStateEnum.INITIAL
}