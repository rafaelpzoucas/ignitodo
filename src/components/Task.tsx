import { Check, Trash, TrashSimple } from 'phosphor-react'
import { InputHTMLAttributes, useEffect, useState } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox';
import { useTasks } from '../contexts/TasksContext/useTasks';

interface TaskProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    description: string
    onDeleteTask: (task: string) => void
    checked: boolean
}

export function Task({ id, description, onDeleteTask, checked }: TaskProps) {
    const { tasks, setTasks } = useTasks()

    function handleCheckedChange() {
        const taskIndex = tasks.findIndex(task => {
            return task.id === id
        })

        const tasksUpdated = [...tasks]

        tasksUpdated[taskIndex].isCompleted = !tasksUpdated[taskIndex].isCompleted

        setTasks(tasksUpdated)
    }

    return (
        <label 
            htmlFor={id} 
            className={`
                flex flex-row gap-2 bg-zinc-700 p-4 rounded-lg border border-zinc-600 cursor-pointer
                ${checked && 'bg-violet-900 transition-colors duration-200'}
            `}
        >
            <Checkbox.Root 
                id={id}
                className={`relative w-6 h-6 rounded-full border-2 ${checked ? 'bg-violet-600 border-violet-600' : 'border-sky-600'}`}
                checked={checked}
                onCheckedChange={handleCheckedChange}
            >
                <Checkbox.Indicator
                    className="w-full h-full rounded-full flex items-center justify-center "
                >
                    <Check size={14} weight="bold" />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <span 
                className={`${checked && 'line-through'}`}
            >
                {description}
            </span>

            <button 
                className='ml-auto'
                onClick={() => onDeleteTask(id)}
            >
                <TrashSimple />
            </button>
        </label>
    )
}