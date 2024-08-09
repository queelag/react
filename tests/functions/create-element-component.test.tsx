import { cleanup, render, screen } from '@testing-library/react'
import { LitElement } from 'lit'
import React, { Ref, createRef } from 'react'
import { Mock, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { ElementComponent, ElementComponentProps, createElementComponent } from '../../src'

declare global {
  interface HTMLElementTagNameMap {
    'test-': TestElement
  }
}

class PartyEvent extends Event {
  constructor() {
    super('party')
  }
}

class TestElement extends LitElement {
  partying?: boolean

  party(): void {
    this.dispatchEvent(new PartyEvent())
  }

  static properties = {
    partying: { type: Boolean, reflect: true }
  }
}

interface TestElementAttributes {
  partying?: boolean
}

type TestElementEventMap = {
  party: PartyEvent
}

type TestElementProps = ElementComponentProps<TestElement, TestElementAttributes, TestElementEventMap>

describe('createElementComponent', () => {
  let Component: ElementComponent<TestElement, TestElementProps>

  beforeAll(() => {
    customElements.define('test-', TestElement)
  })

  beforeEach(() => {
    Component = createElementComponent('test-', TestElement, ['onParty'])
  })

  afterEach(() => {
    cleanup()
  })

  it.skip('works', async () => {
    render(<Component data-testid='apple' partying />)

    console.log(document.body.outerHTML)

    expect(screen.getByTestId('apple')).toBeInstanceOf(TestElement)
    expect(screen.getByTestId('apple').getAttribute('partying')).not.toBeNull()
  })

  it.skip('adds and removes standard event listeners', () => {
    let onClick: Mock = vi.fn()

    render(<Component data-testid='apple' onClick={onClick} />)

    screen.getByTestId<TestElement>('apple').click()
    expect(onClick).toBeCalledTimes(1)
  })

  it.skip('adds and removes custom event listeners', () => {
    let onParty: Mock = vi.fn()

    render(<Component data-testid='apple' onParty={onParty} />)

    screen.getByTestId<TestElement>('apple').party()
    expect(onParty).toBeCalledTimes(1)
  })

  it.skip('forwards ref', () => {
    let ref: Ref<TestElement> = createRef()

    render(<Component ref={ref} />)

    expect(ref?.current).toBeInstanceOf(TestElement)
  })

  it.skip('passes className correctly', () => {
    render(<Component className='apple' data-testid='apple' />)
    expect(screen.getByTestId<TestElement>('apple').getAttribute('class')).toBe('apple')
    expect(screen.getByTestId<TestElement>('apple').className).toBe('apple')
  })
})
