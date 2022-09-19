import type { AriaSliderElement, AriaSliderThumbElement } from '@queelag/web/elements'
import { h, Ref } from 'preact'
import { AriaSliderProps, AriaSliderThumbProps } from '../../definitions/props'
import { forwardRef } from '../../functions/forward.ref'

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'q-aria-slider': AriaSliderProps
      'q-aria-slider-thumb': AriaSliderThumbProps
    }
  }
}

export const AriaSlider = forwardRef((props: AriaSliderProps, ref: Ref<AriaSliderElement>) => {
  return <q-aria-slider {...props} ref={ref} />
})

export const AriaSliderThumb = forwardRef((props: AriaSliderThumbProps, ref: Ref<AriaSliderThumbElement>) => {
  return <q-aria-slider-thumb {...props} ref={ref} />
})
