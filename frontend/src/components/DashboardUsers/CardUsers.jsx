import React from "react";

const CardUsers = () => {
  return (
    <main className="container-fluid pt-5 mt-4">
      <section className="mb-4 justify-content-center text-center">
        <h2 className="fw-bold mb-1">Ola, Usuário</h2>
      </section>

      <section className="row g-4 justify-content-center">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm h-flex">
            <div className="card-body text-center">
              <button className="btn btn-outline-primary btn-lg">
                Abrir Chamados
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 text-center">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
               <button className="btn btn-outline-warning btn-lg">
                Meus Chamados
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 text-center">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
               <button className="btn btn-outline-danger btn-lg">
                Histórico Chamados
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CardUsers;
