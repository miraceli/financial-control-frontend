import React from "react";
import CostComponent from "./CostComponent";

export default function ExpenseComponent(props) {
  const costs = props.costs;

  return (
    <div>
      <h2>{props.expenseName}</h2>
      <ul>
        {costs.map((cost) => (
          <CostComponent
            key={cost.id}
            name={cost.name}
            value={cost.valuePayable}
            date={cost.datePayable}
          />
        ))}
      </ul>
    </div>
  );
}
