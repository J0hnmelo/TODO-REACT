import React from "react";
import PropTypes from "prop-types";

import { MdDelete } from "react-icons/md";

const ListComps = ({todos, removeTodo, checkedTodo}) => {
  return (
    <>
      <ul className="todos">
        {
          todos.map((todo) => ( // Mapeia cada tarefa para renderizar na lista
            <li key={todo.id.toString()}> {/* Define a chave única para cada elemento da lista */}
              <span
                className={["todo-title", todo.checked ? "checked" : ""].join(" ")} // Adiciona classe CSS se a tarefa estiver marcada como concluída
                onClick={() => checkedTodo(todo)} // Marca/desmarca a tarefa quando clicada
                onKeyPress={() => checkedTodo(todo)} // Permite a marcação/desmarcação da tarefa ao pressionar uma tecla
                tabIndex={0} // Define que o elemento pode receber foco
                role="button" // Define o papel do elemento como um botão para acessibilidade
              >
                {todo.tittle} {/* Renderiza o título da tarefa */}
              </span>
              <button
                type="button"
                aria-label="Delete"
                className="btn-delete"
                onClick={() => removeTodo(todo)} // Remove a tarefa ao clicar no botão
              >
                <MdDelete /> {/* Renderiza o ícone de delete */}
              </button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

ListComps.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tittle: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  removeTodo: PropTypes.func.isRequired,
  checkedTodo: PropTypes.func.isRequired,
}

export default ListComps
