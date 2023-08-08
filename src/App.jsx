
import "./App.css";
// import { TodoAdd } from "./components/TodoAdd";
// import { TodoList } from "./components/TodoList";
// import { useTodo } from "./hooks/useTodo";

import {  Route, Routes} from "react-router-dom";
import Inicio from "../pages/inicio";
import SobreNosotros from "../pages/SobreNosotros";
import Tareas from "../pages/Tareas"
import NavBar from "./components/NavBar";


function App()  {
	// const {
	// 	todos,
	// 	todosCount,
	// 	pendingTodosCount,
	// 	handleNewTodo,
	// 	handleDeleteTodo,
	// 	handleCompleteTodo,
	// 	handleUpdateTodo,
	// } = useTodo();

	return (
		
		<>
			<NavBar />
			
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="sobre-nosotros" element={<SobreNosotros />} />
					<Route path="/tareas" element={<Tareas/>}/>
				</Routes>


{/* 		
			<div className="card-to-do">
				<h1>Lista de tareas</h1>
				<div className="counter-todos">
					<h3>
						N° Tareas: <span>{todosCount}</span>
					</h3>
					<h3>
						Pendientes: <span>{pendingTodosCount}</span>
					</h3>
				</div>

				<div className="add-todo">
					<h3>Agregar Tarea</h3>
					<TodoAdd handleNewTodo={handleNewTodo} />
				</div>

				<TodoList
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			</div> */}
		</>
	);
}

export default App;
