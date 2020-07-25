import { IInitialstate } from "../../state/interface/IInitialState";

export interface IShipmentContext {
    State: IInitialstate,
    getshipments : () => void
}
