
import "./App.css";




import {  Route, Routes} from "react-router-dom";
import Inicio from "../pages/inicio";
import SobreNosotros from "../pages/SobreNosotros";
import Tareas from "../pages/Tareas"
import NavBar from "./components/NavBar";


function App()  {


	return (
		
		<>
			<NavBar />
			
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="sobre-nosotros" element={<SobreNosotros />} />
					<Route path="/tareas" element={<Tareas/>}/>
				</Routes>



		</>
	);
}

export default App;
