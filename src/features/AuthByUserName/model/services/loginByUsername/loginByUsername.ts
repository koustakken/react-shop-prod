import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, userActions } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { thunkExtraArg } from '@/app/providers/StoreProvider'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string, extra: thunkExtraArg }>(
  'login/',
  async (AuthData, thunkAPI) => {
    const {extra, dispatch, rejectWithValue} = thunkAPI

    try {
      const res = await extra.api.post<User>(
        '/login',
        AuthData
      )

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
      dispatch(userActions.setAuthData(res.data));
      extra.navigate('/main')
      return res.data
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)