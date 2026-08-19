import React, { useState } from "react";
import ModalChamados from "./ModalChamados"

const Chamados = () => {
    const [abrirModal, setAbrirModal] = useState(false);
    return (
        <>
            <div className="container my-4">
                <div className="card shadow-sm border-0 rounded-4">
                    <div className="card-body p-4">

                        <h3 className="mb-2">Chamados Pendentes</h3>
                        <hr />

                        <div className="table-responsive">
                            <div className="card">
                                <h5 className="card-header">Título do Chamado</h5>
                                <div className="card-body">
                                    <p className="card-text">Descrição do Chamado</p>
                                    <button className="btn btn-primary" onClick={() => setAbrirModal(true)}>Abrir Chamado</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {abrirModal  && <ModalChamados />}
        </>
    )
}

export default Chamados
