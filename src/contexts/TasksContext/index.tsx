import { createContext, ReactNode, useState } from "react"
import { TasksProps } from "./types"

interface TasksProviderProps {
    children: ReactNode
}

interface TasksContextProps {
    tasks: TasksProps[]
    setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>
}

export const TasksContext = createContext({} as TasksContextProps)

export function TasksProvider({ children }: TasksProviderProps) {
    const [tasks, setTasks] = useState<TasksProps[]>([])

    return (
        <TasksContext.Provider value={{ 
            tasks,
            setTasks
        }}>
            { children }
        </TasksContext.Provider>
    )
}