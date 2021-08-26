import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const toDoSlice = createSlice({
    name: "toDoList",
    initialState: [{
        id: uuidv4(),
        taskDescription: "Watch the Real madrid game",
        isDone: true,
    },
    {
        id: uuidv4(),
        taskDescription: "Finish the last season of Brooklyn nine-nine",
        isDone: false,
    },
    {
        id: uuidv4(),
        taskDescription: "Take a shower",
        isDone: false,
    }],
    reducers: {
        addTask: (state, action) => {
            state.push(
                {
                    id: uuidv4(),
                    taskDescription: action.payload,
                    isDone: false,
                }
            )
        },

        deleteTask: (state, action) => state.filter(el => el.id !== action.payload),

        doneTask: (state, action) => {
            const selectedTaskIndex = state.findIndex(el => el.id === action.payload)
            state[selectedTaskIndex].isDone = !state[selectedTaskIndex].isDone;
        },

        editTask: (state, action) => {
            const selectedTaskIndex = state.findIndex(el => el.id === action.payload)
            const editedTask = prompt("What's the new task ?");
            if (editedTask) { state[selectedTaskIndex].taskDescription = editedTask };
        },

        sortTasks: (state) => {
            state.sort((a, b) => (a.isDone === b.isDone) ? 0 : a.isDone ? -1 : 1);
        }

    }
})

const store = configureStore({
    reducer: { tasksList: toDoSlice.reducer }
})

export const tasksActions = toDoSlice.actions;
export default store;