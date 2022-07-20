import React from "react";
import {Link} from 'react-router-dom'



function BlogsHome() {
  return (
    <section className="blog-area pt-110 pb-60">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-9">
          <div className="section-title text-center mb-65">
            <div className="section-icon"><img src="img/icon/pawprint.png" alt="" /></div>
            <h5 className="sub-title">Noticias Blog</h5>
            <h2 className="title">Ultimas Noticias</h2>
            <p>Enterate de las ultimas noticias &amp; actualizaciones de los servicios que te puede dar Salva PET</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="blog-post-item mb-50">
            <div className="blog-post-thumb">
              <Link to="/blog-details"><img src="img/blog/blog_post_thumb01.jpg" alt="" /></Link>
              <div className="blog-post-tag">
                <Link to="/"><i className="flaticon-bookmark-1" />Destacable</Link>
              </div>
            </div>
            <div className="blog-post-content">
              <div className="blog-post-meta">
                <ul>
                  <li><i className="far fa-user" /><Link to="/">Admin</Link></li>
                  <li><i className="far fa-bell" /> Mar 10, 2022</li>
                </ul>
              </div>
              <h3 className="title"><Link to="blog-details">Notifica sobre tu mascota</Link></h3>
              <p>Reporta los avances en el proceso post operatorio &amp; de recuperación.</p>
              <Link to="/blog-details" className="read-more">Leer Más <img src="img/icon/pawprint.png" alt="" /></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="blog-post-item mb-50">
            <div className="blog-post-thumb">
              <Link to="/blog-details"><img src="img/blog/blog_post_thumb02.jpg" alt="" /></Link>
              <div className="blog-post-tag">
                <Link to="/"><i className="flaticon-bookmark-1" />Creativo</Link>
              </div>
            </div>
            <div className="blog-post-content">
              <div className="blog-post-meta">
                <ul>
                  <li><i className="far fa-user" /><Link to="/">Admin</Link></li>
                  <li><i className="far fa-bell" /> Mar 12, 2021</li>
                </ul>
              </div>
              <h3 className="title"><Link to="/blog-details">Nuevas formas de comunicación Cliente-Veterinario.</Link></h3>
              <p>Las Iot representan un gran avance en la comunicación </p>
              <Link to="/blog-details" className="read-more">Read More <img src="img/icon/pawprint.png" alt="" /></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="blog-post-item mb-50">
            <div className="blog-post-thumb">
              <Link to="/blog-details"><img src="img/blog/blog_post_thumb03.jpg" alt="" /></Link>
              <div className="blog-post-tag">
                <Link to="/"><i className="flaticon-bookmark-1" />Avances</Link>
              </div>
            </div>
            <div className="blog-post-content">
              <div className="blog-post-meta">
                <ul>
                  <li><i className="far fa-user" /><Link to="/">Admin</Link></li>
                  <li><i className="far fa-bell" /> Mar 12, 2021</li>
                </ul>
              </div>
              <h3 className="title"><Link to="/blog-details">Futura Aplicación Movíl</Link></h3>
              <p>Desearías agendar, tener recordatorios y notificar a tu veterinario, en solo dos pasos? Aquí te contamos el resto.</p>
              <Link to="/blog-details" className="read-more">Read More <img src="img/icon/pawprint.png" alt="" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BlogsHome;
