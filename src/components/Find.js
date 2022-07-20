import React from 'react';
import {Link} from 'react-router-dom'


function Find() {
  return (
    <div className="find-area">
    <div className="container custom-container">
      <div className="row">
        <div className="col-12">
          <form >
            <div className="find-wrap">
              <div className="location">
                <i className="flaticon-location" />
                <input type="text" defaultValue="Veterinarios Riobamba-Ecuador" />
              </div>
              <div className="find-category">
                <ul>
                  <li><Link to="#"><i className="flaticon-dog" /> Ayuda a tu Perro</Link></li>
                  <li><Link to="#"><i className="flaticon-happy" /> Ayuda a tu Gato</Link></li>
                  <li><Link to="#"><i className="flaticon-dove" /> Ayuda a tus Mascotas</Link></li>
                </ul>
              </div>
              <div className="other-find">
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ! Se un heróe !
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Find;
