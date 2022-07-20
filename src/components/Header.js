import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

function Header() {
  const handleActive = (e) => {
    document.querySelectorAll(".main-menu ul li").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.parentNode.classList += " active";
  };
  const subActive = (e) => {
    document.querySelectorAll(".main-menu ul li").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.parentNode.parentNode.parentNode.classList += " active";
  };
  useEffect(() => {
    //SubMenu Dropdown Toggle
    if ($(".menu-area li.menu-item-has-children ul").length) {
      $(".menu-area .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      );
    }
    if ($(".mobile-menu").length) {
      var mobileMenuContent = $(".menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

      //Dropdown Button
      $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(500);
        }
      );
      //Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });

      //Menu Toggle Btn
      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }

    $(".navbar-toggle").on("click", function () {
      $(".navbar-nav").addClass("mobile_menu");
    });
    $(".navbar-nav li a").on("click", function () {
      $(".navbar-collapse").removeClass("show");
    });

    $(".header-search > a").on("click", function () {
      $(".search-popup-wrap").slideToggle();
      return false;
    });

    $(".search-close").on("click", function () {
      $(".search-popup-wrap").slideUp(500);
    });
  }, []);

  return (
    <header>
      <div className="header-top-area">
        <div className="container custom-container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="header-top-left">
                <ul>
                  <li>Llamanos: +593 99 653 5731</li>
                  {/*<li><i className="far fa-clock" />Opening Hours: 7:00 am - 9:00 pm (Mon - Sun)</li>*/}
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="header-top-right">
                <ul className="header-top-social">
                  <li className="follow">Redes :</li>
                  <li>
                    <a href="/#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header" className="menu-area">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler">
                <i className="fas fa-bars" />
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav show">
                  <div className="logo">
                    <Link to="/">
                      <img src="img/logo/logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li className="active menu-item-has-children">
                        <Link to="/">Inicio</Link>
                        <ul className="submenu">
                          <li className="active" onClick={(e) => subActive(e)}>
                            <Link to="/">Pagina de Inicio</Link>
                          </li>
                        </ul>
                      </li>
                      {/* <li className="menu-item-has-children"><Link to="/shop" onClick={(e)=> handleActive(e)}>Tienda</Link>
                          <ul className="submenu">
                            <li><Link to="/shop" onClick={(e)=> subActive(e)}>Tienda Veterinaria</Link></li>
                            <li><Link to="/shop-details" onClick={(e)=> subActive(e)}>Detalles</Link></li>
                          </ul>
                        </li>*/}
                      <li className="menu-item-has-children">
                        <Link to="/breeder" onClick={(e) => handleActive(e)}>
                          Servicios Veterinarios
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/breeder" onClick={(e) => subActive(e)}>
                              Asistencia Sanitaria y Monitoreo Domiciliario
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/breeder-details"
                              onClick={(e) => subActive(e)}
                            >
                              Sistema Salva PET
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="/blogs" onClick={(e) => handleActive(e)}>
                          Blog
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/blogs" onClick={(e) => subActive(e)}>
                              ¿Qué es Salva PET?
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/blog-details"
                              onClick={(e) => subActive(e)}
                            >
                              Trabajos a Futuro
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* <li><Link to="/adoption" onClick={(e)=> handleActive(e)}>ASTR</Link></li>
                       */}
                      <li>
                        <Link to="/contacts" onClick={(e) => handleActive(e)}>
                          Contacto
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul>
                      <li className="header-search">
                        <a href="/#">
                          <i className="flaticon-search" />
                        </a>
                      </li>

                      <li className="header-btn">
                        <Link to="/adoption" className="btn">
                          Iniciar Sesión{" "}
                          <img src="img/icon/w_pawprint.png" alt="" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn">
                    <i className="fas fa-times" />
                  </div>
                  <div className="nav-logo">
                    <Link to="/">
                      <img src="img/logo/2.png" alt="" title="true" />
                    </Link>
                  </div>
                  <div className="menu-outer"></div>
                  <div className="social-links">
                    <ul className="clearfix">
                      <li>
                        <a href="/#">
                          <span className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="fab fa-facebook-square" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="fab fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop" />
            </div>
          </div>
        </div>
        <div
          className="header-shape"
          style={{ backgroundImage: "url('img/bg/header_shape.png')" }}
        />
      </div>

      <div
        className="search-popup-wrap"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="search-close">
          <span>
            <i className="fas fa-times" />
          </span>
        </div>
        <div className="search-wrap text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="title">... Search Here ...</h2>
                <div className="search-form">
                  <form>
                    <input
                      type="text"
                      name="search"
                      placeholder="Type keywords here"
                    />
                    <button className="search-btn">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

