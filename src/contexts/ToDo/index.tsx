import { createContext, useState } from "react";
import { Task } from "../../models/Task";

//TIPO DO CONTEXTO
type ToDoContextProps = {
    taskListState: Task[]
    setTaskListState: React.Dispatch<React.SetStateAction<Task[]>>
}

//TIPO DO FILHO
type ToDoContextProviderProps = {
    children: React.ReactNode
}

//VARIAVEL NECESSARIA PARA INICIALIZAR O CONTEXTO
const DEFAULT_VALUES = {
    taskListState: [],
    setTaskListState: () => [{}]
}

//CREATE CONTEXT
const ToDoContext = createContext<ToDoContextProps>(DEFAULT_VALUES)

//PROVER O CONTEXTO (PARA ALGUÉM)
const ToDoContextProvider = ({ children }: ToDoContextProviderProps) => {
    const [taskListState, setTaskListState] = useState<Task[]>([]);
    return (
        <ToDoContext.Provider value={{
            taskListState,
            setTaskListState
        }}>
            {children}
        </ToDoContext.Provider>
    );
}

export type {ToDoContextProps};

export { ToDoContextProvider };

export default ToDoContext;