import logo from "./logo.svg";
import "./App.css";
import { AiOutlineRight } from 'react-icons/ai'; 
import { AiOutlineLeft } from 'react-icons/ai'; 

import imagen1 from "./imagenes/1.jpg";
import imagen2 from "./imagenes/2.JPG"
import imagen3 from "./imagenes/3.JPG";
import imagen4 from "./imagenes/4.JPG";
function App() {
  return (
    <div className="div-main">
    <button className="btn-13"><AiOutlineLeft/> </button>
      <img className="imagen" src={imagen1} />
     {/*  <img src={imagen2} />
      <img src={imagen3} />
    <img src={imagen4} /> */}
    <button><AiOutlineRight /> </button>
    </div>
  );
}


