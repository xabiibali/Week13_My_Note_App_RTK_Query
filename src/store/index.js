import { configureStore } from '@reduxjs/toolkit'
import NoteReducer from './api/NoteSlice'

export const store = configureStore({
  reducer: {
    notes: NoteReducer

    }
})