import React, { useEffect, useContext, useState } from "react";
import ShipmentContext from "../context/ShipmentContext";
import CounterItem from "./CounterItem";

const ShipmentCounter = () => {

    
  const shipmentcontext = useContext(ShipmentContext);
  const [loading, setloading] = useState(false);

  const { getcounters } = shipmentcontext;

  const {shipments} =shipmentcontext.State

  useEffect(() => {
      setloading(true)
    getcounters();
    setloading(false)
    // eslint-disable-next-line
  }, [shipments]);


  const { counters } = shipmentcontext.State;


  return (
    <div className="d-flex justify-content-center align-items-center counterlist">
      {!loading &&
        counters !== [] &&
        counters.map((counter) => {
          return (
            <CounterItem key={counter.current_status_code} count={counter.count} current_status_code={counter.current_status_code} />
          );
        })}
    </div>
  );
};

export default ShipmentCounter;
