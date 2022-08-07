import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';


function App() {
  const [linea1, setLinea1]=useState('');
  const [linea2, setLinea2]=useState('');
  const [imagen, setImagen]=useState('');

  const onchangeLinea1 = function(evento){
    setLinea1(evento.target.value)
  }
  const onchangeLinea2 = function(evento){
    setLinea2(evento.target.value)
  }

  const onchangeImagen = function(evento){
    setImagen(evento.target.value)
  }
  const onClickExportar = function (evento) {
    
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">

      <select onChange={onchangeImagen} >
      <option value="Select">Selecione una Imagen</option>
        <option value="fire">House fire</option>
        <option value="futurama">Futurama</option>
        <option value="History">History</option>
        <option value="Matrix ">Matrix</option>
      </select> <br/> <br/>

      <input onChange={onchangeLinea1}  type="text" placeholder='Escribir'/> <br/>
      <input onChange={onchangeLinea2} type="text" placeholder='Escribir'/><br/>
      <button onClick={onClickExportar}>Exportar</button>

      <div  className="meme" id="meme">
        <span>{linea1}</span> <br/>
        <span>{linea2}</span>
        <img src={"/img/"+imagen+".jpg"}/>
      </div>
      
    </div>
  );
}

export default App;
