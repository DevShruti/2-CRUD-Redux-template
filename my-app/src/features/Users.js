import { createSlice } from "@reduxjs/toolkit";

import { UsersData } from "../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
    
    },

    deleteUser: (state, action) => {
      
    },

    updateUsername: (state, action) => {
     
    },
  },
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;