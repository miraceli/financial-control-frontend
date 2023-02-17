import React from "react";
import ExpenseComponent from "./ExpenseComponent";

export default class UserExpense extends React.Component {
  state = { expenses: [], loading: true};

  async componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    config.headers["Authorization"] =
      "Token " + localStorage.getItem("token");

    var url = "http://127.0.0.1:8000/expense/";
    const response = await fetch(url, config);
    const data = await response.json();
    console.log(data);
    this.setState({ expenses: data, loading: false });
  }

  render() {
    const expensesApi = this.state.expenses;

      return (
        <div>
          {/* <ExpenseComponent expenseName={'Minhas despesas'} /> */}
          {expensesApi.map((expense) => (
            <ExpenseComponent
              key={expense.id}
              expenseName={expense.name}
              costs={expense.cost_set}
            />
          ))}
        </div>
      );
  }
}
