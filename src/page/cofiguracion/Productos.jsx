import React, { useEffect } from 'react';
import ContentHeader from '../../component/ContentHeader';
import NavBar from '../../component/NavBar';
import SidebarContainer from '../../component/SiderbarContainer';
import Producto from '../../assets/img/producto.jpg';
import { useState } from 'react';
import APIInvoke from '../../helpers/APIInvoke';

const Productos = () => {

    const [arregloProductos, setArregloProductos] = useState([]);

    const listadoProductos = async () => {
        const response = await APIInvoke.invokeGET(`/api/productos`);
        setArregloProductos(response);
    }

    useEffect(() => {
        listadoProductos();
    }, [])

    return (
        <main id='main' className='main'>
            <NavBar></NavBar>
            <SidebarContainer></SidebarContainer>

            <ContentHeader
                titulo={"Productos"}
                breadCrumb1={"Home"}
                breadCrumb2={"Productos"}
                breadCrumb3={"Listado Productos"}
                ruta1={"/menu-principal"}
            />

            <section className='section'>
                <div className='row align-items-top'>
                    {
                        arregloProductos.map(
                            elemento =>
                                <div style={{ display: "flex", justifyContent: "center", mt: 4 }} className='col-lg-3'>
                                    <div className='card'>
                                        <img src={Producto} className='card-img-top' alt="producto" />
                                        <div className='card-body'>
                                            <h5 style={{textAlign: 'center'}} className='card-title'>{elemento.nombreProducto}</h5>
                                            <p className='card-text'>{elemento.descripcion}</p>
                                            <p style={{textAlign: 'center'}} className='card-text'>{elemento.precioProducto}</p>
                                        </div>
                                    </div>
                                </div>
                        )
                    }
                </div>

            </section>
        </main>
    )
}

export default Productos;