import { Plus } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TasksProps } from '../contexts/TasksContext/types';
import { useTasks } from '../contexts/TasksContext/useTasks';

export function NewTaksForm() {
    const { tasks, setTasks } = useTasks()

    const [newTaskDescription, setNewTaskDescription] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        const newTask = {
            id: uuidv4(),
            description: newTaskDescription,
            isCompleted: false
        }

        setTasks([...tasks, newTask])
        setNewTaskDescription('')
    }

    function handleNewTaskDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskDescription(event.target.value)
    }
    
    return (
        <form onSubmit={handleCreateNewTask} className="flex flex-row gap-2 -mt-7">
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa" 
                value={newTaskDescription}
                onChange={handleNewTaskDescriptionChange}
                className="w-full p-4 bg-zinc-900 border-4 border-zinc-800 rounded-lg" 
                required
            />
            <button 
                type="submit" 
                className="bg-sky-600 hover:bg-sky-700 transition-colors duration-200 text-zinc-50 rounded-lg px-6 py-4 flex flex-row items-center gap-2"
                disabled={newTaskDescription.length === 0}
            >
                <Plus size={18} weight="bold" />
                <span className='hidden sm:inline'>
                    Criar
                </span>
            </button>
        </form>
    )
}