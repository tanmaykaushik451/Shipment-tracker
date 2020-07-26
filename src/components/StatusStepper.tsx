import React, { useContext } from "react";
import ShipmentContext from "../context/ShipmentContext";
import StatusStep from "./StatusStep";
import destination from "../assets/destination.svg";
import warehouse from "../assets/warehouse.svg";

const StatusStepper = () => {
  const shipmentreducer = useContext(ShipmentContext);

  const { selected } = shipmentreducer.State;

  return (
    <div className="m-2 stepperdiv position-relative">
      <div className="position-absolute destination">
        <img src={destination} alt="destination" />
      </div>
      <ul>
        {selected == null ? (
          <div>
            <p className="color-red">No information yet</p>
          </div>
        ) : (
          selected.map((item) => {
            return (
              <li key={item.time}>
                <StatusStep time={item.time} status={item.status_detail} />
              </li>
            );
          })
        )}
      </ul>
      <div className="position-absolute warehouse">
        <img src={warehouse} alt="destination" />
      </div>
    </div>
  );
};

export default StatusStepper;
