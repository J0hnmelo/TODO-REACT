import React, { useState } from 'react'; // Importa o React e a função useState do pacote 'react'
import './App.css'; // Importa um arquivo de estilos CSS
import { MdDelete } from "react-icons/md"; // Importa o ícone de delete do pacote 'react-icons'

function App() { // Define o componente funcional 'App'
  const ENTER_KEY = 13; // Constante que representa o código da tecla Enter
  const ESC_KEY = 27; // Constante que representa o código da tecla Esc

  const [value, setValue] = useState(""); // Define o estado 'value' e sua função de atualização 'setValue' com o valor inicial de uma string vazia
  const [todos, setTodos] = useState([]); // Define o estado 'todos' e sua função de atualização 'setTodos' com o valor inicial de um array vazio para armazenar as tarefas

  const changeInput = (event) => { // Função que atualiza o estado 'value' conforme o usuário digita no input
    setValue(event.target.value);
  }

  const eraseInput = () => { // Função para limpar o valor do input
    setValue("");
  }

  const submit = () => { // Função para adicionar uma nova tarefa à lista de 'todos'
    setTodos([
      ...todos,
      {
        id: new Date().getTime(), // Gera um ID baseado no tempo atual
        tittle: value, // Define o título da tarefa com o valor do input
        checked: false, // Define o estado inicial da tarefa como não checada
      }
    ]);
    eraseInput(); // Limpa o input após adicionar a tarefa
  }

  const submitTodo = (event) => { // Função para submeter uma nova tarefa quando a tecla Enter é pressionada
    if (event.which === ENTER_KEY) { // Verifica se a tecla pressionada é a tecla Enter
      if (value === "") { // Verifica se o valor do input está vazio
        alert("[ERROR] PREENCHA O TITULO DA TAREFA"); // Exibe um alerta caso o input esteja vazio
      } else {
        submit(); // Chama a função submit para adicionar a tarefa se o input não estiver vazio
      }
    } else if (event.which === ESC_KEY) { // Se a tecla pressionada for a tecla Esc, limpa o input
      eraseInput();
    }
  }

  const removeTodo = (todo) => { // Função para remover uma tarefa da lista
    setTodos(todos.filter((obj) => obj.id !== todo.id )); // Atualiza a lista removendo a tarefa com base no ID
  }

  const checkedTodo = (todo) => { // Função para marcar/desmarcar uma tarefa como concluída
    setTodos(todos.map((obj) => obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj )); // Atualiza a lista marcando/desmarcando a tarefa com base no ID
  }

  return ( // Retorna o JSX que representa a estrutura do componente
    <>
      <header className="title">
        <h1>Todo List</h1>
      </header>
      <section className="todo-section">
        <input
          type="text"
          name="todo"
          id="todo-value"
          placeholder="O que será feito?"
          value={value}
          onChange={changeInput}
          onKeyDown={submitTodo}
        />
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
      </section>
    </>
  );
}

export default App; // Exporta o componente 'App' para ser utilizado em outros arquivos
