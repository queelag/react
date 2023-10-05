import { BaseElementAttributes, BaseElementEventMap } from '@aracna/web'
import { BaseElement } from '@aracna/web-components/elements/core/base-element.js'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import React, { ReactNode, useEffect, useState } from 'react'
import { Mock, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { ElementComponent, ElementComponentProps, createBaseElementComponent } from '../../src'

declare global {
  interface HTMLElementTagNameMap {
    'test-base-element': TestElement
  }
}

class TestElement extends BaseElement {}

type TestElementProps = ElementComponentProps<TestElement, BaseElementAttributes, BaseElementEventMap>

describe('createElementComponent', () => {
  let Component: ElementComponent<TestElement, TestElementProps>

  beforeAll(() => {
    customElements.define('test-element', TestElement)
  })

  beforeEach(() => {
    Component = createBaseElementComponent('test-base-element', TestElement, [])
  })

  afterEach(() => {
    cleanup()
  })

  it('works', () => {
    render(<Component data-testid='component' />)
    expect(screen.getByTestId('component')).toBeInstanceOf(HTMLElement)
  })

  it('has working attributes', () => {
    let element: TestElement

    render(
      <Component
        data-testid='component'
        background='black'
        height={1}
        layer={0}
        shape='circle'
        shape-rectangle-radius={1}
        shape-square-radius={1}
        shape-squircle-curvature={1}
        shape-squircle-size={1}
        size={1}
        width={1}
      />
    )

    element = screen.getByTestId('component')
    console.log(element.outerHTML)

    expect(element.getAttribute('background')).toBe('black')
    expect(element.getAttribute('height')).toBe('1')
    expect(element.getAttribute('layer')).toBe('0')
    expect(element.getAttribute('shape')).toBe('circle')
    expect(element.getAttribute('shape-rectangle-radius')).toBe('1')
    expect(element.getAttribute('shape-square-radius')).toBe('1')
    expect(element.getAttribute('shape-squircle-curvature')).toBe('1')
    expect(element.getAttribute('shape-squircle-size')).toBe('1')
    expect(element.getAttribute('size')).toBe('1')
    expect(element.getAttribute('width')).toBe('1')

    cleanup()
    render(<Component data-testid='component' height='1px' size='1px' width='1px' />)

    element = screen.getByTestId('component')

    expect(element.getAttribute('height')).toBe('1px')
    expect(element.getAttribute('size')).toBe('1px')
    expect(element.getAttribute('width')).toBe('1px')
  })

  it('has working events', async () => {
    let C: () => ReactNode, onAttributeChange: Mock, onStateChange: Mock, element: TestElement

    onAttributeChange = vi.fn()
    onStateChange = vi.fn()

    C = () => {
      const [background, setBackground] = useState('black')

      useEffect(() => {
        setTimeout(() => setBackground('white'), 100)
      })

      return <Component data-testid='component' background={background} onAttributeChange={onAttributeChange} onStateChange={onStateChange} />
    }
    render(<C />)

    element = screen.getByTestId('component')
    console.log(element.getAttribute('background'))

    await waitFor(() => {
      expect(onAttributeChange).toHaveBeenCalledTimes(1)
      expect(onStateChange).toHaveBeenCalledTimes(0)
    })
  })
})
