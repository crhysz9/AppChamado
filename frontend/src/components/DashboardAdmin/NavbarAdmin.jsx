import React from "react";

const NavBarAdm = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            N-Help
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Chamados
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Abrir Chamado
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Pesquisar"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Pesquisar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarAdm;
