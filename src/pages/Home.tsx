import React, { useEffect, useContext } from "react"
import ShipmentContext from "../context/ShipmentContext"
import ShipmentCounter from "../components/ShipmentCounter"
import ItemsTable from "../components/ItemsTable"

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
            <div className="d-flex justify-content-center align-items-center">
                <div className="stepper">hello</div>
                <div className="tablediv"><ItemsTable/></div>
            </div>
        </div>
    )
}

export default Home