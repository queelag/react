import { createComponent } from '@lit-labs/react'
import { cleanup, render, screen } from '@testing-library/react'
import { LitElement } from 'lit'
import React, { Ref, createRef } from 'react'
import { Mock, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { ElementComponent, ElementComponentProps } from '../../src'

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

class TestElement extends LitElement {
  partying?: boolean

  party(): void {
    this.dispatchEvent(new Event('party'))
  }

  static properties = {
    partying: {type: Boolean,  reflect: true}
  }
}

interface TestElementAttributes {
    'partying'?: boolean
  }

type TestElementEventMap = {
  party: PartyEvent
}

type TestElementProps = ElementComponentProps<TestElement, TestElementAttributes, TestElementEventMap>

describe('createElementComponent', () => {
  let Component: ElementComponent<TestElement, TestElementProps>

  beforeAll(() => {
    customElements.define('test-element', TestElement)
  })

  beforeEach(() => {
    Component = createComponent({react: React, tagName: 'test-element', elementClass: TestElement, events: {onParty: 'party'}})
  })

  afterEach(() => {
    cleanup()
  })

  it('works', async () => {
    render(<Component data-testid='apple' partying />)

    expect(screen.getByTestId('apple')).toBeInstanceOf(TestElement)
    expect(screen.getByTestId('apple').getAttribute('partying')).not.toBeNull()
  })

  it('adds and removes standard event listeners', () => {
    let onClick: Mock = vi.fn()

    render(<Component data-testid='apple' onClick={onClick} />)

    screen.getByTestId<TestElement>('apple').click()
    expect(onClick).toBeCalledTimes(1)
  })

  it('adds and removes custom event listeners', () => {
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

  it('passes className correctly', () => {
    render(<Component className='apple' data-testid='apple' />)
    expect(screen.getByTestId<TestElement>('apple').getAttribute('class')).toBe('apple')
    expect(screen.getByTestId<TestElement>('apple').className).toBe('apple')
  })
})
