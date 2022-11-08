import { cleanup, render, screen } from '@testing-library/react'
import React, { createRef, Ref } from 'react'
import { afterEach, beforeAll, beforeEach, describe, expect, it, Mock, vi } from 'vitest'
import { createElementComponent, ElementComponent, ElementComponentProps } from '../../src'

declare global {
  interface HTMLElementTagNameMap {
    'test-element': TestElement
  }
}

class PartyEvent extends Event {
  constructor() {
    super('party')
  }
}

class TestElement extends HTMLElement {
  party(): void {
    this.dispatchEvent(new Event('party'))
  }
}

interface TestElementAttributes {
  partying?: boolean
}

type TestElementEvents = {
  onParty: PartyEvent
}

type TestElementProps = ElementComponentProps<TestElement, TestElementAttributes, TestElementEvents>

describe('createElementComponent', () => {
  let Component: ElementComponent<TestElement, TestElementProps>

  beforeAll(() => {
    customElements.define('test-element', TestElement)
  })

  beforeEach(() => {
    Component = createElementComponent('test-element', TestElement, ['onParty'])
  })

  afterEach(() => {
    cleanup()
  })

  it('works', () => {
    render(<Component data-testid='apple' partying />)

    expect(screen.getByTestId('apple')).toBeInstanceOf(TestElement)
    expect(screen.getByTestId('apple').getAttribute('partying')).not.toBeNull()
  })

  it('adds and removes event listeners', () => {
    let onParty: Mock = vi.fn()

    render(<Component data-testid='apple' onParty={onParty} />)

    screen.getByTestId<TestElement>('apple').party()
    expect(onParty).toBeCalledTimes(1)
  })

  it('forwards ref', () => {
    let ref: Ref<TestElement> = createRef()

    render(<Component ref={ref} />)

    expect(ref?.current).toBeInstanceOf(TestElement)
  })
})
