import React from 'react';
import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import APIInvoke from '../../helpers/APIInvoke.js';
import mensajeConfirmacion from '../../helpers/mensajes.js';
import Logo from '../../assets/img/logo.png';

const Login = () => {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        usu: '',
        cla: ''
    });

    const {usu, cla} = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById('usu').focus();
    }, []);

    const login = async () => {
        const body = {
            usuarioAcceso: usuario.usu,
            claveAcceso: usuario.cla
        }

        const response = await APIInvoke.invokePOST(`/api/usuarios/login`, body);

        if (response.ok === "NO_EXISTE") {
            mensajeConfirmacion('error', response.msg);
        } else if (response.ok === "CLAVE_ERRONEA") {
            mensajeConfirmacion('error', response.msg);
        } else {
            //elimina el token actual
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            //Obtener el Token Actual
            const token = response.tokenJwt;

            //Guardar el token en el LocalStore de html5
            localStorage.setItem("token", token);
            localStorage.setItem("username", response.nombresUsuario);

            //redireccionar al componente dashboard
            navigate("/menu-principal");
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        login();
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
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-1 fs-2">Iniciar Sesión</h5>
                                            <p className="text-center small fs-6">Bienvenido, Ingrese a su cuenta</p>
                                        </div>
                                        <form className="row g-3 needs-validation" onSubmit={onSubmit}>
                                            <div className="col-12">
                                                <label htmlFor="usu" className="form-label">Usuario</label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input type="email"
                                                        className="form-control"
                                                        id="usu"
                                                        name="usu"
                                                        value={usu}
                                                        onChange={onChange}
                                                        required
                                                    />
                                                    <div className="invalid-feedback">Por favor, introduzca su username.</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="cla" className="form-label">Contraseña</label>
                                                <div className="input-group has-validation">
                                                    <input type="password"
                                                        className="form-control"
                                                        id="cla"
                                                        name="cla"
                                                        value={cla}
                                                        onChange={onChange}
                                                        required
                                                    />
                                                    <div className="invalid-feedback">Por favor, introduzca su contraseña.</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary rounded-pill w-100" type="submit">Login</button>
                                            </div>
                                            <div class="col-12">
                                                <p class="small mb-0">¿No tienes cuenta?<Link to={"/crear-cuenta"}> Registrate</Link></p>
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

export default Login;