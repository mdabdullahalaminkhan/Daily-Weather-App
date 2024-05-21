import { createSlice } from '@reduxjs/toolkit'

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    value: 'Dhaka',
  },
  reducers: {
    newCity: (state, action) => {  
      state.value = action.payload;
      console.log(action.payload);
    },
  },
})
export const { newCity } = citySlice.actions;

export default citySlice.reducer;