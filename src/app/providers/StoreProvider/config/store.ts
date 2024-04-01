import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { userReducer } from '@/entities/User'
import { createReducerManager } from '@/app/providers/StoreProvider/config/reducerManager'
import { $api } from '@/shared/api/api'

import { NavigateOptions } from 'react-router'

export function createReduxStore(
  initialState?: StateSchema,
  navigate?: (to: any, options?: NavigateOptions) => void
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer
  }
  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate
        }
      }
    })
  })
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type  AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
