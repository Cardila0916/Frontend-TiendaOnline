import React, { useEffect, useState } from 'react';
import ContentHeader from '../../component/ContentHeader';
import NavBar from '../../component/NavBar';
import SidebarContainer from '../../component/SiderbarContainer';
import Profile from '../../assets/img/profile-img.jpg';
import { Link } from 'react-router-dom';
import APIInvoke from '../../helpers/APIInvoke';

const MyPerfil = () => {

    const [arregloUsuario, setArregloUsuarios] = useState([]);

    const listadoUsuarios = async () => {
        const response = await APIInvoke.invokeGET(`/api/usuarios`);
        console.log(response);
        setArregloUsuarios(response);
    }

    useEffect(() => {
        listadoUsuarios();
    }, []);

    return (
        <main id="main" className="main">
            <NavBar></NavBar>
            <SidebarContainer></SidebarContainer>

            <ContentHeader
                titulo={"Mis Perfiles"}
                breadCrumb1={"Home"}
                breadCrumb2={"Usuario"}
                breadCrumb3={"Mis perfiles"}
                ruta1={"/menu-principal"}
            />
            <section className='section profile'>
                {
                    arregloUsuario.map(
                        elemento => 
                            <div className='row'>
                                <div className='col-xl-4'>
                                    
                                    <div className='card'>
                                        <div className='card-body profile-card pt-4 d-flex flex-column align-items-center'>
                                            <img src={Profile} alt="Profile" className='rounded-circle' />
                                            <h2 style={{textAlign: 'center'}}>{elemento.nombresUsuario} {elemento.apellidosUsuario}</h2>
                                            <h3 style={{textAlign: 'center'}}>{elemento.idRol.nombreRol}</h3>
                                            <div class="social-links mt-2">
                                                <Link href="#" class="facebook">
                                                    <i class="bi bi-facebook"></i>
                                                </Link>
                                                <Link href="#" class="linkedin">
                                                    <i class="bi bi-linkedin"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div key={elemento._id} className='col-xl-8'>
                                    <div className='card'>
                                        <div className='card-body pt-3'>
                                            <ul class="nav nav-tabs nav-tabs-bordered" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview" aria-selected="true" role="tab">Visión general</button>
                                                </li>
                                            </ul>
                                            <div className='tab-content pt-2'>
                                                <div className='tab-pane fade show active profile-overview' id='profile-overview' role="tabpanel">
                                                    <h5 className='card-title'>Detalles del perfil</h5>
                                                    <div class="row">
                                                        <div class="col-lg-3 col-md-4 label ">Nombre Completo</div>
                                                        <div class="col-lg-9 col-md-8">{elemento.nombresUsuario} {elemento.apellidosUsuario}</div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-3 col-md-4 label">Email</div>
                                                        <div class="col-lg-9 col-md-8">{elemento.correoUsuario}</div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-3 col-md-4 label">No° Documento</div>
                                                        <div class="col-lg-9 col-md-8">{elemento.documentoUsuario}</div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-3 col-md-4 label">Rol</div>
                                                        <div class="col-lg-9 col-md-8">{elemento.idRol.nombreRol}</div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-3 col-md-4 label">Estado</div>
                                                        <div class="col-lg-9 col-md-8">
                                                            {elemento.estadoUsuario === 1 ? <span className='text-success'>Activo</span> : <span className='text-danger'>Inactivo</span> }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    )
                }

            </section>
        </main>
    )
}

export default MyPerfil;