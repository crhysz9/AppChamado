import React, { useState } from "react";
import logo from "../../assets/logo.png";

const NavbarUsers = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-white sticky-top px-4 py-4 d-flex align-items-center justify-content-between border-bottom">

      <div className="d-flex align-items-center gap-3">
        <img
          src={logo}
          alt="N-Help"
          style={{
            width: "42px",
            height: "42px",
            objectFit: "contain"
          }}
        />
        <h1 className="fs-5 fw-bold text-dark mb-0">
          N-Help
        </h1>
      </div>

      <div className="d-flex align-items-center gap-2">

        <div className="position-relative">

          <button
            className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "42px",
              height: "42px",
              fontSize: "22px"
            }}
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Menu"
          >
            ⋮
          </button>


          {menuAberto && (
            <div
              className="position-absolute bg-white border rounded-3 shadow-sm p-2"
              style={{
                right: 0,
                top: "50px",
                width: "160px"
              }}
            >
              <button
                className="btn btn-light w-100 text-start text-danger"
              >
                Sair da conta
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  );
};

export default NavbarUsers;