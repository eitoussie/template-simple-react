import foto1 from "../src/img/maggie.jpg"
import foto2 from "../src/img/homer.jpg"
import foto3 from "../src/img/bart.jpg"

function Personajes() {
    return (
        <div className = "tarjetas d-flex">   
            <div className = "espacioCards">
                    <div className="card" style={{width: '15rem'}}>
                        <img src = {foto1} alt = "maggie"/>

                        <div className="card-body">
                            <h5 className="card-title">Maggie </h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                            <a href="#" className="btn btn-danger">leer mas... </a>
                        </div>
                    </div>        
            </div>


                            <div className = "espacioCards">
                                <div className="card" style={{width: '15rem'}}>
                                    <img src = {foto2} alt = "homer"/>

                                    <div className="card-body">
                                        <h5 className="card-title">Homero </h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                                        <a href="#" className="btn btn-danger">leer mas... </a>
                                    </div>
                                </div>        
                            </div>

                            <div className = "espacioCards">
                                <div className="card" style={{width: '15rem'}}>
                                    <img src = {foto3} alt = "bart"/>

                                    <div className="card-body">
                                        <h5 className="card-title">Bart </h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                                        <a href="#" className="btn btn-danger">leer mas... </a>
                                    </div>
                                </div>        
                            </div>

        </div>  
    
    );
  }

  export default Personajes;
