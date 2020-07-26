import React, { useEffect, useContext } from "react"
import ShipmentContext from "../context/ShipmentContext"
import ShipmentCounter from "../components/ShipmentCounter"
import ItemsTable from "../components/ItemsTable"
import StatusStepper from "../components/StatusStepper"

const Home : React.FC = ()=>{

    const shipmentContext = useContext(ShipmentContext)

    const {getshipments,setdefaultfilter} = shipmentContext

    const {shipments} = shipmentContext.State

    useEffect(()=>{
        getshipments()
        // eslint-disable-next-line
    },[])

    useEffect(()=>{
        setdefaultfilter()
    },[shipments])
    
    return(
        <div className="d-flex flex-column">
            <ShipmentCounter/>
            <div className="d-flex align-items-center">
                <div className="stepper"><StatusStepper/></div>
                <div className="tablediv"><ItemsTable/></div>
            </div>
        </div>
    )
}

export default Home