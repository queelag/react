import type { BadgeElement } from '@queelag/web/elements'
import { h, Ref } from 'preact'
import { BadgeProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-badge': BadgeProps
    }
  }
}

export const Badge = forwardRef((props: BadgeProps, ref: Ref<BadgeElement>) => {
  return <q-badge {...props} ref={ref} />
})
