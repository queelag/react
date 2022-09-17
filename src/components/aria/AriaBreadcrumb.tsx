import { AriaBreadcrumbElement, AriaBreadcrumbListElement, AriaBreadcrumbListItemElement } from '@queelag/web'
import { h, Ref } from 'preact'
import { AriaBreadcrumbListItemProps, AriaBreadcrumbListProps, AriaBreadcrumbProps } from '../../definitions/props'
import { forwardRef } from '../../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-breadcrumb': AriaBreadcrumbProps
      'q-aria-breadcrumb-list': AriaBreadcrumbListProps
      'q-aria-breadcrumb-list-item': AriaBreadcrumbListItemProps
    }
  }
}

export const AriaBreadcrumb = forwardRef((props: AriaBreadcrumbProps, ref: Ref<AriaBreadcrumbElement>) => {
  return <q-aria-breadcrumb {...props} ref={ref} />
})

export const AriaBreadcrumbList = forwardRef((props: AriaBreadcrumbListProps, ref: Ref<AriaBreadcrumbListElement>) => {
  return <q-aria-breadcrumb-list {...props} ref={ref} />
})

export const AriaBreadcrumbListItem = forwardRef((props: AriaBreadcrumbListItemProps, ref: Ref<AriaBreadcrumbListItemElement>) => {
  return <q-aria-breadcrumb-list-item {...props} ref={ref} />
})
