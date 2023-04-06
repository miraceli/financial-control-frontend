import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Account from "./pages/Account";
import Navbar from "./pages/components/Navbar";

export default class App extends React.Component {
  state = {loading: true };

  async componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    config.headers["Authorization"] =
      "Token " + localStorage.getItem("token");

    var url = "http://127.0.0.1:8000/account";
    const response = await fetch(url, config);
    const data = await response.json();
    console.log(data);
    this.setState({ loading: false });
  }

  render() {

    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}>
            {" "}
          </Route>
          <Route exact path="/income" element={<Income />}>
            {" "}
          </Route>
          <Route exact path="/expense" element={<Expense />}>
            {" "}
          </Route>
          <Route exact path="/account" element={<Account />}>
            {" "}
          </Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    );
  }
}
