import React, { useState } from "react";

const CriarChamado = () => {

  const [assunto, setAssunto] = useState("");
  const [prioridade, setPrioridade] = useState("MEDIA");
  const [descricao, setDescricao] = useState("");

  const criarChamado = async () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Usuário não encontrado.");
      return;
    }

    if (!assunto || !descricao) {
      alert("Preencha o assunto e a descrição.");
      return;
    }

    try {

      const response = await fetch("http://localhost:3000/chamados", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          assunto,
          descricao,
          prioridade,
          usuarioId: user.id
        })
      });

      const data = await response.json();

      if (response.ok) {

        alert("Chamado criado com sucesso!");

        setAssunto("");
        setPrioridade("MEDIA");
        setDescricao("");

      } else {
        alert(data.message || "Erro ao criar chamado.");
      }

    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <>

      <button
        type="button"
        className="btn btn-primary d-block mx-auto rounded-4 py-2"
        style={{
          width: "20%",
          fontSize: "17px"
        }}
        data-bs-toggle="modal"
        data-bs-target="#modalCriarChamado"
      >
        Criar Chamado
      </button>


      <div
        className="modal fade"
        id="modalCriarChamado"
        tabIndex="-1"
        aria-labelledby="modalCriarChamadoLabel"
        aria-hidden="true"
      >

        <div className="modal-dialog modal-dialog-centered">

          <div className="modal-content rounded-4 border-0 shadow">

            <div className="modal-header">

              <h5
                className="modal-title"
                id="modalCriarChamadoLabel"
              >
                Criar Chamado
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              ></button>

            </div>


            <div className="modal-body">

              <div className="mb-3">

                <label className="form-label">
                  Assunto
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite o assunto do chamado"
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                />
              </div>

              <div className="mb-3">

                <label className="form-label">
                  Prioridade
                </label>

                <select
                  className="form-select"
                  value={prioridade}
                  onChange={(e) => setPrioridade(e.target.value)}
                >

                  <option value="BAIXA">
                    Baixa
                  </option>

                  <option value="MEDIA">
                    Média
                  </option>

                  <option value="ALTA">
                    Alta
                  </option>

                </select>

              </div>
              <div className="mb-3">

                <label className="form-label">
                  Descrição
                </label>

                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Descreva o problema..."
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                ></textarea>

              </div>
            </div>
            <div className="modal-footer">

              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={criarChamado}
              >
                Criar Chamado
              </button>

            </div>

          </div>

        </div>

      </div>

    </>
  );
};

export default CriarChamado;