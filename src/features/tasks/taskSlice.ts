import { createSlice } from "@reduxjs/toolkit";
import { taskData } from "../../interfaces/task";

const initialState: taskData[] = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const tasksSlice = createSlice({
  name: "Taks",
  initialState: initialState,
  reducers: {
    addTask: (state, actions) => {
      state.push(actions.payload);
    },
    deleteTask: (state, actions) => {
      const taskFound = state.find((task) => task.id === actions.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    editTask: (state, actions) => {
      const taskFound = state.find((task) => task.id === actions.payload.id);
      if (taskFound) {
        taskFound.title = actions.payload.title;
        taskFound.description = actions.payload.description;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
