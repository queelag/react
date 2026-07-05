import { useReducer } from 'react'
import { ComponentLifeCycle } from '../definitions/enums.js'
import { useLifeCycle } from './use-life-cycle.js'

/**
 * Returns a function that can be used to cause a re-render of the component.
 * Optionally a callback can be passed that will be executed after the dispatch.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/hooks/use-dispatch)
 */
export function useDispatch(onDispatch?: () => unknown): () => void {
  const life = useLifeCycle()
  const reducer = useReducer(() => ({}), {})

  const dispatch = () => {
    switch (life.current) {
      case ComponentLifeCycle.Constructed:
      case ComponentLifeCycle.Unmounted:
        break
      case ComponentLifeCycle.Mounted:
        reducer[1]()

        if (onDispatch) {
          onDispatch()
        }

        break
      default:
        break
    }
  }

  return dispatch
}
