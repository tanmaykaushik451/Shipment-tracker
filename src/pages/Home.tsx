import React, { useEffect, useContext } from "react"
import ShipmentContext from "../context/ShipmentContext"
import ShipmentCounter from "../components/ShipmentCounter"

const Home : React.FC = ()=>{

    const shipmentContext = useContext(ShipmentContext)

    const {getshipments} = shipmentContext

    useEffect(()=>{
        getshipments()
        // eslint-disable-next-line
    },[])

    return(
        <div className="d-flex flex-column">
            <ShipmentCounter/>
        </div>
    )
}

export default Home