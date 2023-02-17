import React from "react";

export default function AccountComponent(props) {
  const Tipo = (props) => {
    return (
      <span>Tipo: {props.accountType === "C" ? "Crédito" : "Débito"}</span>
    );
  };

  return (
    <div>
      <h2>{props.accountName}</h2>
      <ul>
        <li>ID: {props.id} </li>
        <p>Banco: {props.bankName}</p>
        <p>
          <Tipo accountType={props.accountType} />
        </p>
      </ul>
    </div>
  );
}
