import { render, RenderResult } from '@testing-library/react'
import React, { Fragment, ReactElement, useEffect } from 'react'
import { describe, expect, it } from 'vitest'
import { ComponentLifeCycle, useLifeCycle } from '../../src'

describe('useLifeCycle', () => {
  it('returns the correct life cycle', async () => {
    let Component: () => ReactElement, result: RenderResult

    Component = () => {
      const life = useLifeCycle()
      expect(life.current).toBe(ComponentLifeCycle.CONSTRUCTED)

      useEffect(() => {
        expect(life.current).toBe(ComponentLifeCycle.MOUNTED)

        return () => {
          expect(life.current).toBe(ComponentLifeCycle.UNMOUNTED)
        }
      }, [])

      return <Fragment />
    }

    result = render(<Component />)
    result.unmount()
  })
})
