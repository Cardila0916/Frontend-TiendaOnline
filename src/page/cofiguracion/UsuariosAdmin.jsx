import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../component/ContentHeader';
import NavBar from '../../component/NavBar';
import SidebarContainer from '../../component/SiderbarContainer';
import APIInvoke from '../../helpers/APIInvoke';
import mensajeConfirmacion from '../../helpers/mensajes';

const UsuariosAdmin = () => {

    const [arregloUsuario, setArregloUsuarios] = useState([]);

    const listadoUsuarios = async () => {
        const response = await APIInvoke.invokeGET(`/api/usuarios`);
        console.log(response);
        setArregloUsuarios(response);
    }

    useEffect(() => {
        listadoUsuarios();
    }, []);

    const borrarUsuarios = async (e, id) => {
        e.preventDefault();

        const response = await APIInvoke.invokeDELETE(`/api/usuarios/${id}`);

        if (response.ok === "SI") {
            mensajeConfirmacion('success', response.msg);
            listadoUsuarios();
        } else {
            mensajeConfirmacion('error', response.msg);
        }
    }

    return (
        <>
            <main id='main' className='main'>
                <NavBar></NavBar>
                <SidebarContainer></SidebarContainer>
                <ContentHeader 
                    titulo={"Usuarios"}
                    breadCrumb1={"Home"}
                    breadCrumb2={"Configuración"}
                    breadCrumb3={"Listado Usuarios"}
                    ruta1={"/menu-principal"}
                />
                <section className='section'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Listado Usuarios</h5>
                                    <table className='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th style={{width: '15%', textAlign: 'center'}}>Id</th>
                                                <th style={{width: '15%', textAlign: 'center'}}>Rol</th>
                                                <th style={{width: '25%', textAlign: 'center'}}>Nombre Completo</th>
                                                <th style={{width: '25%', textAlign: 'center'}}>Usuario</th>
                                                <th style={{width: '10%', textAlign: 'center'}}>Estado</th>
                                                <th style={{width: '10%', textAlign: 'center'}}>&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                arregloUsuario.map(
                                                    elemento =>
                                                        <tr key={elemento._id}>
                                                            <th style={{textAlign: 'center'}}>{elemento._id}</th>
                                                            <td style={{textAlign: 'center'}}>{elemento.idRol.nombreRol}</td>
                                                            <td style={{textAlign: 'center'}}>{elemento.nombresUsuario} {elemento.apellidosUsuario}</td>
                                                            <td style={{textAlign: 'center'}}>{elemento.usuarioAcceso}</td>
                                                            <td style={{textAlign: 'center'}}>
                                                                {elemento.estadoUsuario === 1 ? <span className='text-success'>Activo</span> : <span className='text-danger'>Inactivo</span> }
                                                            </td>
                                                            <td style={{textAlign: 'center'}}>
                                                                <Link className='btn btn-primary btn-sm' to={"#"}><i className="bi bi-pencil-square"></i></Link>
                                                                <button className='btn btn-danger btn-sm' onClick={(e) => borrarUsuarios(e, elemento._id)} style={{ cursor: 'pointer'}}>
                                                                    <i className='bi bi-trash-fill'></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                )
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default UsuariosAdmin;