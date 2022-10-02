import { Header } from "./components/Header";
import { NewTaksForm } from "./components/NewTaskForm";
import { Tasks } from "./components/Tasks";
import { TasksProvider } from "./contexts/TasksContext";

export function App() {
  return (
    <TasksProvider>
      <Header />
      <main className="flex flex-col gap-8 sm:gap-16 max-w-3xl m-auto px-4">
        <NewTaksForm />
        <Tasks />
      </main>
    </TasksProvider>
  )
}