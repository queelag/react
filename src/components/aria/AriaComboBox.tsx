import type {
  AriaComboBoxButtonElement,
  AriaComboBoxElement,
  AriaComboBoxGroupElement,
  AriaComboBoxInputElement,
  AriaComboBoxListElement,
  AriaComboBoxOptionElement
} from '@queelag/web/elements'
import { h, Ref } from 'preact'
import {
  AriaComboBoxButtonProps,
  AriaComboBoxGroupProps,
  AriaComboBoxInputProps,
  AriaComboBoxListProps,
  AriaComboBoxOptionProps,
  AriaComboBoxProps
} from '../../definitions/props'
import { forwardRef } from '../../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-combobox': AriaComboBoxProps
      'q-aria-combobox-button': AriaComboBoxButtonProps
      'q-aria-combobox-group': AriaComboBoxGroupProps
      'q-aria-combobox-input': AriaComboBoxInputProps
      'q-aria-combobox-list': AriaComboBoxListProps
      'q-aria-combobox-option': AriaComboBoxOptionProps
    }
  }
}

export const AriaComboBox = forwardRef((props: AriaComboBoxProps, ref: Ref<AriaComboBoxElement>) => {
  return <q-aria-combobox {...props} ref={ref} />
})

export const AriaComboBoxButton = forwardRef((props: AriaComboBoxButtonProps, ref: Ref<AriaComboBoxButtonElement>) => {
  return <q-aria-combobox-button {...props} ref={ref} />
})

export const AriaComboBoxGroup = forwardRef((props: AriaComboBoxGroupProps, ref: Ref<AriaComboBoxGroupElement>) => {
  return <q-aria-combobox-group {...props} ref={ref} />
})

export const AriaComboBoxInput = forwardRef((props: AriaComboBoxInputProps, ref: Ref<AriaComboBoxInputElement>) => {
  return <q-aria-combobox-input {...props} ref={ref} />
})

export const AriaComboBoxList = forwardRef((props: AriaComboBoxListProps, ref: Ref<AriaComboBoxListElement>) => {
  return <q-aria-combobox-list {...props} ref={ref} />
})

export const AriaComboBoxOption = forwardRef((props: AriaComboBoxOptionProps, ref: Ref<AriaComboBoxOptionElement>) => {
  return <q-aria-combobox-option {...props} ref={ref} />
})
