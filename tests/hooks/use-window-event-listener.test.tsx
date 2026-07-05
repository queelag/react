import { fireEvent, render } from '@testing-library/react'
import { Fragment, ReactElement } from 'react'
import { describe, expect, it, Mock, vi } from 'vitest'
import { useWindowEventListener } from '../../src'

describe('useWindowEventListener', () => {
  it('adds the event listener', async () => {
    let callback: Mock, Component: () => ReactElement

    callback = vi.fn()

    Component = () => {
      useWindowEventListener('click', callback)
      return <Fragment />
    }

    render(<Component />)

    expect(callback).toHaveBeenCalledTimes(0)
    fireEvent(window, new MouseEvent('click'))
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
