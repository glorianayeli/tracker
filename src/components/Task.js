import {FaTimes} from 'react-icons/fa'

const deleteTask = (id) => {
    console.log('delete', id)
}

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div  className={`task ${task.reminder ? 'reminder' : ''}`} >
            <h3 onDoubleClick={() => onToggle(task.id)}>{task.text} <FaTimes style={{color:'red'}} onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
