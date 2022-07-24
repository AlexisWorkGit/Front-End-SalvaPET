import React from "react";
import ContactAddress from "./ContactAddress";

function ContactForm() {
  return (
    <section className="contact-area pt-110 pb-110">
      <div className="container">
        <div className="container-inner-wrap">
          <div className="row justify-content-center justify-content-lg-between">
            <div className="col-lg-6 col-md-8 order-2 order-lg-0">
              <div className="contact-title mb-20">
                <h5 className="sub-title">Contactanos</h5>
                <h2 className="title">
                  Envianos tus dudas<span>.</span>
                </h2>
              </div>
              <div className="contact-wrap-content">
                <p>
                  {" "}
                  Si tienes cualquier duda aparte, envianos un correo y te
                  contactaremos lo más rápido posible
                </p>
                <form className="contact-form">
                  <div className="form-grp">
                    <label htmlFor="name">
                      Nombre<span>*</span>
                    </label>
                    <input type="text" id="name" placeholder="Jon Deo..." />
                  </div>
                  <div className="form-grp">
                    <label htmlFor="email">
                      Email <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      placeholder="info.example@.com"
                    />
                  </div>
                  <div className="form-grp">
                    <label htmlFor="message">
                      Mensaje <span>*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Opinion..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-grp checkbox-grp">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">
                      No mostrar su dirección de correo
                    </label>
                  </div>
                  <button type="button" className="btn rounded-btn">
                    Enviar
                  </button>
                </form>
              </div>
            </div>

            <ContactAddress />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
