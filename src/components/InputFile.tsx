import { InputFileElement } from '@queelag/web'
import { h, Ref } from 'preact'
import { InputFileProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-inputfile': InputFileProps
    }
  }
}

export const InputFile = forwardRef((props: InputFileProps, ref: Ref<InputFileElement>) => {
  return <q-inputfile {...props} ref={ref} />
})
