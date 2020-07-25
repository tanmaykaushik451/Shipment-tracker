import { createContext } from "react"
import { IShipmentContext } from "./interfaces/IShipmentContext"
import { InitialState } from "../state/InitialState"

const ContextState : IShipmentContext={
    State : InitialState,
    getshipments: ()=>{throw new Error("Shipments not available")}
}

const ShipmentContext = createContext<IShipmentContext>(ContextState)

export default ShipmentContext