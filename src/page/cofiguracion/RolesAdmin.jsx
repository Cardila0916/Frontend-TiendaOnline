import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../component/ContentHeader';
import NavBar from '../../component/NavBar';
import SidebarContainer from '../../component/SiderbarContainer';
import APIInvoke from '../../helpers/APIInvoke';
import mensajeConfirmacion from '../../helpers/mensajes';

const RolesAdmin = ()  => {

    const [arregloRoles, setArregloRoles] = useState([]);

    const listadoRoles = async () => {
        const response = await APIInvoke.invokeGET(`/api/roles`);
        setArregloRoles(response);
    }

    useEffect(() => {
        listadoRoles();
    }, []);

    const borrarRol = async (e, id) => {
        e.preventDefault();

        const response = await APIInvoke.invokeDELETE(`/api/roles/${id}`);

        if ( response.ok === "SI"){
            mensajeConfirmacion("success", response.msg);
            listadoRoles();
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
                    titulo={"Roles"}
                    breadCrumb1={"Home"}
                    breadCrumb2={"Configuración"}
                    breadCrumb3={"Listado Roles"}
                    ruta1={"/menu-principal"}
                />
                <section className='section'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Listado Role</h5>
                                    <div className='row mb-3'>
                                        <div className='col-lg-12'>
                                            <Link to={"/roles-crear"} className="btn btn-primary">Crear Nuevo Rol</Link>
                                        </div>
                                    </div>
                                    <table className='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th style={{width: '15%', textAlign: 'center'}}>Id</th>
                                                <th style={{width: '65%', textAlign: 'center'}}>Nombre Rol</th>
                                                <th style={{width: '10%', textAlign: 'center'}}>Estado</th>
                                                <th style={{width: '10%', textAlign: 'center'}}>&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                arregloRoles.map(
                                                    elemento =>
                                                        <tr key={elemento._id}>
                                                            <th style={{textAlign: 'center'}}>{elemento._id}</th>
                                                            <td style={{textAlign: 'center'}}>{elemento.nombreRol}</td>
                                                            <td style={{textAlign: 'center'}}>
                                                                {elemento.estadoRol === 1 ? <span className='text-success'>Activo</span> : <span className='text-danger'>Inactivo</span> }
                                                            </td>
                                                            <td style={{textAlign: 'center'}}>
                                                                <Link className='btn btn-primary btn-sm' to={"/roles-editar"}><i className="bi bi-pencil-square"></i></Link>
                                                                <button className='btn btn-danger btn-sm' onClick={(e) => borrarRol(e, elemento._id)} style={{ cursor: 'pointer'}}>
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

export default RolesAdmin;