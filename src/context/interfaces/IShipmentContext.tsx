import { IInitialstate } from "../../state/interface/IInitialState";

export interface IShipmentContext {
    State: IInitialstate,
    getshipments : () => void,
    getcounters :()=>void,
    setfilters :(status : string)=>void,
    getselected :(status : string)=>void,
    setdefaultfilter :()=>void,
}
