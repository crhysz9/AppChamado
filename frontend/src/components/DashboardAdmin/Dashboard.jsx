import React from "react";
import Hitoricochamados from "./Hitoricochamados"; 
import Cards from "./Cards";
import Chamados from "./Chamados/Chamados";
import NavbarAdm from "./NavbarAdmin";

const Dashboard = () => {
  return (
    <>
    <NavbarAdm />
    <Cards/>
    <Chamados/>
    <Hitoricochamados/>
    </>
  );
};

export default Dashboard;
