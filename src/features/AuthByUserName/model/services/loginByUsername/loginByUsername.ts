import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from '@/entities/User'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/',
  async ({ username, password }, thunkAPI) => {
    try {
      const res = await axios.post<User>('http://localhost:8000/login', { username, password })
      if (!res.data) {
        throw new Error()
      }
      return res.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue(e)
    }
  }
)