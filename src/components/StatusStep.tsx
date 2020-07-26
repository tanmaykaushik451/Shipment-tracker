import React from "react";
import { IStatusStep } from "./Interface/IStatusStep";

const StatusStep: React.FC<IStatusStep> = (props) => {
  const { status, time } = props;

  return (
    <div className="d-flex">
        <p className="mr-auto">{status}</p>
        <p>{time}</p>
    </div>
  );
};

export default StatusStep;
