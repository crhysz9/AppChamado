import React from "react"; 
import CardUsers from "./CardUsers";
import NavbarUsers from "./NavbarUsers"
import Historicochamados from "./Historico";
import CriarChamado from "./CriarChamado";

const DashboardUsers = () => {
  return (
    <>
    <NavbarUsers />
    <CardUsers/>
    <CriarChamado />
    <Historicochamados/>
    </>
  );
};

export default DashboardUsers;
