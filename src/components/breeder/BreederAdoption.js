import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import HomeCounter from "../hometwo/HomeCounter";

function BreederAdoption() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 1000,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 1000,
        },
      },
    ],
  };
  return (
    <section className="inner-breeder-area breeder-bg">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-4 col-lg-9 col-md-12 col-sm-9">
            <div className="adoption-content">
              <h5 className="sub-title">Servicios Veterinarios</h5>
              <h2 className="title">
                Qué es la <span>Asistencia Sanitaria</span> para mascotas?
              </h2>
              <p>
                La asistencia sanitaria es una solución en los casos de
                emergencia y riesgo de muerte para las mascotas, donde el dueño
                puede presentar esta emergencia en cualquier momento, para
                resolver este gran problema se ha desarrollado lo siguiente:{" "}
              </p>
              <div className="adoption-list">
                <ul>
                  <li>
                    <i className="flaticon-tick" /> Una plataforma web
                  </li>
                  <li>
                    <i className="flaticon-tick" /> Una futura App Movíl
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-9 col-md-12 col-sm-9">
            <div className="breeder-info-wrap">
              <div className="row no-gutters justify-content-center">
                <div className="col-md-6">
                  <Slider className="breeder-active slick" {...settings}>
                    <div className="breeder-item">
                      <Link to="/breeder-details">
                        <img src="img/images/breeder_img01.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="breeder-item">
                      <Link to="/breeder-details">
                        <img src="img/images/breeder_img02.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="breeder-item">
                      <Link to="/breeder-details">
                        <img src="img/images/breeder_img03.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="breeder-item">
                      <Link to="/breeder-details">
                        <img src="img/images/breeder_img04.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="breeder-item">
                      <Link to="/breeder-details">
                        <img src="img/images/breeder_img05.jpg" alt="" />
                      </Link>
                    </div>
                  </Slider>
                </div>

                <div className="col-md-6">
                  <div
                    className="breed-services-info"
                    style={{
                      backgroundImage: 'url("img/bg/breed_services_bg.jpg")',
                    }}
                  >
                    <h5 className="sub-title">Para Veterinarios</h5>
                    <h3 className="title">Sistema Web Multifunción</h3>
                    <p>
                      Los veterinarios interesados en usar la plataforma solo
                      deberán solicitar el acceso a la plataforma
                    </p>
                    <Link to="/doglist" className="btn">
                      Solicitar Ahora{" "}
                      <img src="img/icon/w_pawprint.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BreederAdoption;
