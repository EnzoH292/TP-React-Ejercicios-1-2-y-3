import Saludar from "./Components/Saludar";


function App() {

  const saludo = "my friend"
  const adicional = `(from changed state)`


  return (
    <div>
      <Saludar myFriend = {saludo} mensajeAdicional={adicional}></Saludar>
    </div>
  );
}

export default App;
