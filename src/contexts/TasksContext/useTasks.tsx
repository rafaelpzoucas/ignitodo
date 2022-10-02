import { useContext } from "react"
import { TasksContext } from "."

export function useTasks() {
    const context = useContext(TasksContext)

    return context
}