import React from "react";

const ModalChamados = ({onClose}) => {
    return (
        <>
            <div className="modal show" tabindex="-1" style={{ display: "block" }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Nome e Título do Chamado</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            <p>Descrição do Chamado</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={onClose}>Fechar</button>
                            <button type="button" className="btn btn-warning">Finalizar Chamado</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>
    )
}

export default ModalChamados
