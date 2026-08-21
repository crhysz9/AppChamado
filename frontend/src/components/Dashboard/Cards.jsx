import React from 'react'

const Cards = () => {
  return (
    <main className="container-fluid pt-5 mt-4">
      <section className="mb-4 justify-content-center text-center">
        <h2 className="fw-bold mb-1">Ola, Nordex</h2>

        <p className="text-secondary mb-0">Seus chamados:</p>
      </section>
      
      <section className="row g-4 justify-content-center">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-secondary mb-2">Chamados</p>

              <h2 className="fw-bold mb-0">16</h2>

              <small className="text-secondary">Total de chamados</small>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-secondary mb-2">Abertos</p>

              <h2 className="fw-bold text-danger mb-0">3</h2>

              <small className="text-secondary">Aguardando resposta</small>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-secondary mb-2">Resolvidos</p>

              <h2 className="fw-bold text-success mb-0">13</h2>

              <small className="text-secondary">Chamados finalizados</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cards