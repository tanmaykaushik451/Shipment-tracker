import React, { useReducer } from "react"
import { InitialState } from "../state/InitialState"
import { IInitialstate } from "../state/interface/IInitialState"
import ShipmentReducer, { Action } from "./ShipmentReducer"
import ShipmentContext from "./ShipmentContext"
import axios from 'axios';

import { GET_SHIPMENTS, SHIPMENT_ERROR } from "./Types"

const ShipmentState =(props:any)=>{

    const [state,dispatch] = useReducer<React.Reducer<IInitialstate, Action>>(ShipmentReducer,InitialState)

    const getshipments = async ()=>{
        const config ={
            headers:{
                'Content-Type':'application/json',
                'Authorization' : 'Bearer tTU3gFVUdP'
            }
        }
        const body ={
            "email" : "tanmay.kaushik41@gmail.com"
        }
        try {
        const res = await axios.post('https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/tanmay',body,config)
        dispatch({type : GET_SHIPMENTS,payload:res.data})

        } catch (e) {
            dispatch({type:SHIPMENT_ERROR,payload : e.response.data.msg})
        }
    }

    return(
        <ShipmentContext.Provider value={{
            State:state,
            getshipments
        }}>
            {props.children}
        </ShipmentContext.Provider>
    )
}

export default ShipmentState