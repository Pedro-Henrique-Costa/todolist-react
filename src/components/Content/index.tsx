import styles from "./index.module.css"
import Plus from "../../assets/plus.svg"
import { TodoList } from "../TodoList"
import { NoContent } from "../NoContent"
import { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { api } from "../../configs/api/index";

import useToDoContext from "../../hooks/useToDoContext";
import { Toast } from "../Toast";
import { useToast } from "../../hooks/useToast";

type Task = {
  id: string;
  description: string;
  isDone: boolean;
}

export const Content = () => {

  //VARIAVEIS DE ESTADO
  const [description, setDescription] = useState<string>("");


  //CHAMANDO O CONTEXTO PARA USAR AS VARIAVEIS
    //CRIANDO HOOK 
  const { taskListState, setTaskListState } = useToDoContext()

  const { showToast } = useToast();
  

  // VARIAVEIS COM LOGICAS
  const tasksDone = taskListState.filter((task) => {
    return task.isDone !== false;
  })
  const disableButton = !description.length; //tratando variavel como boolenana



  //FUNÇÕES
  // Adiciona Tarefa
  const addTaskOnList = () => {

    const v4Id = uuidv4();
    const newTask = {
      id: v4Id,
      description,
      isDone: false
    }

    //POST
    api.post("tasks",newTask)
      .then(() => setTaskListState((currentValue) => [...currentValue, newTask]))
      .finally(() => setDescription(''))
      showToast({
        message: "Tarefa Adicionada com sucesso",
        type: "sucess"
      })
    // setTaskList((currentValue) => [...currentValue, newTask]);
    
  }

  //DELETE
  const removeTaskOnList = (id: string) => {
    api.delete(`tasks/${id}`)
      .then(() => setTaskListState((currentValue) => currentValue.filter(task => task.id !== id)));
    
  }

  //PUT
  const changeStatusCheckbox = (id: string) => {
    const task = taskListState.find(task => task.id === id);

    if(task) {
      api.patch(`tasks/${id}`, {
        isDone: !task.isDone
      })
    }

    
    
    const elements = taskListState.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone
        }
      }
      return task;
    });

    setTaskListState(elements);
  }

  //Efeito Colateral - 
  //nao preciso passar toda a URL pois ja esta configurado
  //GET
  useEffect(() => {
    api.get("tasks").then((response) =>
    
    setTaskListState(response.data as Task[]));
  }, []);


  return (
    <section className={styles['section-container']}>
      <main>

        <article className={styles.input_container}>

          <input
            className={styles.input}
            type="text"
            value={description}
            placeholder="Adicione uma nova tarefa"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}>
          </input>

          <button
            className={styles.button}
            disabled={disableButton}
            onClick={() => addTaskOnList()}> Criar
            <img src={Plus} alt="Logo de mais"></img>
          </button>
          
        </article>

        <article className={styles.content_header}>

          <article className={styles.tasks_container}>
            <p className={styles.task_created}>Tarefas Criadas</p>
            <span className={styles.span_value}>{taskListState.length}</span>
          </article>

          <article className={styles.tasks_container}>
            <p className={styles.task_done}>Concluidas</p>
            <span className={styles.span_value}>{tasksDone.length} de {taskListState.length}</span>
          </article>

        </article>

        {taskListState.length === 0 ? <NoContent /> : <TodoList
          onDelete={removeTaskOnList}
          onChangeCheckbox={changeStatusCheckbox}
           />}

           <Toast message="Tarefa adicionada com sucesso" type="sucess"/>

      </main>
    </section>
  )

} 