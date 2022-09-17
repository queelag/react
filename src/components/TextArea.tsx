import { TextAreaElement } from '@queelag/web'
import { h, Ref } from 'preact'
import { TextAreaProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-textarea': TextAreaProps
    }
  }
}

export const TextArea = forwardRef((props: TextAreaProps, ref: Ref<TextAreaElement>) => {
  return <q-textarea {...props} ref={ref} />
})
