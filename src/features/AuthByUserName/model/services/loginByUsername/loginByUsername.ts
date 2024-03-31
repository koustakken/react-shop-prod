import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User, userActions } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/',
  async (AuthData, thunkAPI) => {
    try {
      const res = await axios.post<User>(
        'http://localhost:8000/login',
        AuthData
      )

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
      thunkAPI.dispatch(userActions.setAuthData(res.data));
      return res.data
    } catch (e) {
      console.log('@services')
      return thunkAPI.rejectWithValue(e)
    }
  }
)