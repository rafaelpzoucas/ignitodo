import { Check, Trash, TrashSimple } from 'phosphor-react'
import { InputHTMLAttributes, useState } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox';

interface TaskProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    description: string
    onDeleteTask: (task: string) => void
}

export function Task({ id, description, onDeleteTask }: TaskProps) {
    const [checked, setChecked] = useState(false)

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
                onCheckedChange={() => setChecked(!checked)}
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