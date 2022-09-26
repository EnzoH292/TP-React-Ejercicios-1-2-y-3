import Saludar from "./Components/Saludar";
import './style.css'

function App() {

  const saludo = "my friend"
  const adicional = `(from changed state)`


  return (
    <div>
      <Saludar myFriend = {saludo}></Saludar>
    </div>
  );
}

export default App;
