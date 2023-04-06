import "./login.css";
import React from "react";
// import UserIncome from "./UserIncome";
// import UserExpense from "./UserExpense";
// import UserAccount from "./UserAccount";
import UserHome from "./UserHome";
import Footer from "./pages/components/Footer";


export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" , erroLogin: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  componentDidMount() {
    this.formElement = document.getElementById("form");
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    var url = "http://127.0.0.1:8000/login/";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        this.setState({ token: data.token, erroLogin: null });
      })
      .catch(() => {
        this.setState({
          erroLogin: "Ocorreu um erro de conexão com o servidor.",
        });
      });
    event.preventDefault();
  }
  
  logout() {
    localStorage.removeItem("token");
    this.setState({ token: null });
    this.formElement.reset();
    window.location.reload();
  }

  renderLogoutButton = () => {
    return (
      <button onClick={() => this.logout()}>Logout</button>
    );
  }

  render() {
    var token = localStorage.getItem("token");
    

    if (!token || token==='undefined')
      return (
        <>
          <div className="content">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 contents">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="form-block">
                        <div className="mb-4">
                          <h3>
                            Login to <strong>Financial Control</strong>
                          </h3>
                          <p className="mb-4">
                            Aplicação web utilizando Django(backend) e React
                            (frontend) para fins de estudos. Por{" "}
                            <a href="http://linkedin.com/in/miraceli/">
                              Mira Bonjardim
                            </a>
                            .
                          </p>
                        </div>
                        <form onSubmit={this.handleSubmit} id="form">
                          <div className="form-group first">
                            <label htmlFor="username">Username</label>
                            <input
                              type="text"
                              value={this.state.username}
                              onChange={this.handleChange}
                              className="form-control"
                              id="username"
                            />
                          </div>
                          <div className="form-group last mb-4">
                            <label htmlFor="password">Password</label>
                            <input
                              type="password"
                              value={this.state.password}
                              onChange={this.handleChangePassword}
                              className="form-control"
                              id="password"
                            />
                          </div>

                          <input
                            type="submit"
                            value="Submit"
                            className="btn btn-pill text-white btn-block btn-primary"
                          />
                          {this.state.erroConexao && <p>Ocorreu um erro de conexão com o servidor.</p>}
                          <span className="d-block text-center my-4 text-muted">
                            Siga-me nas redes sociais
                          </span>
                          <div className="social-login text-center">
                            <a
                              href="https://linkedin.com/in/miraceli/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="linkedin"
                            >
                              <span className="icon-linkedin mr-3"></span>
                            </a>
                            <a
                              href="https://twitter.com/miraceli/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="twitter"
                            >
                              <span className="icon-twitter mr-3"></span>
                            </a>
                            <a
                              href="https://instagram.com/mirabonjardim/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="instagram"
                            >
                              <span className="icon-instagram mr-3"></span>
                            </a>
                            <a
                              href="https://github.com/miraceli/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="github"
                            >
                              <span className="icon-github mr-3"></span>
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    else{
      if (token==='')
        return (
            this.logout()
        );
      else{
        return (
            <div>
              <UserHome />
              {/* <UserIncome />
              <UserExpense />
              <UserAccount />  */}
              {/* <App /> */}
              <button onClick={() => this.logout()}>Logout</button>
              <Footer />
            </div>
        )
      }
    }
  }
}


