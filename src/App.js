//import logo from '../src/img/logo-circular-texto.png';
import foto from "../src/img/header-simpsons.gif"
import Personajes from "./personajes";
import Homersapiens from "./homersapien";
import Footer from "./footer";


function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <img src ={foto} alt = "los simpsons fan blog"></img>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">contacto</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">busqueda</button>
        </form>
      </div>
    </div>
  </nav>
    <div>
      <Homersapiens />
    </div>
    <div>
        <Personajes/>
    </div>
        <div>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
