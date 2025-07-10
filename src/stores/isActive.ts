import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useIsActiveStore = create(
  combine(
    {
      isActive: true
    },
    set => {
      return {
        toggleActive: () => {
          // const { isActive } = get()
          // set({
          //   isActive: !isActive
          // })
          set(({ isActive }) => ({
            isActive: !isActive
          }))
        }
      }
    }
  )
)
