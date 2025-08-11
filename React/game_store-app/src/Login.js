import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Se passou na validação, navega para a página base (ou qualquer outra)
    navigate("/base");
  }

  function handleCreateAccount() {
    navigate("/createAccount");
  }

  return (
    <div className="Login mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div id="login">
        <form className="p-4 border rounded" noValidate>

          <div className="mb-3 row">
            <label htmlFor="username" className="col-sm-3 col-form-label">Username:</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="username" name="username" required />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-3 col-form-label">Senha:</label>
            <div className="col-sm-9">
              <input type="password" className="form-control" id="password" name="password" required />
            </div>
          </div>

          <div className="row">
            <div className="col text-center">
              <button className="rounded btn btn-primary" onClick={handleSubmit} id="loginBtn" type="submit">
                Login
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col text-end">
              <span id="createAccount" onClick={handleCreateAccount}>
                Criar conta
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
