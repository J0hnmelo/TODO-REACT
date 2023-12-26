import React, { useState } from 'react'; // Importa o React e a função useState do pacote 'react'
import InputComp from './components/inputComps';
import ListComps from './components/listComps';
import './App.css'; // Importa um arquivo de estilos CSS

function App() { // Define o componente funcional 'App'
  const [todos, setTodos] = useState([]); // Define o estado 'todos' e sua função de atualização 'setTodos' com o valor inicial de um array vazio para armazenar as tarefas

  const submit = (value) => { // Função para adicionar uma nova tarefa à lista de 'todos'
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
        <InputComp onNewTodo={submit}/>
        <ListComps todos={todos} checkedTodo={checkedTodo} removeTodo={removeTodo}/>
      </section>
    </>
  );
}

export default App; // Exporta o componente 'App' para ser utilizado em outros arquivos
