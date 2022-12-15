import React from 'react';
import ContentHeader from '../component/ContentHeader';
import NavBar from "../component/NavBar";
import SidebarContainer from '../component/SiderbarContainer';

const DashBoard = () => {
    return (
        <>
            <NavBar></NavBar>
            <SidebarContainer></SidebarContainer>

            <main id="main" className="main">
                <ContentHeader
                    titulo={"Tablero"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={""}
                    breadCrumb3={"/ Tablero"}
                    ruta1={"/menu-principal"}
                />
                <section className='section dashboard'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-xxl-4 col-md-6'>
                                    <div className='card info-card sale-card'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>Sales <span>| Today</span></h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center"> 
                                                    <i className="bi bi-cart" />
                                                </div>
                                                <div className="ps-3">
                                                    <h6>145</h6> 
                                                    <span className="text-success small pt-1 fw-bold">12%</span>
                                                    <span className="text-muted small pt-2 ps-1">increase</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xxl-4 col-md-6'>
                                    <div className='card info-card revenue-card'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>Revenue <span>| Today</span></h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center"> 
                                                    <i className="bi bi-currency-dollar" />
                                                </div>
                                                <div className="ps-3">
                                                    <h6>$3,264</h6> 
                                                    <span className="text-success small pt-1 fw-bold">8%</span>
                                                    <span className="text-muted small pt-2 ps-1">increase</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>

    )
}

export default DashBoard;