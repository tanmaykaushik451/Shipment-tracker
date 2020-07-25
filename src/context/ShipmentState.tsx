import React, { useReducer } from "react"
import { InitialState } from "../state/InitialState"
import { IInitialstate } from "../state/interface/IInitialState"
import ShipmentReducer, { Action } from "./ShipmentReducer"
import ShipmentContext from "./ShipmentContext"
import axios from 'axios';

import { GET_SHIPMENTS, SHIPMENT_ERROR, GET_COUNTERS } from "./Types"

const ShipmentState =(props:any)=>{

    const [state,dispatch] = useReducer<React.Reducer<IInitialstate, Action>>(ShipmentReducer,InitialState)

    const getshipments = async ()=>{
        const apikey = process.env.REACT_APP_API_KEY
        const config ={
            headers:{
                'Content-Type':'application/json',
                'Authorization' : `Bearer ${apikey}`
            }
        }
        const body ={
            "email" : "tanmay.kaushik41@gmail.com"
        }
        try {
        const res = await axios.post('https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/tanmay',body,config)
        dispatch({type : GET_SHIPMENTS,payload:res.data.data})

        } catch (e) {
            dispatch({type:SHIPMENT_ERROR,payload : e.msg})
        }
    }

    const getcounters = ()=>{
        dispatch({type:GET_COUNTERS})
    }

    return(
        <ShipmentContext.Provider value={{
            State:state,
            getshipments,
            getcounters
        }}>
            {props.children}
        </ShipmentContext.Provider>
    )
}

export default ShipmentState