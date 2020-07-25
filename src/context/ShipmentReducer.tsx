import { IInitialstate } from "../state/interface/IInitialState";
import {GET_SHIPMENTS} from "./Types"
export interface Action{
    type : string,
    payload? : any
}

export default  (state : IInitialstate,action:Action) : IInitialstate =>{
    switch(action.type){
        case GET_SHIPMENTS :
        return{
            ...state,
            shipments: action.payload
        }
        default :
        return state
    }
}