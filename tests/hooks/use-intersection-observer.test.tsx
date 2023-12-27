import { render } from '@testing-library/react'
import React, { ReactElement, useEffect, useRef } from 'react'
import { describe, expect, it } from 'vitest'
import { useIntersectionObserver } from '../../src'

describe('useIntersectionObserver', () => {
  it('works', async () => {
    let Component: () => ReactElement

    Component = () => {
      const ref = useRef(null)
      const { entries, observer, areSomeIntersecting, isEveryIntersecting, isIntersecting } = useIntersectionObserver([ref])

      useEffect(() => {
        expect(entries).toStrictEqual([])
        expect(observer.current).toBeInstanceOf(IntersectionObserver)

        expect(areSomeIntersecting()).toBeFalsy()
        expect(areSomeIntersecting(ref.current)).toBeFalsy()
        expect(areSomeIntersecting([ref.current])).toBeFalsy()

        expect(isEveryIntersecting()).toBeTruthy()
        expect(isEveryIntersecting(ref.current)).toBeTruthy()
        expect(isEveryIntersecting([ref.current])).toBeTruthy()

        expect(isIntersecting()).toBeFalsy()
        expect(isIntersecting(ref.current)).toBeFalsy()
        expect(isIntersecting([ref.current])).toBeFalsy()
      }, [entries])

      return <div ref={ref} />
    }

    render(<Component />)
  })
})
