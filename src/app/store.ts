import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/taskSlice";

const store = configureStore({
  reducer: {
    task: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export { store };
