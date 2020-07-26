import React, { useReducer } from "react"
import { InitialState } from "../state/InitialState"
import { IInitialstate } from "../state/interface/IInitialState"
import ShipmentReducer, { Action } from "./ShipmentReducer"
import ShipmentContext from "./ShipmentContext"
import axios from 'axios';

import { GET_SHIPMENTS, SHIPMENT_ERROR, GET_COUNTERS, SET_FILTERS, GET_SELECTED, SELECT_DEFAULT } from "./Types"

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

    const setfilters =(status : string)=>{
        dispatch({type:SET_FILTERS,payload:status})
    }

    const getselected =(selected : any)=>{
        dispatch({type:GET_SELECTED,payload:selected})
    }

    const setdefaultfilter =()=>{
        dispatch({type:SELECT_DEFAULT})
    }

    return(
        <ShipmentContext.Provider value={{
            State:state,
            getshipments,
            getcounters,
            setfilters,
            getselected,
            setdefaultfilter
        }}>
            {props.children}
        </ShipmentContext.Provider>
    )
}

export default ShipmentState