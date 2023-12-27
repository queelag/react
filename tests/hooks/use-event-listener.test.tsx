import { fireEvent, render, screen } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { Mock, describe, expect, it, vi } from 'vitest'
import { useEventListener } from '../../src'

describe('useEventListener', () => {
  it('adds the event listener', async () => {
    let callback: Mock, Component: () => ReactElement

    callback = vi.fn()

    Component = () => {
      const ref = React.useRef<HTMLDivElement>(null)

      useEventListener(ref, 'click', callback)

      return <div data-testid='div' ref={ref} />
    }

    render(<Component />)

    expect(callback).toHaveBeenCalledTimes(0)
    fireEvent(screen.getByTestId('div'), new MouseEvent('click'))
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
