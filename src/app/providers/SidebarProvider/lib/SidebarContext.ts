import { createContext } from 'react'

export enum State {
  OPEN = 'open',
  CLOSED = 'closed'
}

export interface SidebarContextProps {
  state: State
  setState: (state: State) => void
}

export const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps
)
