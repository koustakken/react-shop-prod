import { UserSchema } from '@/entities/User'
import { LoginSchema } from '@/features/AuthByUserName'
import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit'
import { ProfileSchema } from '@/entities/Profile'
import { AxiosInstance } from 'axios'
import { NavigateOptions } from 'react-router'

export interface StateSchema {
  user: UserSchema
  // Async
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: UnknownAction) => any // cannot find type
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface thunkExtraArg {
  api: AxiosInstance
  navigate?: (to: any, options?: NavigateOptions) => void
}