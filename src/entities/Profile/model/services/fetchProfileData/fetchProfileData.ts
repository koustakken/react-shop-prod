import { createAsyncThunk } from '@reduxjs/toolkit'
import { thunkExtraArg } from '@/app/providers/StoreProvider'
import { IProfile } from '@/entities/Profile'

export const fetchProfileData = createAsyncThunk<IProfile, void, { rejectValue: string, extra: thunkExtraArg }>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const {
      extra,
      rejectWithValue
    } = thunkAPI

    try {
      const res = await extra.api.get<IProfile>('/profile')
      return res.data
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)