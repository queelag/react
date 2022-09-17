import { IconElement } from '@queelag/web'
import { h, Ref } from 'preact'
import { IconProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-icon': IconProps
    }
  }
}

export const Icon = forwardRef((props: IconProps, ref: Ref<IconElement>) => {
  return <q-icon {...props} ref={ref} />
})
