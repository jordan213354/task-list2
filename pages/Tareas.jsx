import React from 'react'

import { TodoAdd } from "../src/components/TodoAdd";
import { TodoList } from "../src/components/TodoList"
import { useTodo } from "../src/hooks/useTodo";
function Tareas() {
    	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTodo();
    return (
        <div className='task-list'>
      
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
			</div>
        </div>
    )
}

export default Tareas;