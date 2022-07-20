import React from 'react'
import {Link} from 'react-router-dom'

function Adoption() {


  
  return (
    <section className="adoption-area">
    <div className="container">
      <div className="row align-items-center align-items-xl-end justify-content-center">
        <div className="col-xl-7 col-lg-6 col-md-10 order-0 order-lg-2">
          <div className="adoption-img">
            <img src="img/images/adoption_img.jpg" alt="" />
          </div>
        </div>
        <div className="col-xl-5 col-lg-6">
          <div className="adoption-content">
            <h2 className="title">Sistema desarrollado para Salvar <span>Vidas</span></h2>
            <p>El sistema entrega un acceso a los Veterinarios &amp; los dueños de mascotas (Tablero Administrativo), que provee todas las funciones e información para llevar una atención y seguimiento de calidad.</p>
            <Link to="/adoption" className="btn">Inicia Aquí <img src="img/icon/w_pawprint.png" alt="" /></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="adoption-shape"><img src="img/images/adoption_shape.png" alt="" /></div>
  </section>
  )
}

export default Adoption;
