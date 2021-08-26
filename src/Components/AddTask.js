import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { tasksActions } from "../store/Store"

import React from 'react'

function AddTask() {
    const dispatch = useDispatch();
    const [taskInput, setTaskInput] = useState("");

    const inputHandler = (task) => {
        setTaskInput(task);
    }
    const addTaskHandler = () => {
        taskInput && dispatch(tasksActions.addTask(taskInput))
    }


    return (
        <div className="d-flex justify-content-center p-2 mb-3" style={{ gap: "1em" }}>
            <input placeholder="Enter your task here" onChange={(e) => inputHandler(e.target.value)}></input>
            <Button variant="danger" onClick={addTaskHandler}>Add Task</Button>
        </div >
    )
}

export default AddTask
