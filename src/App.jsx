import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const usuarioEnLinea = JSON.parse(sessionStorage.getItem('usuarioLogueado')) || {};
  const [usuarioActivo, setUsuarioActivo] = useState(usuarioEnLinea);

  return (
  
  <BrowserRouter>
  
  <Route excact path="/login" element={<Login setUsuarioActivo={setUsuarioActivo}></Login>}></Route>
  
  </BrowserRouter>


  )
}

export default App;
