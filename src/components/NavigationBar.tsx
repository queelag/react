import type { NavigationBarElement } from '@queelag/web/elements'
import { h, Ref } from 'preact'
import { NavigationBarProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-navigation-bar': NavigationBarProps
    }
  }
}

export const NavigationBar = forwardRef((props: NavigationBarProps, ref: Ref<NavigationBarElement>) => {
  return <q-navigation-bar {...props} ref={ref} />
})
