import { render } from '@testing-library/react'
import React, { ReactElement, useEffect, useRef } from 'react'
import { describe, expect, it } from 'vitest'
import { useDOMRect } from '../../src'

describe('useDOMRect', () => {
  it('returns the dom rect of an element', async () => {
    let Component: () => ReactElement

    Component = () => {
      const ref = useRef(null)
      const rect = useDOMRect(ref.current)

      useEffect(() => {
        expect(rect.toJSON()).toStrictEqual({
          bottom: 0,
          height: 0,
          left: 0,
          right: 0,
          top: 0,
          width: 0,
          x: 0,
          y: 0
        })
      }, [rect])

      return <div data-rect={JSON.stringify(rect)} ref={ref} />
    }

    render(<Component />)
  })
})
