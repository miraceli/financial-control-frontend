import React from "react";

export default function CashComponent(props) {
  return (
    <li>
      {props.name} <p>Valor: {props.value}</p> <p>Data: {props.date}</p>
    </li>
  );
}
