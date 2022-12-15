import React from 'react';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import APIInvoke from '../../helpers/APIInvoke.js';
import mensajeConfirmacion from '../../helpers/mensajes.js';
import Logo from '../../assets/img/logo.png';

const CrearCuenta = () => {


    //Definir estado inicial de los elementos
    const [usuario, setUsuario] = useState({
        idrol: '638fae2b2c91f5a01b37073b',
        nombres: '',
        apellidos: '',
        correo: '',
        nombreusuario: '',
        clave: '',
        estado: 1
    });

    const { nombres, apellidos, correo, nombreusuario, clave } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById('nombres').focus();
    }, []);

    const crearCuenta = async () => {

        const body = {
            idRol: usuario.idrol,
            idGrado: usuario.idgrado,
            nombresUsuario: usuario.nombres,
            apellidosUsuario: usuario.apellidos,
            correoUsuario: usuario.correo,
            usuarioAcceso: usuario.nombreusuario,
            claveAcceso: usuario.clave,
            estadoUsuario: usuario.estado
        }
        const response = await APIInvoke.invokePOST(`/api/usuarios/crear-cuenta`, body);
        if (response.ok === "SI") {
            mensajeConfirmacion('success', response.msg);
            setUsuario({
                nombres: '',
                apellidos: '',
                correo: '',
                nombreusuario: '',
                clave: ''
            });
        } else {
            mensajeConfirmacion('error', response.msg);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearCuenta();
    }


    return (
        <main>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <Link to={"/"} className="logo d-flex align-items-center w-auto">
                                        <img src={Logo} alt="Logo" />
                                        <span className="d-none d-lg-block">Tienda Online</span>
                                    </Link>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title text-center pb-0 fs-4">Crear cuenta</h5>
                                        <form className="row g-3 needs-validation" onSubmit={onSubmit}>
                                            <div className="col-md-12">
                                                <label htmlFor="nombres" className="form-label">Nombres</label>
                                                <input type="text" 
                                                    className="form-control" 
                                                    id="nombres" 
                                                    name="nombres"
                                                    value={nombres}
                                                    onChange={onChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="apellidos" className="form-label">Apellidos</label>
                                                <input type="text" 
                                                    className="form-control" 
                                                    id="apellidos" 
                                                    name="apellidos"
                                                    value={apellidos}
                                                    onChange={onChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="nombreusuario" className="form-label">Usuario Acceso</label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input type="email"
                                                        className="form-control"
                                                        id="nombreusuario"
                                                        name="nombreusuario"
                                                        value={nombreusuario}
                                                        onChange={onChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="correo" className="form-label">Email</label>
                                                <input type="email" 
                                                    className="form-control" 
                                                    id="correo" 
                                                    name='correo'
                                                    value={correo}
                                                    onChange={onChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="clave" className="form-label">Contraseña</label>
                                                <input type="password" 
                                                    className="form-control" 
                                                    id="clave" 
                                                    name='clave'
                                                    value={clave}
                                                    onChange={onChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary rounded-pill w-100" type="submit">Crear una cuenta</button>
                                            </div>
                                            <div class="col-12">
                                                <p class="small mb-0">¿Ya tienes cuenta?<Link to={"/"}> Iniciar sesión</Link></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default CrearCuenta;