import React, { useContext } from "react";
import ShipmentContext from "../context/ShipmentContext";

export interface ICounter {
  current_status_code: string;
  count: Number;
}

const CounterItem: React.FC<ICounter> = ({ current_status_code, count }) => {
  const shipmentcontext = useContext(ShipmentContext);

  const { setfilters } = shipmentcontext;

  const showfilter = () => {
    setfilters(current_status_code);
  };

  return (
    <div className="d-flex flex-column p-2 counteritem" onClick={showfilter}>
      <div>{current_status_code}</div>
      <div className="d-flex justify-content-center">
        <p className="m-0">{count}</p>
      </div>
    </div>
  );
};

export default CounterItem;
