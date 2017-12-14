import React, { Component } from "react";
import "./Login.css";
import ContainerCard from "../ContainerCard";
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <ContainerCard title="login">
          <Link to="/auth/github">
            <button
              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
              onClick={() => <Redirect to="/auth/github" />}
              data-upgraded=",MaterialButton,MaterialRipple"
            >
            Login
            </button>
          </Link>
      </ContainerCard>
    )
  }
}

export default Login;
