import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ContentHeader from '../../component/ContentHeader';
import NavBar from '../../component/NavBar';
import SidebarContainer from '../../component/SiderbarContainer';
import APIInvoke from '../../helpers/APIInvoke';
import mensajeConfirmacion from '../../helpers/mensajes';

const RolesCrear = () => {

    const navigate = useNavigate();

    const [rol, setRol] = useState({
        nombre: '',
        estado: 1
    });

    const {nombre} = rol;

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, []);

    const onChange = (e) => {
        setRol({
            ...rol,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearRol();

    }

    const crearRol = async () => {
        const body = {
            nombreRol: rol.nombre,
            estadoRol: rol.estado
        }

        const response = await APIInvoke.invokePOST(`/api/roles`, body);
        if (response.ok === "SI") {
            mensajeConfirmacion('success', response.msg);
            setRol({
                nombre: ''
            });
            navigate("/roles-admin");
        } else {
            mensajeConfirmacion('error', response.msg);
            setRol({
                nombre: '',
                estado: 1
            });
        }
    }

    return (
        <main id='main' className='main'>
            <NavBar></NavBar>
            <SidebarContainer></SidebarContainer>

            <ContentHeader
                titulo={"Roles"}
                breadCrumb1={"Roles"}
                breadCrumb2={"Listado Roles"}
                breadCrumb3={"Crear Nuevo Rol"}
                ruta1={"/roles-admin"}
            />
            <section className='section'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='card'>
                            <form onSubmit={onSubmit}>
                                <div className='card-body'>
                                    <h5 className='card-title'>Crear Nuevo Rol</h5>

                                    <div className='row mb-3'>
                                        <label htmlFor="nombre" className='col-sm-2 col-form-label'>Nombre</label>
                                        <div className='col-sm-10'>
                                            <input type="text" className='form-control'
                                                id='nombre'
                                                name='nombre'
                                                placeholder='Ingrese el nombre del Rol'
                                                value={nombre}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='card-footer'>
                                    <button type='submit' className='btn btn-primary'>Guadar</button>
                                </div>

                            </form>


                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default RolesCrear;