import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();

    if (response.ok) {

      if (data.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/user");
      }

    } else {
      alert(data.message);
    }
  };

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">

      <div
        className="card shadow-sm border-0 rounded-4 w-100"
        style={{ maxWidth: "380px" }}
      >

        <div className="card-body p-4">

          <div className="text-center mb-4">
            <h2 className="fw-bold">N-Help</h2>
            <p className="text-muted mb-0">Entre na sua conta</p>
          </div>

          <form onSubmit={login}>

            <div className="mb-3">
              <label className="form-label">Email</label>

              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Senha</label>

              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Entrar
            </button>

            <div className="text-center mt-3">
              <a href="/register">
                Não tem uma conta? Crie aqui!
              </a>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
};

export default Login;