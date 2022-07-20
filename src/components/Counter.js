import React from 'react';



function Counter() {
   

  return (
    <section className="counter-area counter-bg" style={{backgroundImage:"url('img/bg/counter_bg.jpg')"}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
          <div className="counter-title text-center mb-65">
            <h6 className="sub-title">Cuales son nuestros objetivos?</h6>
            <h2 className="title">Salvar la vida de cada vez más a las mascotas</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="counter-item">
            <h2 className="count"><span className="odometer">85</span>%</h2>
            <p>Apoyo en casos de Emergencia</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="counter-item">
            <h2 className="count"><span className="odometer">250</span>+</h2>
            <p>Vidas de mascotas Salvadas</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="counter-item">
            <h2 className="count"><span className="odometer">40</span></h2>
            <p>Establecimientos usando Salva PET</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="counter-item">
            <h2 className="count">+<span className="odometer">2</span></h2>
            <p>Años Presentes de uso en Clínicas</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Counter;
