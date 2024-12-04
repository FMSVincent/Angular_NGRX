import { Action } from "@ngrx/store";
import { Parts } from "../model/parts.model";

export enum PartsActionsTypes{

    GET_ALL_PARTS = "[Parts] Get All Aircrafts", 
    GET_ALL_PARTS_SUCCESS = "[Parts] Get All Aircrafts Success",
    GET_ALL_PARTS_ERROR = "[Parts] Get All Aircrafts Error",
}

export class GetAllPartsAction implements Action{
    type: PartsActionsTypes = PartsActionsTypes.GET_ALL_PARTS;
    constructor(public payload:any) {
    }
}
export class GetAllPartsSuccess implements Action{
    type: PartsActionsTypes = PartsActionsTypes.GET_ALL_PARTS_SUCCESS;
    constructor(public payload:Parts[]) {
    }
}
export class GetAllPartsError implements Action{
    type: PartsActionsTypes = PartsActionsTypes.GET_ALL_PARTS_ERROR;
    constructor(public payload:string) { // Message d'erreur
    }
}

export type PartsActions = GetAllPartsAction | GetAllPartsSuccess | GetAllPartsError;