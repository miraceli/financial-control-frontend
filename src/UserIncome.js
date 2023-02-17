import React from "react";
import IncomeComponent from "./IncomeComponent";

export default class UserIncome extends React.Component {
  state = { incomes: [], loading: true };

  async componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    config.headers["Authorization"] =
      "Token " + localStorage.getItem("token");

    var url = "http://127.0.0.1:8000/income/";
    const response = await fetch(url, config);
    const data = await response.json();
    console.log(data);
    this.setState({ incomes: data, loading: false });
  }

  render() {
    const incomesApi = this.state.incomes;

      return (
        <div>
          {/* <IncomeComponent incomeName={'Meus recebimentos'} /> */}
          {incomesApi.map((income) => (
            <IncomeComponent
              key={income.id}
              incomeName={income.name}
              cashs={income.cash_set}
            />
          ))}
        </div>
      );
  }
}
