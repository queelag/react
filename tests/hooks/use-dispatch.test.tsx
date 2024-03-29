import { render, RenderResult, screen } from '@testing-library/react'
import React, { ReactElement, useEffect, useRef } from 'react'
import { describe, expect, it, Mock, vi } from 'vitest'
import { useDispatch } from '../../src'

describe('useDispatch', () => {
  it('causes a re-render only when the component is mounted', async () => {
    let onDispatch: Mock, Component: () => ReactElement, result: RenderResult

    onDispatch = vi.fn()

    Component = () => {
      const dispatch = useDispatch(onDispatch)
      const number = useRef(0)

      if (number.current <= 0) {
        number.current++
        dispatch()
      }

      useEffect(() => {
        number.current++
        dispatch()

        return () => {
          number.current++
          dispatch()
        }
      }, [])

      return <div data-testid='number'>{number.current}</div>
    }

    result = render(<Component />)
    expect(screen.getByTestId('number').innerHTML).toBe('2')
    expect(onDispatch).toBeCalledTimes(1)

    result.unmount()
    expect(onDispatch).toBeCalledTimes(1)
  })
})
