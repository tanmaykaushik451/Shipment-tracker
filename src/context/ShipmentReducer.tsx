import { IInitialstate } from "../state/interface/IInitialState";
import {GET_SHIPMENTS, GET_COUNTERS} from "./Types"
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
        default :
        return state
    }
}