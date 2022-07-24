import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button type="button" className={className} onClick={onClick}>
      <img src="img/icon/arrow.png" alt="prev" />
    </button>
  );
}
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button type="button" className={className} onClick={onClick}>
      <img src="img/icon/arrow.png" alt="next" />
    </button>
  );
}

function AdoptionPuppies() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 1000,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
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
    <section className="adoption-area-two pt-110 pb-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title text-center mb-65">
              <div className="section-icon">
                <img src="img/icon/pawprint.png" alt="" />
              </div>
              <h5 className="sub-title">Porque usar SalvaPET</h5>
              <h2 className="title">Es todo lo que tu cliníca necesita</h2>
              <p>Descubre todos los servicios que ofrece el sistema SalvaPET</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container custom-container">
        <Slider className="row adopt-active" {...settings}>
          <div className="col-xl">
            <div className="adoption-item">
              <div className="adopt-thumb">
                <Link to="/breeder-details">
                  <img src="img/images/adop_img01.png" alt="" />
                </Link>
                <span className="status">Free</span>
              </div>
              <div className="adopt-content">
                <h3 className="title">
                  <Link to="/breeder-details">Facturación</Link>
                </h3>
                <p>Generar facturas con tu firma </p>
                <Link to="/breeder-details" className="read-more">
                  Empieza Ya <img src="img/icon/pawprint.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl">
            <div className="adoption-item">
              <div className="adopt-thumb">
                <Link to="/breeder-details">
                  <img src="img/images/adop_img02.png" alt="" />
                </Link>
                <span className="status">Free</span>
              </div>
              <div className="adopt-content">
                <h3 className="title">
                  <Link to="/breeder-details">Reportes</Link>
                </h3>
                <p>
                  Reporta a tus clientes sobre las desparasitaciones,
                  vacunaciones, vitaminaciones, etc a tus clientes
                </p>
                <Link to="/breeder-details" className="read-more">
                  Empieza Ya
                  <img src="img/icon/pawprint.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl">
            <div className="adoption-item">
              <div className="adopt-thumb">
                <Link to="/breeder-details">
                  <img src="img/images/adop_img03.png" alt="" />
                </Link>
                <span className="status">Free</span>
              </div>
              <div className="adopt-content">
                <h3 className="title">
                  <Link to="/breeder-details">Informes Contables</Link>
                </h3>
                <p>Obtén informes sobre los ingresos y gastos de tu cliníca.</p>
                <Link to="/breeder-details" className="read-more">
                  Empieza Ya <img src="img/icon/pawprint.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl">
            <div className="adoption-item">
              <div className="adopt-thumb">
                <Link to="/breeder-details">
                  <img src="img/images/adop_img04.png" alt="" />
                </Link>
                <span className="status">Free</span>
              </div>
              <div className="adopt-content">
                <h3 className="title">
                  <Link to="/breeder-details">Administración</Link>
                </h3>
                <p>Maneja precios, medicamentos, contratos, etc</p>
                <Link to="/breeder-details" className="read-more">
                  Empieza Ya <img src="img/icon/pawprint.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl">
            <div className="adoption-item">
              <div className="adopt-thumb">
                <Link to="/breeder-details">
                  <img src="img/images/adop_img05.png" alt="" />
                </Link>
                <span className="status">Free</span>
              </div>
              <div className="adopt-content">
                <h3 className="title">
                  <Link to="/breeder-details">
                    Asistencia sanitaria y Monitoreo Domiciliario
                  </Link>
                </h3>
                <p>
                  Auxilia a las mascotas en caso de emergencia, y apoya en las
                  etapas de recuperación de los ya salvados
                </p>
                <Link to="/breeder-details" className="read-more">
                  Empieza Ya <img src="img/icon/pawprint.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default AdoptionPuppies;
