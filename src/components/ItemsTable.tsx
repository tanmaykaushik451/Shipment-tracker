import React, { useContext, useState } from "react";
import MaterialTable from "material-table";
import ShipmentContext from "../context/ShipmentContext";

const ItemsTable: React.FC = () => {
  const shipmentcontext = useContext(ShipmentContext);

  const { filtered } = shipmentcontext.State;

  const {getselected} = shipmentcontext
  // const [rowname,setrowname] = useState()

  const set =(rowData: any)=>{
    getselected(rowData)
    console.log(rowData)
  }

  return (
    <>
      <div style={{ width: "100%", overflowY: "hidden" }}>
        <MaterialTable
        actions={[{
          icon:"library_add",
          tooltip:"show details",
          onClick:(event,rowData)=> set(rowData)
        }]}
            options={{
            search: false,
            showTitle: false,
            toolbar: false,
            paging: false,
            padding: "dense",
            maxBodyHeight: "400px",
            minBodyHeight:"400px",
            paginationType: "stepped",
            tableLayout: "fixed",
          }}
          columns={[
            { title: "AWB NUMBER", field: "awbno" ,},
            { title: "TRANSPORTER", field: "carrier" },
            { title: "SOURCE", field: "from" },
            { title: "DESTINATION", field: "to" },
            { title: "BRAND", field: "carrier" },
            { title: "START DATE", field: "pickup_date" },
            {
              title: "STATUS",
              field: "current_status",
              cellStyle: {
                color: "green",
              },
            },
          ]}
          data={filtered}
        />
      </div>
    </>
  );
};

export default ItemsTable;
