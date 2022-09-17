import { ChipElement } from '@queelag/web'
import { h, Ref } from 'preact'
import { ChipProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-chip': ChipProps
    }
  }
}

export const Chip = forwardRef((props: ChipProps, ref: Ref<ChipElement>) => {
  return <q-chip {...props} ref={ref} />
})
