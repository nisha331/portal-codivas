/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//import '../Assets/Sass/components/login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RegisterHook from "../hooks/RegisterHook";

function Register() {
  const {
    userName,
    userEmail,
    userPassword
} = RegisterHook()

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
          <img src="logo.png" width={110} alt="" />
            <div class="card">
              <form onsubmit="event.preventDefault()" class="box">
                <h2>Cadastre - se </h2><br/>
                <p class="text-muted"> Bem Vinda!</p>
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                {/* <a class="forgot text-muted" href="#">
                  Esqueceu a senha?
                </a> */}
                <input type="submit" name="submit" value="Register" href="#" />
                <div class="col-md-12">
                  <ul class="social-network social-circle">
                    <li>
                      <a href="#" class="icoFacebook" title="Facebook">
                        <FontAwesomeIcon icon={["fa", "bell"]} />
                      </a>
                    </li>
                    <li>
                      <a href="#" class="icoGoogle" title="Google +">
                      <FontAwesomeIcon icon={["fa", "user-alt"]} />
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
