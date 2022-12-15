import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mensajeConfirmacion from '../helpers/mensajes.js';
import Logo from '../assets/img/logo.png';
import Profile from '../assets/img/profile-img.jpg';

const NavBar = () => {
    const navigate = useNavigate();

    const cerrarSesion = () => {
        //eliminar todo lo del localstore
        localStorage.removeItem("token");
        localStorage.removeItem("username");

        //mensaje de cierre de sesion
        mensajeConfirmacion('success', 'Sesión finalizada correctamente.');

        //redireccionar al login
        navigate("/");
    }

    const ocultarMenu = () => {
        document.body.classList.toggle("toggle-sidebar");
    }
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <Link to={"/menu-principal"} className="logo d-flex align-items-center">
                    <img src={Logo} alt="Logo" />
                    <span className="d-none d-lg-block">Tienda Online</span>
                </Link>
                <i className="bi bi-list toggle-sidebar-btn" onClick={ocultarMenu} />
            </div>{/* End Logo */}
            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">

                    <li className="nav-item dropdown pe-3">
                        <Link className="nav-link nav-profile d-flex align-items-center pe-0" to={"/my-perfil"} data-bs-toggle="dropdown">
                            <img src={Profile} alt="Profile" className="rounded-circle" />
                            <span className="d-none d-md-block dropdown-toggle ps-2">{localStorage.getItem("username")}</span>
                        </Link>{/* End Profile Iamge Icon */}

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>{localStorage.getItem("username")}</h6>
                                <span className="text-success">Conectado</span>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <div className="dropdown-item d-flex align-items-center">
                                    <i className="bi bi-box-arrow-right" />
                                    <span onClick={cerrarSesion} style={{ cursor: 'pointer' }} >Salir</span>
                                </div>
                            </li>
                        </ul>{/* End Profile Dropdown Items */}
                    </li>{/* End Profile Nav */}
                </ul>
            </nav>{/* End Icons Navigation */}
        </header>
    )

}

export default NavBar;