import React from "react";

const Register = () => {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-sm border-0 rounded-4 w-100" style={{ maxWidth: "380px" }}>
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold">N-Help</h2>

            <p className="text-muted mb-0">Crie uma conta</p>
          </div>

          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>

              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Digite seu email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="senha" className="form-label">Senha</label>

              <input
                type="password"
                className="form-control"
                id="senha"
                placeholder="Digite sua senha"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              cadastrar
            </button>

            <div className="text-center mt-3">
              <a href="/login">Ja tem uma conta entre aqui!</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
