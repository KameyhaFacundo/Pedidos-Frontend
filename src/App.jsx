import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/views/Login";


function App() {
  // const usuarioEnLinea = JSON.parse(sessionStorage.getItem('usuarioLogueado')) || {};
  // const [usuarioActivo, setUsuarioActivo] = useState(usuarioEnLinea);

  return (
  
   <BrowserRouter>
  
  <Login></Login>

  
  </BrowserRouter>


  )
}

export default App;
