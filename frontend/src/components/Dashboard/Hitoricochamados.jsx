import React, { useEffect, useState } from "react";

const Hitoricochamados = () => {

const [chamados, setChamados] = useState([]);

useEffect(() => {
  fetch("http://localhost:3000/chamados")
    .then(response => response.json())
    .then(data => setChamados(data));
}, []);

  return (
    <div className="container my-4">
      <div className="card shadow-sm border-0 rounded-4">
        <div className="card-body p-4">

          <h3 className="mb-2">Histórico de Chamados</h3>
          <hr />
          <button type="button" className="btn p-1 m-1 btn-outline-primary">Abertos</button>
          <button type="button" className="btn p-1 m-1 btn-outline-danger">Finalizados</button>
          <button type="button" className="btn p-1 m-1 btn-outline-warning">Pendentes</button>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">

              <thead>
                <tr>
                  <th>Id</th>
                  <th>Assunto</th>
                  <th>Status</th>
                  <th>Prioridade</th>
                  <th>Pessoa</th>
                  <th>Data</th>
                </tr>
              </thead>

              <tbody>
                {chamados.map(chamado => (
                <tr key={chamado.id}>
                  <th>{chamado.id.slice(-4)}</th>
                  <td>{chamado.assunto}</td>
                  <td>{chamado.status}</td>
                  <td>{chamado.prioridade}</td>
                  <td>{chamado.usuario.nome}</td>
                  <td>{new Date(chamado.data).toLocaleString("pt-BR")}</td>
                </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hitoricochamados;
