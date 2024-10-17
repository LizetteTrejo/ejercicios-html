import { Link } from 'react-router-dom';
import './navbar.css'

const estiloArial = {
  fontFamily:"Arial", 
  color:"yellow"
}

const estiloCourier = {
  fontFamily:"Courier New, monospace", 
  color:"cyan"
}

// Suponer que se hace una petición fetch
const myJson = '{"fontFamily":"Times New Roman", "color":"red"}';
// Convertir JSON a Object
const myObjStyle = JSON.parse( myJson );


const Navbar = () => {

  const isArial = true;

/*
  let estiloAAplicar;

  if( isArial ){
    estiloAAplicar = estiloArial;
  } else {
    estiloAAplicar = estiloCourier;
  }
*/
  return (
    <>
      <nav className="navbar" >
        {/* Logo */}
        <div className="logo">
          <img src="/img/ninja-128px.png" alt="Logo Ninja" />
        </div>
        {/* Opciones del menú */}
        <ul className="nav-links" style={ myObjStyle || estiloArial } >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to="/pages/about">About</Link>
          </li>
          <li>
          <Link to="/pages/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navbar };