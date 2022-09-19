import type { NavigationRailElement } from '@queelag/web/elements'
import { h, Ref } from 'preact'
import { NavigationRailProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-navigation-rail': NavigationRailProps
    }
  }
}

export const NavigationRail = forwardRef((props: NavigationRailProps, ref: Ref<NavigationRailElement>) => {
  return <q-navigation-rail {...props} ref={ref} />
})
