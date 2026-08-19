import React from "react";
import Hitoricochamados from "./Hitoricochamados"; 
import Cards from "./Cards";
import Chamados from "./Chamados/Chamados";

const Dashboard = () => {
  return (
    <>
    <Cards/>
    <Chamados/>
    <Hitoricochamados/>
    </>
  );
};

export default Dashboard;
