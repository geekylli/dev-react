import { create } from 'zustand'
import {
  combine,
  subscribeWithSelector,
  persist,
  devtools
} from 'zustand/middleware'

export const useCountStore = create(
  subscribeWithSelector(
    devtools(
      persist(
        combine(
          {
            count: 0,
            double: 0
          },
          set => ({
            increase: () => {
              set(state => {
                return {
                  count: state.count + 1
                }
              })
            },
            decrease: () => {
              set(state => {
                return {
                  count: state.count - 1
                }
              })
            }
          })
        ),
        {
          name: 'count'
        }
      )
    )
  )
)

useCountStore.subscribe(
  state => state.count,
  count => {
    useCountStore.setState({
      double: count * 2
    })
  }
)
