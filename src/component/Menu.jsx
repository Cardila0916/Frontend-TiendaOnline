import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
                <Link className="nav-link collapsed" to={"/menu-principal"}>
                    <i className="bx bxs-home" />
                    <span>Inicio</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" data-bs-target="#config-nav" data-bs-toggle="collapse" to={"#"}>
                    <i className="bx bxs-wrench" /><span>Configuración</span><i className="bx bxs-chevron-down ms-auto" />
                </Link>
                <ul id="config-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <Link to={"/usuarios-admin"}>
                            <i className="bx bxs-user" /><span>Usuarios</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/roles-admin"}>
                            <i className="bx bxs-user" /><span>Role</span>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to={"/productos"}>
                    <i className="bx bxl-product-hunt" /><span>Productos</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" data-bs-target="#inventario-nav" data-bs-toggle="collapse" to={"#"}>
                    <i className="bx bxs-basket" /><span>Inventario</span><i className="bx bxs-chevron-down ms-auto" />
                </Link>
                <ul id="inventario-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <Link to={"#"}>
                            <i className="bx bxs-category" /><span>Categorias</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={"#"}>
                            <i className="bx bxl-product-hunt" /><span>Productos</span>
                        </Link>
                    </li>
                </ul>
            </li>
            <li class="nav-heading">Páginas</li>
            <li class="nav-item"> 
                <Link className="nav-link collapsed" to={"/my-perfil"}> 
                    <i className="bx bxs-user"></i> 
                    <span>Perfiles</span> 
                </Link>
            </li>
            <li class="nav-item"> 
                <Link className="nav-link collapsed" to={"/crear-cuenta"}> 
                    <i className="bx bxs-id-card"></i> 
                    <span>Register</span> 
                </Link>
            </li>
            <li class="nav-item"> 
                <Link className="nav-link collapsed" to={"/"}> 
                    <i className="bx bxs-exit"></i> 
                    <span>Login</span> 
                </Link>
            </li>
        </ul>
    )
}

export default Menu;