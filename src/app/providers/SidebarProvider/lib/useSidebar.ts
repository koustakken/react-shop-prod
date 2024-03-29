import { useContext } from 'react'
import { SidebarContext, State } from './SidebarContext'

interface useSidebarResult {
  toggleSidebar: () => void
  state: State
}

export function useSidebar(): useSidebarResult {
  const { state, setState } = useContext(SidebarContext)
  const toggleSidebar = () => {
    const newState = state === State.OPEN ? State.CLOSED : State.OPEN
    setState(newState)
  }
  return {
    toggleSidebar,
    state
  }
}
