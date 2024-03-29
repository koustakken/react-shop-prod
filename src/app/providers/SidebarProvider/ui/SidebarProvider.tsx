import {
  SidebarContext,
  State
} from '@/app/providers/SidebarProvider/lib/SidebarContext'
import { FC, PropsWithChildren, useMemo, useState } from 'react'

const defaultState = State.CLOSED

const SidebarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<State>(defaultState)
  const defaultProps = useMemo(
    () => ({
      state: state,
      setState: setState
    }),
    [state]
  )
  return (
    <SidebarContext.Provider value={defaultProps}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
