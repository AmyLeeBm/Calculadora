import React, {useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Resultado from './componentes/Resultaldo';
import Mensaje from './componentes/Mensaje';
import './App.css'
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<React.StrictMode>    
  <App /> 
   </React.StrictMode>)

// If you want to start measuring performance in your app, pass a function<br/>// to log results (for example: reportWebVitals(console.log))<br/>// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals<br/>reportWebVitals();

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);

  let componente;
  if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado total={total} cantidad={cantidad} plazo={plazo} />
  }

  return (
    <>
      <Header titulo="Calculadora plan a pagos" />
      <div className="container">
        <Formulario 
        cantidad={cantidad} 
        setCantidad={setCantidad} 
        plazo={plazo} 
        setPlazo={setPlazo} 
        setTotal={setTotal}
        />
      </div>
      <div className="mensaje">
        {componente}
      </div>
    </>
  )
}

export default App
