import React from "react"

export interface ICounter{
    current_status_code : string,
    count : Number
}

const CounterItem : React.FC<ICounter> =({current_status_code,count})=>{
    return(
        <div className="d-flex flex-column p-2 counteritem">
           <div>
               {current_status_code}
           </div>
           <div className="d-flex justify-content-center">
               <p>{count}</p>
           </div>
        </div>
    )
}

export default CounterItem