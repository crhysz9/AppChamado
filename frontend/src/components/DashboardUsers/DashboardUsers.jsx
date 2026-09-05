import React from "react"; 
import CardUsers from "./CardUsers";
import NavbarUsers from "./NavbarUsers"
import Historicochamados from "./Historico";

const DashboardUsers = () => {
  return (
    <>
    <NavbarUsers />
    <CardUsers/>
    <Historicochamados/>
    </>
  );
};

export default DashboardUsers;
