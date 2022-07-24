import React from "react";

function AdoptionFaq() {
  return (
    <section className="faq-area faq-two-bg">
      <div className="faq-two-img" />
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-xl-7 col-lg-6">
            <div className="faq-wrapper">
              <div className="section-title white-title mb-35">
                <h5 className="sub-title">FAQ</h5>
                <h2 className="title">Preguntas adicionales</h2>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        No he usado nunca uno de estos sistemas
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      Cuando solicitas el sistema, se te otorgora una guía de
                      usuario para ti y para tus clientes{" "}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Programa de Fidelidad &amp; Premios
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      Si nos recomiendas y cada vez el sistema es más usado, los
                      primeros usuarios en hacerlo, obtendran una copia gratis
                      de las siguientes versiones de SalvaPET.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Completamente Gratis?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      Si, pero este sistema gratuito será solo por la fase de
                      beta de la aplicación, pasada la beta se implementaran
                      nuevas opciones y funciones bajo modalidades de pago.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-shape">
        <img src="img/images/faq_shape.png" alt="" />
      </div>
    </section>
  );
}

export default AdoptionFaq;
