import { FC, PropsWithChildren, useEffect } from 'react'
import { useStore } from 'react-redux'
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider'
import { StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema'
import { Reducer } from '@reduxjs/toolkit'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModeluLoaderProps {
  reducers: ReducerList
  removeAfterUnmount?: boolean
}
export const DynamicModuleLoader: FC<DynamicModeluLoaderProps & PropsWithChildren> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount } = props

  const store = useStore() as ReduxStoreWithManager

  useEffect(()=> {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      // при монтировании компонента подгружаем редьюсер
      store.reducerManager.add(name, reducer)
    })
    // при размонтировании удаляем
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
          // при монтировании компонента подгружаем редьюсер
          store.reducerManager.remove(name)
        })
      }
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}