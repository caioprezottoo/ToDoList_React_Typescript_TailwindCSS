import useLocalStorage from "use-local-storage"
import { TASKS_KEY, type Task, TaskState } from "../models/Task"


export default function UseTask() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, [])

    function prepareTask() {
        setTasks([...tasks, {
            id: Math.random().toString(36).substring(2, 9),
            title: "",
            state: TaskState.Creating
        }])
    }

    return {
        prepareTask
    }
}