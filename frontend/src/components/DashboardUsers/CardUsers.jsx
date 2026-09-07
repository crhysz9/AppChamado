import React, { useEffect, useState } from "react";

const CardUsers = () => {
  // Pegar nome do usuário
  const user = JSON.parse(localStorage.getItem("user"));

  const [chamados, setChamados] = useState([]);

  useEffect(() => {
    const buscarChamados = async () => {
      if (!user) {
        return;
      }

      const response = await fetch(
        `http://localhost:3000/chamados/usuario/${user.id}`,
      );

      const data = await response.json();

      setChamados(data);
    };

    buscarChamados();
  }, []);

  const chamadosAbertos = chamados.filter(
    (chamado) => chamado.status === "ABERTO",
  ).length;

  const chamadosPendentes = chamados.filter(
    (chamado) => chamado.status === "PENDENTE",
  ).length;

  const chamadosResolvidos = chamados.filter(
    (chamado) => chamado.status === "RESOLVIDO",
  ).length;

  return (
    <main className="container-fluid pt-5 mt-4">
      <section className="mb-4 text-center">
        <h1>Olá, {user?.nome}</h1>

        <p className="text-muted mb-0">Bem-vindo ao N-Help</p>
      </section>

      <section className="row g-3 justify-content-center mb-4">
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h6 className="text-muted">Chamados abertos</h6>

              <h2 className="fw-bold text-primary">{chamadosAbertos}</h2>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h6 className="text-muted">Pendentes</h6>

              <h2 className="fw-bold text-warning">{chamadosPendentes}</h2>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h6 className="text-muted">Resolvidos</h6>

              <h2 className="fw-bold text-success">{chamadosResolvidos}</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CardUsers;
