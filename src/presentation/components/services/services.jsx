import React from "react";
import { MDBIcon } from 'mdb-react-ui-kit';


export default function Services() {
    return (
        <div>
            <h2>Usted y nosotros comprometidos con el medio ambiente</h2>
            <p>Somos una empresa comprometida con el medio ambiente, que busca mitigar los efectos de la contaminación asociado a la inadecuada disposición del aceite de cocina usado, y otras grasas de origen vegetal o animal. Por esto te ofrecemos los siguientes servicios para realizarte la recolección de los mismos:</p>
            <ul>
                <li>Te brindamos capacitación sobre el tratamiento, disposición y aprovechamiento del aceite de cocina usado.</li>
                <li>Te realizamos la recolección del aceite de cocina usado.</li>
                <li>Te generamos certificado de recolección, transporte y disposición final del aceite de cocina usado, avalado por los entes de control distritales y nacionales.</li>
            </ul>
            <p>Realizamos recolección de aceite de cocina usado en:</p>
            <ul>
                <li>Hoteles</li>
                <li>Restaurantes</li>
                <li>Colegios</li>
                <li>Conjuntos Residenciales</li>
                <li>Casinos</li>
                <li>Fruterías y Heladerías</li>
                <li>Panaderías</li>
                <li>Empresas alimenticias</li>
                <li>Entre otros</li>
            </ul>
            <a href='https://wa.me/573052665845' className='me-4 text-reset'>
                <MDBIcon fab icon="whatsapp" />
                Programa tu recolección de aceite de cocina usado y otras grasas de origen vegetal o animal con GrasasBio
            </a>
            <p>Ventajas de trabajar con nosotros:</p>
            <ul>
                <li>Buena relación precio versus servicio.</li>
                <li>Eficiencia en la recolección de tus aceites de cocina usados de origen vegetal o animal.</li>
                <li>Certificado digital entregado</li>
                <li>Personal capacitado</li>
                <li>Documentación de nuestra empresa acorde a la ley</li>
            </ul>
        </div>
    );
}