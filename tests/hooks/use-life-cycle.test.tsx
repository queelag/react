import { RenderResult, render } from '@testing-library/react'
import { Fragment, ReactElement, useEffect } from 'react'
import { describe, expect, it } from 'vitest'
import { ComponentLifeCycle, useLifeCycle } from '../../src'

describe('useLifeCycle', () => {
  it('returns the correct life cycle', async () => {
    let Component: () => ReactElement, result: RenderResult

    Component = () => {
      const life = useLifeCycle()
      expect(life.current).toBe(ComponentLifeCycle.Constructed)

      useEffect(() => {
        expect(life.current).toBe(ComponentLifeCycle.Mounted)

        return () => {
          expect(life.current).toBe(ComponentLifeCycle.Unmounted)
        }
      }, [])

      return <Fragment />
    }

    result = render(<Component />)
    result.unmount()
  })
})
