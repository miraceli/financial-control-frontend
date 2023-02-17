import React from "react";
import CashComponent from "./CashComponent";

export default function IncomeComponent(props) {
  const cashs = props.cashs;

  return (
    <div>
      <h2>{props.incomeName}</h2>
      <ul>
        {cashs.map((cash) => (
          <CashComponent
            key={cash.id}
            name={cash.name}
            value={cash.valueReceivable}
            date={cash.dateReceivable}
          />
        ))}
      </ul>
    </div>
  );
}

