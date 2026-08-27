import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardAdmin from "./components/DashboardAdmin/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import DashboardUsers from "./components/DashboardUsers/DashboardUsers";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">

        <BrowserRouter>
          <Routes>
            <Route path="/user" element={<DashboardUsers />} />
            <Route path="/admin" element={<DashboardAdmin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </>
  );
}

export default App;
