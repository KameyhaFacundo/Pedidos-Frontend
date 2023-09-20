import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/views/Login";
import Error404 from "./components/views/Error404";
import AcercaDeNosotros from "./components/views/AcercaDeNosotros";

function App() {
  // const usuarioEnLinea = JSON.parse(sessionStorage.getItem('usuarioLogueado')) || {};
  // const [usuarioActivo, setUsuarioActivo] = useState(usuarioEnLinea);

  return (
  
   <BrowserRouter>
  
  <AcercaDeNosotros></AcercaDeNosotros>
  {/* <Error404></Error404> */}
  {/* <Login></Login> */}

  
  </BrowserRouter>


  )
}

export default App;
