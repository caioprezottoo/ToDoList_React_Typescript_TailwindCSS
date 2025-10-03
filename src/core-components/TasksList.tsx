import Button from "../components/Button"

import PlusIcon from "../assets/icons/plus.svg?react"
import TaskItem from "./TaskItem"
import UseTasks from "../hooks/UseTasks"
import UseTask from "../hooks/UseTask"
import { TaskState } from "../models/Task"

export default function TasksList() {
    const { tasks } = UseTasks()
    const { prepareTask } = UseTask()

    function handleNewTask() {
        prepareTask()
    }

    return (
        <>
            <section>
                <Button
                    icon={PlusIcon}
                    className="w-full"
                    onClick={handleNewTask}
                    disabled={tasks.some((task) => task.state === TaskState.Creating)}
                >Nova Tarefa</Button>
            </section>
            <section className="space-y-2">
                {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
            </section>
        </>
    )
}