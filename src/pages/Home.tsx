import React, { useEffect, useContext } from "react";
import ShipmentContext from "../context/ShipmentContext";
import ShipmentCounter from "../components/ShipmentCounter";
import ItemsTable from "../components/ItemsTable";
import StatusStepper from "../components/StatusStepper";

const Home: React.FC = () => {
  const shipmentContext = useContext(ShipmentContext);

  const { getshipments, setdefaultfilter } = shipmentContext;

  const { shipments } = shipmentContext.State;

  useEffect(() => {
    getshipments();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setdefaultfilter();
  }, [shipments]);

  return (
    <div className="d-flex flex-column justify-content-center">
      {shipments.length !== 0 ? (
        <ShipmentCounter />
      ) : (
        <div className="align-self-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="d-flex align-items-center flex-column flex-md-row">
        <div className="stepper">
          <StatusStepper />
        </div>
        <div className="tablediv">
          <ItemsTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
