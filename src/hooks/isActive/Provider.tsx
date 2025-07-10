import { IsActiveContext } from './Context'

export function IsActiveProvider({
  children,
  myValue
}: {
  children: React.ReactNode
  myValue: boolean
}) {
  return (
    <IsActiveContext.Provider value={myValue}>
      {children}
    </IsActiveContext.Provider>
  )
}
