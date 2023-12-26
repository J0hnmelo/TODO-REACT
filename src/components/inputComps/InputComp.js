import React, { useState } from 'react'; // Importa o React e a função useState do pacote 'react'
import PropTypes from "prop-types";
import './inputComp.css'

const InputComp = ({onNewTodo}) => {
  const ENTER_KEY = 13; // Constante que representa o código da tecla Enter
  const ESC_KEY = 27; // Constante que representa o código da tecla Esc

  const [value, setValue] = useState(""); // Define o estado 'value' e sua função de atualização 'setValue' com o valor inicial de uma string vazia

  const changeInput = (event) => { // Função que atualiza o estado 'value' conforme o usuário digita no input
    setValue(event.target.value);
  }

  const eraseInput = () => { // Função para limpar o valor do input
    setValue("");
  }

  const submit = () => { // Função para adicionar uma nova tarefa à lista de 'todos'
    onNewTodo(value)
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


  return (
    <>
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
      </section>
    </>
  )
}

InputComp.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default InputComp
