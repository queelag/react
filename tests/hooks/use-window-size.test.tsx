import { render } from '@testing-library/react'
import React, { Fragment, ReactElement, useEffect } from 'react'
import { describe, expect, it } from 'vitest'
import { useWindowSize } from '../../src'

describe('useWindowSize', () => {
  it('works', async () => {
    let Component: () => ReactElement

    Component = () => {
      const size = useWindowSize()

      useEffect(() => {
        expect(size).toStrictEqual({
          innerHeight: window.innerHeight,
          innerWidth: window.innerWidth,
          outerHeight: window.outerHeight,
          outerWidth: window.outerWidth
        })
      }, [size])

      return <Fragment />
    }

    render(<Component />)
  })
})
