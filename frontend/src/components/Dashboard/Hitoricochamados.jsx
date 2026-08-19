import React from "react";

const Hitoricochamados = () => {
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

                <tr>
                  <th>001</th>
                  <td>PC não liga</td>
                  <td>Aberto</td>
                  <td>Media</td>
                  <td>Carla</td>
                  <td>19/08/26</td>
                </tr>

                <tr>
                  <th>002</th>
                  <td>Erro no sistema</td>
                  <td>Pendente</td>
                  <td>Baixa</td>
                  <td>João</td>
                  <td>18/08/26</td>
                </tr>

                <tr>
                  <th>003</th>
                  <td>Problema com impressora</td>
                  <td>Resolvido</td>
                  <td>Baixa</td>
                  <td>Pedro</td>
                  <td>17/08/26</td>
                </tr>

              </tbody>

            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hitoricochamados;
