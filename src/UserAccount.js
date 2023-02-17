import React from "react";
import AccountComponent from "./AccountComponent";

export default class UserAccount extends React.Component {
  state = { accounts: [], loading: true};

  async componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    config.headers["Authorization"] =
      "Token " + localStorage.getItem("token");

    var url = "http://127.0.0.1:8000/account/";
    const response = await fetch(url, config);
    const data = await response.json();
    console.log(data);
    this.setState({ accounts: data, loading: false });
  }

  render() {
    const accountsApi = this.state.accounts;

      return (
        <div>
          {/* <AccountComponent accountName={'Minhas contas'} /> */}
          {accountsApi.map((account) => (
            <AccountComponent
              key={account.id}
              id={account.id}
              accountName={account.name}
              bankName={account.bank}
              accountType={account.type}
            />
          ))}
        </div>
      );
  }
}
