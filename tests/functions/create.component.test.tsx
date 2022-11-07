import { render, screen } from '@testing-library/preact'
import React, { VNode } from 'preact'
import { describe, it } from 'vitest'
import { ComponentProps, createComponent } from '../../src'

declare global {
  interface HTMLElementTagNameMap {
    'test-element': TestElement
  }
}

class TestElement extends HTMLElement {}

interface TestElementAttributes {
  property?: string
}

interface TestElementEvents {
  onParty?: Event
}

type TestElementProps = ComponentProps<TestElement, TestElementAttributes, TestElementEvents>

describe('createComponent', () => {
  it('works', async () => {
    let Component: (props: TestElementProps) => VNode<TestElementProps>

    Component = createComponent('test-element')
    render(<Component data-testid='apple' />)

    await screen.findAllByTestId('apple')
  })
})
