import { ImageElement } from '@queelag/web'
import { h, Ref } from 'preact'
import { ImageProps } from '../definitions/props'
import { forwardRef } from '../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-image': ImageProps
    }
  }
}

export const Image = forwardRef((props: ImageProps, ref: Ref<ImageElement>) => {
  return <q-image {...props} ref={ref} />
})
