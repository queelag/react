import type { ListElement, ListItemElement } from '@queelag/web/elements'
import { h, Ref } from 'preact'
import { ListItemProps, ListProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-list': ListProps
      'q-list-item': ListItemProps
    }
  }
}

export const List = forwardRef((props: ListProps, ref: Ref<ListElement>) => {
  return <q-list {...props} ref={ref} />
})

export const ListItem = forwardRef((props: ListItemProps, ref: Ref<ListItemElement>) => {
  return <q-list-item {...props} ref={ref} />
})
