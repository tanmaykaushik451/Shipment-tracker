import { IInitialstate } from "../state/interface/IInitialState";
import {GET_SHIPMENTS, GET_COUNTERS, SET_FILTERS, GET_SELECTED, SELECT_DEFAULT} from "./Types"
export interface Action{
    type : string,
    payload? : any
}

export default  (state : IInitialstate,action:Action) : IInitialstate =>{
    switch(action.type){
        case GET_SHIPMENTS :
        return{
            ...state,
            shipments:action.payload
        }
        case SELECT_DEFAULT:
            return{
                ...state,
              filtered: state.shipments.filter((item) => item.current_status_code === "DEL")
            }
        case GET_COUNTERS:
            return{
                ...state,
                counters: [...state.shipments.reduce((a, c) => {
                    if (a.has(c.current_status_code)) {
                        a.get(c.current_status_code).count++;
                    } else {
                        a.set(c.current_status_code, { current_status_code: c.current_status_code, count: 1 });
                    }
                    return a;
                }, new Map()).values()]
            }
        case SET_FILTERS:
            return{
                ...state,
                filtered: state.shipments.filter((item) => item.current_status_code === action.payload)
            }
        case GET_SELECTED:
            return{
                ...state,
                selected: action.payload.scan            
            }
        default :
        return state
    }
}