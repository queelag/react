import { useReducer } from 'react'
import { ComponentLifeCycle } from '../definitions/enums.js'
import { useLifeCycle } from './use-life-cycle.js'

export function useDispatch(onDispatch?: () => any): () => void {
  const life = useLifeCycle()
  const reducer = useReducer(() => ({}), {})

  const dispatch = () => {
    switch (life.current) {
      case ComponentLifeCycle.CONSTRUCTED:
      case ComponentLifeCycle.UNMOUNTED:
        break
      case ComponentLifeCycle.MOUNTED:
        reducer[1]()
        onDispatch && onDispatch()

        break
    }
  }

  return dispatch
}
