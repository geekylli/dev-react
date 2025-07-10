import { createContext, useContext } from 'react'

export const IsActiveContext = createContext(true)
export function useIsActive() {
  return useContext(IsActiveContext)
}
