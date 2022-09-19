import type { AvatarElement } from '@queelag/web/elements'
import { h, Ref } from 'preact'
import { AvatarProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-avatar': AvatarProps
    }
  }
}

export const Avatar = forwardRef((props: AvatarProps, ref: Ref<AvatarElement>) => {
  return <q-avatar {...props} ref={ref} />
})
