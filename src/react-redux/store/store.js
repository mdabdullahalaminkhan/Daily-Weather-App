import { configureStore } from '@reduxjs/toolkit'
import citySlice from "../state/citySlice"

export default configureStore({
  reducer: {
    changeCity: citySlice
  },
});