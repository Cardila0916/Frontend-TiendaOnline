import React from 'react';
import { Form } from 'react-bootstrap';
import ContentHeader from '../../component/ContentHeader';
import NavBar from '../../component/NavBar';
import SidebarContainer from '../../component/SiderbarContainer';

const EditarRoles = () => {
    return (
        <main id='main' className='main'>
            <NavBar></NavBar>
            <SidebarContainer />

            <ContentHeader
                titulo={"Editar Rol"}
                breadCrumb1={"Roles"}
                breadCrumb2={"Listado Roles"}
                breadCrumb3={"Editar Roles"}
                ruta1={"/roles-admin"}
            />

            <section className='section'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='card'>
                            <form>
                                <div className='card-body'>
                                    <h5 className='card-title'>Editar Rol</h5>
                                    <div className='row mb-3'>
                                        <label htmlFor="nombre" className='col-sm-2 col-form-label'>Nombre</label>
                                        <div className='col-sm-10'>
                                            <input type="text" className='form-control'
                                                id='nombre'
                                                name='nombre'
                                                placeholder='Ingrese el nombre del Rol'
                                                value={""}
                                                onChange={""}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="estado" className="col-sm-2 col-form-label">Selecciones el estado</label>
                                        <div className="col-sm-10">
                                            <Form.Select aria-label="Default select example"
                                                className="form-control"
                                                id="estado"
                                                name="estado"
                                                value={""}
                                                onChange={""}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <option value="1">Activo</option>
                                                <option value="2">Inactivo</option>
                                            </Form.Select>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </main >
    )
}

export default EditarRoles;