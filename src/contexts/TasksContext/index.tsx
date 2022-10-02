import { createContext, ReactNode, useState } from "react"
import { TasksProps } from "./types"

interface TasksProviderProps {
    children: ReactNode
}

interface TasksContextProps {
    tasks: TasksProps[]
    setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>
    totalOfCompletedTasks: number
    countCompletedTasks: () => void
}

export const TasksContext = createContext({} as TasksContextProps)

export function TasksProvider({ children }: TasksProviderProps) {
    const [tasks, setTasks] = useState<TasksProps[]>([
        {
            id: '1',
            description: "Tarefa 1",
            isCompleted: true
        },
        {
            id: '2',
            description: "Tarefa 2",
            isCompleted: false
        },
        {
            id: '3',
            description: "Tarefa 3",
            isCompleted: true
        }
    ])
    const [totalOfCompletedTasks, setTotalOfCompletedTasks] = useState(0)

    function countCompletedTasks() {
        const count = tasks.reduce((counter, obj) => {
            if (obj.isCompleted === true) counter += 1
            return counter;
        }, 0);

        setTotalOfCompletedTasks(count)
    }

    return (
        <TasksContext.Provider value={{ 
            tasks,
            setTasks,
            totalOfCompletedTasks,
            countCompletedTasks
        }}>
            { children }
        </TasksContext.Provider>
    )
}