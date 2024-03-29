import Task from './Task'

//Delete Task

//main function
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
         {tasks.map((task) => (
             <Task key={task} task={task} 
             onDelete={onDelete} 
             onToggle={onToggle} />
         ))}   
        </>
    )
}

export default Tasks
