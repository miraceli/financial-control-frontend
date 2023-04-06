import React from "react";

export default class Home extends React.Component {
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

      return (
        <div>
          <h2>home</h2> 
        </div>
      );
  }
}
