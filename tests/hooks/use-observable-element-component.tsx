import { defineCustomElement } from '@aracna/web'
import { BaseElement } from '@aracna/web-components/elements/core/base-element'
import { render } from '@testing-library/react'
import type { PropertyDeclarations } from 'lit'
import React, { ReactElement } from 'react'
import { describe, it } from 'vitest'
import { createElementComponent, useObservableElementComponent } from '../../src'

class TestElement extends BaseElement {
  attribute?: string
  state?: string

  static properties: PropertyDeclarations = {
    attribute: { type: String },
    state: { type: String, state: true }
  }
}

defineCustomElement('test-element', TestElement)

declare global {
  interface HTMLElementTagNameMap {
    'test-element': TestElement
  }
}

const TestElementComponent = createElementComponent('test-element', TestElement)

describe('useObservableElementComponent', () => {
  it('tracks no changes', async () => {
    let Component: () => ReactElement

    Component = () => {
      const { element, ref } = useObservableElementComponent<'test-element'>()

      console.log(element)

      return <TestElementComponent ref={ref} />
    }

    render(<Component />)
  })
})
