import { render } from '@testing-library/react'
import React, { ReactElement, useEffect } from 'react'
import { describe, expect, it } from 'vitest'
import { useElementRef } from '../../src'

describe('useElementRef', () => {
  it('returns the element ref', async () => {
    let Component: () => ReactElement

    Component = () => {
      const ref = useElementRef('div')
      expect(ref.current).toBeInstanceOf(HTMLDivElement)

      useEffect(() => {
        expect(ref.current).toBeInstanceOf(HTMLDivElement)
      }, [])

      return <div ref={ref} />
    }

    render(<Component />)
  })
})
