import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
  },
  reducers: {
    setTasks(state, action) {
      state.taskList = action.payload;
    },
    addTask(state, action) {
      state.taskList.push(action.payload);
    },
  },
});

export const { setTasks, addTask } = taskSlice.actions;
export default taskSlice.reducer;
