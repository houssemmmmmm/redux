import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Task from './Task'
import { Button } from 'react-bootstrap';
import { tasksActions } from "../store/Store"

function ListTask() {
    const tasksList = useSelector(state => state.tasksList)
    const dispatch = useDispatch();

    const sortTasksHandler = () => {
        dispatch(tasksActions.sortTasks())
    }


    return (
        <div>
            <div>
                {tasksList.map(el => <Task taskDescription={el.taskDescription} isDone={el.isDone} id={el.id} />)}
            </div>
            <Button variant="success" onClick={sortTasksHandler}>Sort By Completed</Button>
        </div>
    )
}

export default ListTask
