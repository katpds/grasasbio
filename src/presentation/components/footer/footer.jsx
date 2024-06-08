import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Síguenos en nuestras redes sociales: </span>
                </div>

                <div>
                    <a href='https://www.facebook.com/grasasbio/?locale=es_LA' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='https://x.com/grasasbio' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='https://www.google.com/search?q=grasasbio' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='https://www.instagram.com/grasas.bio/?hl=es' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='https://www.linkedin.com/in/grasas-bio-a437b4194/?' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='https://wa.me/573052665845' className='me-4 text-reset'>
                        <MDBIcon fab icon="whatsapp" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="burn" className="me-3" />
                                GrasasBio
                            </h6>
                            <p>
                                Futuro ecológico. Usted y nosotros comprometidos con el medio ambiente. 
                            </p>
                        </MDBCol>


                        <MDBCol md="4" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Te puede interesar</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    ¿Quiénes somos?
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Servicios
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    ¿Cómo lo hacemos?
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    A.C.U.
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Contacto
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Grabitec
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contáctanos</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Carrera 9 # 32A - 83
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                ambiental@grasasbio.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 57 320 935 44 66
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 57 305 266 58 45
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                © 2024 Copyright: www.grasasbio.com
            </div>
        </MDBFooter>
    );
}