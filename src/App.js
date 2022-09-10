
import {HashRouter as Router, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home';
import DogList from './pages/DogList';
import AdoptionsPages from './pages/AdoptionsPages'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import ShopPages from './pages/ShopPages'
import ShopDetailsPage from './pages/ShopDetailsPage'
import BreederPage from './pages/BreederPage'
import BreederDetailsPage from './pages/BreederDetailsPage'
import HometwoPage from './pages/HometwoPage'
import ScrollToTopRoute from './ScrollToTopRoute'
import Swal from 'sweetalert2'

function App() {
  
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  const mostrarAlerta=()=>{
    swalWithBootstrapButtons.fire({
      title: 'SOLO EMERGENCIA',
      text: "Este sistema fue diseñado solo para los casos de emergencia, su Ip se vera comprometida en caso de mal uso! ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, continuar al chat!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Ahora puede usar el Chat!',
          'Comunica tu problema y un veterinario te asistira.',
          'Calcelar'
        )
        const hide_SOS = document.getElementById("alert_btn");
        hide_SOS.style.display="none";
        const show_chat = document.getElementById("sntch_button");
        show_chat.style.setProperty('display', 'flex', 'important');
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Gracias por usar nuestros servicios',
          'error'
        )
      }
    })
  }
  

  return (
  <div className='app'>
   
   <Router>
       <Header/>
       <Switch>
          <ScrollToTopRoute exact={true} path='/'>
          <Home/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/doglist'>
            <DogList/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/adoption'> 
            <AdoptionsPages/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/contacts'>
            <ContactPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/blogs'>
          <BlogPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/blog-details'>
          <BlogDetailsPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/shop'>
           <ShopPages/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/shop-details'>
          <ShopDetailsPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/breeder'>
          <BreederPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/breeder-details'>
          <BreederDetailsPage/>
          </ScrollToTopRoute>

          <ScrollToTopRoute exact={true} path='/home-two'>
          <HometwoPage/>
          </ScrollToTopRoute>
       </Switch>
       <Footer/>
   </Router>
   <button onClick={()=>mostrarAlerta()} id="alert_btn">  </button>
  </div>
  );
}

export default App;
   