import { FormEvent, useEffect, useState } from "react"
import { TasksProps } from "../contexts/TasksContext/types"
import { useTasks } from "../contexts/TasksContext/useTasks"
import { Task } from "./Task"

export function Tasks() {
    const { tasks, setTasks } = useTasks()

    const totalOfCompletedTasks = tasks.reduce((counter, obj) => {
        if (obj.isCompleted === true) counter += 1
        return counter;
    }, 0);

    function deleteTask(taskToDelete: string) {
        const taskWithoutDeletedOne = tasks.filter(task => {
            return task.id !== taskToDelete
        })

        setTasks(taskWithoutDeletedOne)
    }

    return (
        <section className="flex flex-col gap-2 pb-8">
            <header className="flex flex-row items-center justify-between border-b py-4 border-b-zinc-700">
                <div className="flex flex-row items-center gap-2 sm:gap-4">
                    <strong className="text-sky-600 text-sm">Created tasks</strong>
                    <span className="px-[8px] py-[2px] rounded-full bg-zinc-700 text-zinc-50 text-xs">
                        {tasks.length}
                    </span>
                </div>
                
                <div className="flex flex-row items-center gap-2 sm:gap-4">
                    <strong className="text-violet-600 text-sm">Done</strong>
                    <span className="px-[8px] py-[2px] rounded-full bg-zinc-700 text-zinc-50 text-xs">
                        {
                            tasks.length === 0
                            ? 0
                            : `${totalOfCompletedTasks} de ${tasks.length}`
                        }
                    </span>
                </div>
            </header>

            {
                tasks.length !== 0 ? (
                    tasks.map(task => {
                        return (
                            <Task 
                                key={task.id}
                                id={task.id}
                                description={task.description}
                                checked={task.isCompleted}
                                onDeleteTask={deleteTask}
                            />
                        ) 
                    })
                ) : (
                    <div className="flex flex-col items-center justify-center py-16 text-zinc-500">
                        <img src="clipboard.svg" alt="Clipboard icon" />
                        <strong className="mt-4">You don't have any tasks yet</strong>
                        <span>Create tasks and organize your to-dos</span>
                    </div>
                )
            }
        </section>
    )
}