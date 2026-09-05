import React from "react";

const CardUsers = () => {
  return (
    <main className="container-fluid pt-5 mt-4">
      <section className="mb-4 text-center">
        <h2 className="fw-bold mb-1">
          Olá, NOME DO USUÁRIO
        </h2>

        <p className="text-muted mb-0">
          Bem-vindo ao N-Help
        </p>
      </section>

      <section className="row g-3 justify-content-center mb-4">

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h6 className="text-muted">Chamados abertos</h6>
              <h2 className="fw-bold text-primary">0</h2>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h6 className="text-muted">Pendentes</h6>
              <h2 className="fw-bold text-warning">0</h2>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h6 className="text-muted">Resolvidos</h6>
              <h2 className="fw-bold text-success">0</h2>
            </div>
          </div>
        </div>

      </section>

      <section className="row g-4 justify-content-center">

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <button className="btn btn-outline-primary btn-lg">
                Abrir Chamado
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <button className="btn btn-outline-warning btn-lg">
                Meus Chamados
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <button className="btn btn-outline-danger btn-lg">
                Histórico
              </button>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
};

export default CardUsers;