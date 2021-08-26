import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux'
import { tasksActions } from "../store/Store"

function Task(props) {
    const dispatch = useDispatch();

    const deleteTaskHandler = (id) => {
        dispatch(tasksActions.deleteTask(id))
    }

    const doneTaskHandler = (id) => {
        dispatch(tasksActions.doneTask(id))
    }

    const editTaskHandler = (id) => {
        dispatch(tasksActions.editTask(id))
    }


    return (
        <div className="d-flex align-items-center justify-content-between mb-3">
            <div
                style={{ flex: "1", padding: ".3em", border: "1px solid black", marginRight: "1em", borderRadius: ".2em" }}>
                <div className="d-flex justify-content-between align-items-center">
                    {props.taskDescription}
                    <input style={{ width: "1.3em", height: "1.3em" }}
                        type="checkbox"
                        onChange={() => doneTaskHandler(props.id)}
                        checked={props.isDone} />
                </div>
            </div>
            <div className="d-flex" style={{ gap: "1em" }}>
                <Button variant="warning" onClick={() => { editTaskHandler(props.id) }}>Edit</Button>
                <Button variant="dark" onClick={() => { deleteTaskHandler(props.id) }} >Delete</Button>
            </div>
        </div>
    )
}

export default Task
