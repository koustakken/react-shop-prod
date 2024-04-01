import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider'
import { createReduxStore, AppDispatch } from '@/app/providers/StoreProvider/config/store'
import type { ReduxStoreWithManager, StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'

export { StoreProvider, createReduxStore, ReduxStoreWithManager, StateSchema, AppDispatch }
