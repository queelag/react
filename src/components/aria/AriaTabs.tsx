import type { AriaTabsElement, AriaTabsPanelElement, AriaTabsTabElement } from '@queelag/web/elements'
import { h, Ref } from 'preact'
import { AriaTabsPanelProps, AriaTabsProps, AriaTabsTabProps } from '../../definitions/props'
import { forwardRef } from '../../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-tabs': AriaTabsProps
      'q-aria-tabs-panel': AriaTabsPanelProps
      'q-aria-tabs-tab': AriaTabsTabProps
    }
  }
}

export const AriaTabs = forwardRef((props: AriaTabsProps, ref: Ref<AriaTabsElement>) => {
  return <q-aria-tabs {...props} ref={ref} />
})

export const AriaTabsPanel = forwardRef((props: AriaTabsPanelProps, ref: Ref<AriaTabsPanelElement>) => {
  return <q-aria-tabs-panel {...props} ref={ref} />
})

export const AriaTabsTab = forwardRef((props: AriaTabsTabProps, ref: Ref<AriaTabsTabElement>) => {
  return <q-aria-tabs-tab {...props} ref={ref} />
})
