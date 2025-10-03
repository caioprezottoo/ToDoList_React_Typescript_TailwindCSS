import Text from "../components/Text"
import Badge from "../components/Badge"
import UseTasks from "../hooks/UseTasks"

export default function TasksSummary() {
    const { tasksCount, concludedTasksCount } = UseTasks()

    return <>
        <div className="flex items-center gap-2">
            <Text variant="body-sm-bold" className="!text-gray-300">Tarefas Criadas</Text>
            <Badge variant="secondary">{tasksCount}</Badge>
        </div>
        <div className="flex items-center gap-2">
            <Text variant="body-sm-bold" className="!text-gray-300">Concluídas</Text>
            <Badge variant="primary">{concludedTasksCount} de {tasksCount}</Badge>
        </div>
    </>
}