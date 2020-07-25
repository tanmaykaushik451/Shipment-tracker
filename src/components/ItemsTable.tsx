import React, { useContext } from "react"
import MaterialTable from "material-table";
import ShipmentContext from "../context/ShipmentContext";

const ItemsTable : React.FC =()=>{

    const shipmentcontext = useContext(ShipmentContext)

    const {filtered} = shipmentcontext.State


    return(
        <>
        <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "AWB NUMBER", field: "awbno" },
            { title: "TRANSPORTER", field: "carrier" },
            { title: "SOURCE", field: "from"},
            { title: "DESTINATION", field: "to"},
            { title: "BRAND", field: "carrier"},
            { title: "START DATE", field: "pickup_date"},
            { title: "ETD", field: "birthYear"},
            { title: "STATUS", field: "current_status"},
          ]}
          data={filtered}
        />
      </div>
        </>
    )

}

export default ItemsTable