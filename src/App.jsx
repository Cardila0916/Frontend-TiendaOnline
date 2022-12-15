import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CrearCuenta from './page/auth/crearCuenta';
import Login from './page/auth/login'
import MyPerfil from './page/cofiguracion/MiPerfil';
import Productos from './page/cofiguracion/Productos';
import RolesAdmin from './page/cofiguracion/RolesAdmin';
import RolesCrear from './page/cofiguracion/RolesCrear';
import EditarRoles from './page/cofiguracion/RolesEditar';
import UsuariosAdmin from './page/cofiguracion/UsuariosAdmin';
import DashBoard from './page/DashBoard';


function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login/>} />
          <Route path='/crear-cuenta' exact element={<CrearCuenta/>} />
          <Route path='/menu-principal' exact element={<DashBoard/>} />
          <Route path='/my-perfil' exact element={<MyPerfil/>} />
          <Route path='/roles-admin' exact element={<RolesAdmin/>} />
          <Route path='/usuarios-admin' exact element={<UsuariosAdmin/>} />
          <Route path='/roles-crear' exact element={<RolesCrear/>} />
          <Route path='/roles-editar' exact element={<EditarRoles/>} />
          <Route path='/productos' exact element={<Productos/>} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
