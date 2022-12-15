import React from 'react';
import { Link } from 'react-router-dom';

const ContentHeader = ({titulo, breadCrumb1, breadCrumb2, breadCrumb3, ruta1 }) => {
    return (
        <div className='pagetitle'>
            <h5 className='card-title'>{titulo}</h5>
            <nav>
                <ol className='breadcrumb'>
                    {breadCrumb1 === "" ? <li>&nbsp;</li> : <li className="breadcrumb-item"><Link to={ruta1}>{breadCrumb1}</Link></li>}
                    {breadCrumb2 === "" ? <li>&nbsp;</li> : <li className="breadcrumb-item">{breadCrumb2}</li>}
                    {breadCrumb3 === "" ? <li>&nbsp;</li> : <li className="breadcrumb-item active">{breadCrumb3}</li>}
                </ol>
            </nav>
        </div>
    )
}

export default ContentHeader;