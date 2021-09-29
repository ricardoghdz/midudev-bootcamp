//import logo from './logo.svg';
import './App.css'; //Importa los estilos
import Mensaje from './Mensaje';

const Descripcion = () => {
  return(
    <div>
      <h1 style={{color:"blue"}}>Aplicacion de proceso mental</h1>
      <strong >En desarrollo</strong>
    </div>
  )
}

function App () {
  return (
    <d className="App">
      <Descripcion />
      <Mensaje color="red" message="Perdone el inconveniente" />
      <Mensaje color="green" message="Proximamente quedará resuelto"/>
      <Mensaje color="orange" message="Gracias por su comprension" />
    </d>
  )
}

export default App;
