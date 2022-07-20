import React,{ useEffect } from 'react';
import 'magnific-popup';
import $ from 'jquery';
import {Link} from 'react-router-dom'



function Faq({ afterElment }) {
  useEffect(()=>{


     /* magnificPopup video view */
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });

  },[])

  
  return (

    <section className={afterElment + " faq-bg"}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="faq-img-wrap">
            <img src="img/images/faq_tv.png" className="img-frame" alt="" />
            <img src="img/images/faq_img.png" className="main-img" alt="" />
            <Link to="/https://www.youtube.com/watch?v=XdFfCPK5ycw" className="popup-video" > </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="faq-wrapper">
            <div className="section-title mb-35">
              <h5 className="sub-title">FAQ(Preguntas Frecuentes)</h5>
              <h2 className="title">Asistencia Sanitaria &amp; Monitoreo Domiciliario</h2>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Qué es la Asistencia Sanitaria en Tiempo Real? (ASTR)
                    </button>
                  </h2>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
Es una manera de auxiliar a los casos de emergencias de las zonas urbano marginales dentro del territorio Ecuatoriano, todo esto gracias al sistema de chat interconectado con veterinarios selectos para asistir en los casos de gravedad                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Porque Monitoreo Domiciliario?
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">
                    En muchos de los casos de recuperación y tratamiento post operatorio, no existen medios optimizados que permitan una correcta observación del estado de salud de la mascota tanto para los dueños de mascota como veterinarios
                       </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Cualquiera la puede solicitar o usar?
                    </button>
                  </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="card-body">
                    Claro! nuestro sistema esta diseñado para que todos los veterinarios puedan usuarlo, una vez validados los datos del veterinario, se le otorgara un acceso al sistema sin costo alguno!
                    Y si eres dueño de mascota, no te preocupes! Puedes solicitar la asistencia, y si deseas acceso tu veterinario podra crearte un usuario y asi usar nuestros funcionalidades!
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="faq-shape"><img src="img/images/faq_shape.png" alt="" /></div>
  </section>
  )
}

export default Faq;
