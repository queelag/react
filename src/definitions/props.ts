import type { ElementComponentProps } from './types.js'
import type {
  AriaTooltipElementAttributes,
  AriaTooltipElementEventMap,
  AriaTooltipArrowElementAttributes,
  AriaTooltipArrowElementEventMap,
  AriaTooltipContentElementAttributes,
  AriaTooltipContentElementEventMap,
  AriaTooltipTriggerElementAttributes,
  AriaTooltipTriggerElementEventMap
} from '@aracna/web'
import type {
  AriaTooltipElement,
  AriaTooltipArrowElement,
  AriaTooltipContentElement,
  AriaTooltipTriggerElement
} from '@aracna/web-components/elements/aria/aria-tooltip-element.js'

export type AriaTooltipProps = ElementComponentProps<AriaTooltipElement, AriaTooltipElementAttributes, AriaTooltipElementEventMap>
export type AriaTooltipArrowProps = ElementComponentProps<AriaTooltipArrowElement, AriaTooltipArrowElementAttributes, AriaTooltipArrowElementEventMap>
export type AriaTooltipContentProps = ElementComponentProps<AriaTooltipContentElement, AriaTooltipContentElementAttributes, AriaTooltipContentElementEventMap>
export type AriaTooltipTriggerProps = ElementComponentProps<AriaTooltipTriggerElement, AriaTooltipTriggerElementAttributes, AriaTooltipTriggerElementEventMap>

import type {
  AriaTabsElementAttributes,
  AriaTabsElementEventMap,
  AriaTabsTabElementAttributes,
  AriaTabsTabElementEventMap,
  AriaTabsPanelElementAttributes,
  AriaTabsPanelElementEventMap
} from '@aracna/web'
import type { AriaTabsElement, AriaTabsTabElement, AriaTabsPanelElement } from '@aracna/web-components/elements/aria/aria-tabs-element.js'

export type AriaTabsProps = ElementComponentProps<AriaTabsElement, AriaTabsElementAttributes, AriaTabsElementEventMap>
export type AriaTabsTabProps = ElementComponentProps<AriaTabsTabElement, AriaTabsTabElementAttributes, AriaTabsTabElementEventMap>
export type AriaTabsPanelProps = ElementComponentProps<AriaTabsPanelElement, AriaTabsPanelElementAttributes, AriaTabsPanelElementEventMap>

import type { AriaSwitchElementAttributes, AriaSwitchElementEventMap } from '@aracna/web'
import type { AriaSwitchElement } from '@aracna/web-components/elements/aria/aria-switch-element.js'

export type AriaSwitchProps = ElementComponentProps<AriaSwitchElement, AriaSwitchElementAttributes, AriaSwitchElementEventMap>

import type { AriaSliderElementAttributes, AriaSliderElementEventMap, AriaSliderThumbElementAttributes, AriaSliderThumbElementEventMap } from '@aracna/web'
import type { AriaSliderElement, AriaSliderThumbElement } from '@aracna/web-components/elements/aria/aria-slider-element.js'

export type AriaSliderProps = ElementComponentProps<AriaSliderElement, AriaSliderElementAttributes, AriaSliderElementEventMap>
export type AriaSliderThumbProps = ElementComponentProps<AriaSliderThumbElement, AriaSliderThumbElementAttributes, AriaSliderThumbElementEventMap>

import type {
  AriaRadioGroupElementAttributes,
  AriaRadioGroupElementEventMap,
  AriaRadioButtonElementAttributes,
  AriaRadioButtonElementEventMap
} from '@aracna/web'
import type { AriaRadioGroupElement, AriaRadioButtonElement } from '@aracna/web-components/elements/aria/aria-radio-group-element.js'

export type AriaRadioGroupProps = ElementComponentProps<AriaRadioGroupElement, AriaRadioGroupElementAttributes, AriaRadioGroupElementEventMap>
export type AriaRadioButtonProps = ElementComponentProps<AriaRadioButtonElement, AriaRadioButtonElementAttributes, AriaRadioButtonElementEventMap>

import type { AriaMeterElementAttributes, AriaMeterElementEventMap } from '@aracna/web'
import type { AriaMeterElement } from '@aracna/web-components/elements/aria/aria-meter-element.js'

export type AriaMeterProps = ElementComponentProps<AriaMeterElement, AriaMeterElementAttributes, AriaMeterElementEventMap>

import type {
  AriaMenuElementAttributes,
  AriaMenuElementEventMap,
  AriaMenuButtonElementAttributes,
  AriaMenuButtonElementEventMap,
  AriaMenuItemElementAttributes,
  AriaMenuItemElementEventMap,
  AriaMenuSubMenuElementAttributes,
  AriaMenuSubMenuElementEventMap
} from '@aracna/web'
import type {
  AriaMenuElement,
  AriaMenuButtonElement,
  AriaMenuItemElement,
  AriaMenuSubMenuElement
} from '@aracna/web-components/elements/aria/aria-menu-element.js'

export type AriaMenuProps = ElementComponentProps<AriaMenuElement, AriaMenuElementAttributes<AriaMenuItemElement>, AriaMenuElementEventMap>
export type AriaMenuButtonProps = ElementComponentProps<AriaMenuButtonElement, AriaMenuButtonElementAttributes, AriaMenuButtonElementEventMap>
export type AriaMenuItemProps = ElementComponentProps<AriaMenuItemElement, AriaMenuItemElementAttributes, AriaMenuItemElementEventMap>
export type AriaMenuSubMenuProps = ElementComponentProps<AriaMenuSubMenuElement, AriaMenuSubMenuElementAttributes, AriaMenuSubMenuElementEventMap>

import type {
  AriaListBoxElementAttributes,
  AriaListBoxElementEventMap,
  AriaListBoxOptionElementAttributes,
  AriaListBoxOptionElementEventMap
} from '@aracna/web'
import type { AriaListBoxElement, AriaListBoxOptionElement } from '@aracna/web-components/elements/aria/aria-list-box-element.js'

export type AriaListBoxProps = ElementComponentProps<AriaListBoxElement, AriaListBoxElementAttributes<AriaListBoxOptionElement>, AriaListBoxElementEventMap>
export type AriaListBoxOptionProps = ElementComponentProps<AriaListBoxOptionElement, AriaListBoxOptionElementAttributes, AriaListBoxOptionElementEventMap>

import type { AriaLinkElementAttributes, AriaLinkElementEventMap } from '@aracna/web'
import type { AriaLinkElement } from '@aracna/web-components/elements/aria/aria-link-element.js'

export type AriaLinkProps = ElementComponentProps<AriaLinkElement, AriaLinkElementAttributes, AriaLinkElementEventMap>

import type {
  AriaFeedElementAttributes,
  AriaFeedElementEventMap,
  AriaFeedArticleElementAttributes,
  AriaFeedArticleElementEventMap,
  AriaFeedArticleLabelElementAttributes,
  AriaFeedArticleLabelElementEventMap,
  AriaFeedArticleDescriptionElementAttributes,
  AriaFeedArticleDescriptionElementEventMap
} from '@aracna/web'
import type {
  AriaFeedElement,
  AriaFeedArticleElement,
  AriaFeedArticleLabelElement,
  AriaFeedArticleDescriptionElement
} from '@aracna/web-components/elements/aria/aria-feed-element.js'

export type AriaFeedProps = ElementComponentProps<AriaFeedElement, AriaFeedElementAttributes, AriaFeedElementEventMap>
export type AriaFeedArticleProps = ElementComponentProps<AriaFeedArticleElement, AriaFeedArticleElementAttributes, AriaFeedArticleElementEventMap>
export type AriaFeedArticleLabelProps = ElementComponentProps<
  AriaFeedArticleLabelElement,
  AriaFeedArticleLabelElementAttributes,
  AriaFeedArticleLabelElementEventMap
>
export type AriaFeedArticleDescriptionProps = ElementComponentProps<
  AriaFeedArticleDescriptionElement,
  AriaFeedArticleDescriptionElementAttributes,
  AriaFeedArticleDescriptionElementEventMap
>

import type {
  AriaDisclosureElementAttributes,
  AriaDisclosureElementEventMap,
  AriaDisclosureSectionElementAttributes,
  AriaDisclosureSectionElementEventMap,
  AriaDisclosureButtonElementAttributes,
  AriaDisclosureButtonElementEventMap,
  AriaDisclosurePanelElementAttributes,
  AriaDisclosurePanelElementEventMap
} from '@aracna/web'
import type {
  AriaDisclosureElement,
  AriaDisclosureSectionElement,
  AriaDisclosureButtonElement,
  AriaDisclosurePanelElement
} from '@aracna/web-components/elements/aria/aria-disclosure-element.js'

export type AriaDisclosureProps = ElementComponentProps<AriaDisclosureElement, AriaDisclosureElementAttributes, AriaDisclosureElementEventMap>
export type AriaDisclosureSectionProps = ElementComponentProps<
  AriaDisclosureSectionElement,
  AriaDisclosureSectionElementAttributes,
  AriaDisclosureSectionElementEventMap
>
export type AriaDisclosureButtonProps = ElementComponentProps<
  AriaDisclosureButtonElement,
  AriaDisclosureButtonElementAttributes,
  AriaDisclosureButtonElementEventMap
>
export type AriaDisclosurePanelProps = ElementComponentProps<
  AriaDisclosurePanelElement,
  AriaDisclosurePanelElementAttributes,
  AriaDisclosurePanelElementEventMap
>

import type {
  AriaDialogElementAttributes,
  AriaDialogElementEventMap,
  AriaDialogDescriptionElementAttributes,
  AriaDialogDescriptionElementEventMap,
  AriaDialogLabelElementAttributes,
  AriaDialogLabelElementEventMap
} from '@aracna/web'
import type { AriaDialogElement, AriaDialogDescriptionElement, AriaDialogLabelElement } from '@aracna/web-components/elements/aria/aria-dialog-element.js'

export type AriaDialogProps = ElementComponentProps<AriaDialogElement, AriaDialogElementAttributes, AriaDialogElementEventMap>
export type AriaDialogDescriptionProps = ElementComponentProps<
  AriaDialogDescriptionElement,
  AriaDialogDescriptionElementAttributes,
  AriaDialogDescriptionElementEventMap
>
export type AriaDialogLabelProps = ElementComponentProps<AriaDialogLabelElement, AriaDialogLabelElementAttributes, AriaDialogLabelElementEventMap>

import type {
  AriaComboBoxElementAttributes,
  AriaComboBoxElementEventMap,
  AriaComboBoxGroupElementAttributes,
  AriaComboBoxGroupElementEventMap,
  AriaComboBoxButtonElementAttributes,
  AriaComboBoxButtonElementEventMap,
  AriaComboBoxInputElementAttributes,
  AriaComboBoxInputElementEventMap,
  AriaComboBoxListElementAttributes,
  AriaComboBoxListElementEventMap,
  AriaComboBoxOptionElementAttributes,
  AriaComboBoxOptionElementEventMap
} from '@aracna/web'
import type {
  AriaComboBoxElement,
  AriaComboBoxGroupElement,
  AriaComboBoxButtonElement,
  AriaComboBoxInputElement,
  AriaComboBoxListElement,
  AriaComboBoxOptionElement
} from '@aracna/web-components/elements/aria/aria-combo-box-element.js'

export type AriaComboBoxProps = ElementComponentProps<
  AriaComboBoxElement,
  AriaComboBoxElementAttributes<AriaComboBoxOptionElement>,
  AriaComboBoxElementEventMap
>
export type AriaComboBoxGroupProps = ElementComponentProps<AriaComboBoxGroupElement, AriaComboBoxGroupElementAttributes, AriaComboBoxGroupElementEventMap>
export type AriaComboBoxButtonProps = ElementComponentProps<AriaComboBoxButtonElement, AriaComboBoxButtonElementAttributes, AriaComboBoxButtonElementEventMap>
export type AriaComboBoxInputProps = ElementComponentProps<AriaComboBoxInputElement, AriaComboBoxInputElementAttributes, AriaComboBoxInputElementEventMap>
export type AriaComboBoxListProps = ElementComponentProps<AriaComboBoxListElement, AriaComboBoxListElementAttributes, AriaComboBoxListElementEventMap>
export type AriaComboBoxOptionProps = ElementComponentProps<AriaComboBoxOptionElement, AriaComboBoxOptionElementAttributes, AriaComboBoxOptionElementEventMap>

import type { AriaCheckBoxElementAttributes, AriaCheckBoxElementEventMap } from '@aracna/web'
import type { AriaCheckBoxElement } from '@aracna/web-components/elements/aria/aria-check-box-element.js'

export type AriaCheckBoxProps = ElementComponentProps<AriaCheckBoxElement, AriaCheckBoxElementAttributes, AriaCheckBoxElementEventMap>

import type {
  AriaCarouselElementAttributes,
  AriaCarouselElementEventMap,
  AriaCarouselSlidesElementAttributes,
  AriaCarouselSlidesElementEventMap,
  AriaCarouselSlideElementAttributes,
  AriaCarouselSlideElementEventMap,
  AriaCarouselRotationControlElementAttributes,
  AriaCarouselRotationControlElementEventMap,
  AriaCarouselNextSlideControlElementAttributes,
  AriaCarouselNextSlideControlElementEventMap,
  AriaCarouselPreviousSlideControlElementAttributes,
  AriaCarouselPreviousSlideControlElementEventMap,
  AriaCarouselTabsElementAttributes,
  AriaCarouselTabsElementEventMap,
  AriaCarouselTabElementAttributes,
  AriaCarouselTabElementEventMap
} from '@aracna/web'
import type {
  AriaCarouselElement,
  AriaCarouselSlidesElement,
  AriaCarouselSlideElement,
  AriaCarouselRotationControlElement,
  AriaCarouselNextSlideControlElement,
  AriaCarouselPreviousSlideControlElement,
  AriaCarouselTabsElement,
  AriaCarouselTabElement
} from '@aracna/web-components/elements/aria/aria-carousel-element.js'

export type AriaCarouselProps = ElementComponentProps<AriaCarouselElement, AriaCarouselElementAttributes, AriaCarouselElementEventMap>
export type AriaCarouselSlidesProps = ElementComponentProps<AriaCarouselSlidesElement, AriaCarouselSlidesElementAttributes, AriaCarouselSlidesElementEventMap>
export type AriaCarouselSlideProps = ElementComponentProps<AriaCarouselSlideElement, AriaCarouselSlideElementAttributes, AriaCarouselSlideElementEventMap>
export type AriaCarouselRotationControlProps = ElementComponentProps<
  AriaCarouselRotationControlElement,
  AriaCarouselRotationControlElementAttributes,
  AriaCarouselRotationControlElementEventMap
>
export type AriaCarouselNextSlideControlProps = ElementComponentProps<
  AriaCarouselNextSlideControlElement,
  AriaCarouselNextSlideControlElementAttributes,
  AriaCarouselNextSlideControlElementEventMap
>
export type AriaCarouselPreviousSlideControlProps = ElementComponentProps<
  AriaCarouselPreviousSlideControlElement,
  AriaCarouselPreviousSlideControlElementAttributes,
  AriaCarouselPreviousSlideControlElementEventMap
>
export type AriaCarouselTabsProps = ElementComponentProps<AriaCarouselTabsElement, AriaCarouselTabsElementAttributes, AriaCarouselTabsElementEventMap>
export type AriaCarouselTabProps = ElementComponentProps<AriaCarouselTabElement, AriaCarouselTabElementAttributes, AriaCarouselTabElementEventMap>

import type { AriaButtonElementAttributes, AriaButtonElementEventMap } from '@aracna/web'
import type { AriaButtonElement } from '@aracna/web-components/elements/aria/aria-button-element.js'

export type AriaButtonProps = ElementComponentProps<AriaButtonElement, AriaButtonElementAttributes, AriaButtonElementEventMap>

import type {
  AriaBreadcrumbElementAttributes,
  AriaBreadcrumbElementEventMap,
  AriaBreadcrumbListElementAttributes,
  AriaBreadcrumbListElementEventMap,
  AriaBreadcrumbItemElementAttributes,
  AriaBreadcrumbItemElementEventMap
} from '@aracna/web'
import type {
  AriaBreadcrumbElement,
  AriaBreadcrumbListElement,
  AriaBreadcrumbItemElement
} from '@aracna/web-components/elements/aria/aria-breadcrumb-element.js'

export type AriaBreadcrumbProps = ElementComponentProps<AriaBreadcrumbElement, AriaBreadcrumbElementAttributes, AriaBreadcrumbElementEventMap>
export type AriaBreadcrumbListProps = ElementComponentProps<AriaBreadcrumbListElement, AriaBreadcrumbListElementAttributes, AriaBreadcrumbListElementEventMap>
export type AriaBreadcrumbItemProps = ElementComponentProps<AriaBreadcrumbItemElement, AriaBreadcrumbItemElementAttributes, AriaBreadcrumbItemElementEventMap>

import type { AriaAlertElementAttributes, AriaAlertElementEventMap } from '@aracna/web'
import type { AriaAlertElement } from '@aracna/web-components/elements/aria/aria-alert-element.js'

export type AriaAlertProps = ElementComponentProps<AriaAlertElement, AriaAlertElementAttributes, AriaAlertElementEventMap>

import type {
  AriaAlertDialogElementAttributes,
  AriaAlertDialogElementEventMap,
  AriaAlertDialogDescriptionElementAttributes,
  AriaAlertDialogDescriptionElementEventMap,
  AriaAlertDialogLabelElementAttributes,
  AriaAlertDialogLabelElementEventMap
} from '@aracna/web'
import type {
  AriaAlertDialogElement,
  AriaAlertDialogDescriptionElement,
  AriaAlertDialogLabelElement
} from '@aracna/web-components/elements/aria/aria-alert-dialog-element.js'

export type AriaAlertDialogProps = ElementComponentProps<AriaAlertDialogElement, AriaAlertDialogElementAttributes, AriaAlertDialogElementEventMap>
export type AriaAlertDialogDescriptionProps = ElementComponentProps<
  AriaAlertDialogDescriptionElement,
  AriaAlertDialogDescriptionElementAttributes,
  AriaAlertDialogDescriptionElementEventMap
>
export type AriaAlertDialogLabelProps = ElementComponentProps<
  AriaAlertDialogLabelElement,
  AriaAlertDialogLabelElementAttributes,
  AriaAlertDialogLabelElementEventMap
>

import type {
  AriaAccordionElementAttributes,
  AriaAccordionElementEventMap,
  AriaAccordionSectionElementAttributes,
  AriaAccordionSectionElementEventMap,
  AriaAccordionHeaderElementAttributes,
  AriaAccordionHeaderElementEventMap,
  AriaAccordionButtonElementAttributes,
  AriaAccordionButtonElementEventMap,
  AriaAccordionPanelElementAttributes,
  AriaAccordionPanelElementEventMap
} from '@aracna/web'
import type {
  AriaAccordionElement,
  AriaAccordionSectionElement,
  AriaAccordionHeaderElement,
  AriaAccordionButtonElement,
  AriaAccordionPanelElement
} from '@aracna/web-components/elements/aria/aria-accordion-element.js'

export type AriaAccordionProps = ElementComponentProps<AriaAccordionElement, AriaAccordionElementAttributes, AriaAccordionElementEventMap>
export type AriaAccordionSectionProps = ElementComponentProps<
  AriaAccordionSectionElement,
  AriaAccordionSectionElementAttributes,
  AriaAccordionSectionElementEventMap
>
export type AriaAccordionHeaderProps = ElementComponentProps<
  AriaAccordionHeaderElement,
  AriaAccordionHeaderElementAttributes,
  AriaAccordionHeaderElementEventMap
>
export type AriaAccordionButtonProps = ElementComponentProps<
  AriaAccordionButtonElement,
  AriaAccordionButtonElementAttributes,
  AriaAccordionButtonElementEventMap
>
export type AriaAccordionPanelProps = ElementComponentProps<AriaAccordionPanelElement, AriaAccordionPanelElementAttributes, AriaAccordionPanelElementEventMap>

import type {
  TooltipElementAttributes,
  TooltipElementEventMap,
  TooltipArrowElementAttributes,
  TooltipArrowElementEventMap,
  TooltipContentElementAttributes,
  TooltipContentElementEventMap,
  TooltipTriggerElementAttributes,
  TooltipTriggerElementEventMap
} from '@aracna/web'
import type { TooltipElement, TooltipArrowElement, TooltipContentElement, TooltipTriggerElement } from '@aracna/web-components/elements/data/tooltip-element.js'

export type TooltipProps = ElementComponentProps<TooltipElement, TooltipElementAttributes, TooltipElementEventMap>
export type TooltipArrowProps = ElementComponentProps<TooltipArrowElement, TooltipArrowElementAttributes, TooltipArrowElementEventMap>
export type TooltipContentProps = ElementComponentProps<TooltipContentElement, TooltipContentElementAttributes, TooltipContentElementEventMap>
export type TooltipTriggerProps = ElementComponentProps<TooltipTriggerElement, TooltipTriggerElementAttributes, TooltipTriggerElementEventMap>

import type { ListElementAttributes, ListElementEventMap, ListItemElementAttributes, ListItemElementEventMap } from '@aracna/web'
import type { ListElement, ListItemElement } from '@aracna/web-components/elements/data/list-element.js'

export type ListProps = ElementComponentProps<ListElement, ListElementAttributes, ListElementEventMap>
export type ListItemProps = ElementComponentProps<ListItemElement, ListItemElementAttributes, ListItemElementEventMap>

import type { ImageElementAttributes, ImageElementEventMap } from '@aracna/web'
import type { ImageElement } from '@aracna/web-components/elements/data/image-element.js'

export type ImageProps = ElementComponentProps<ImageElement, ImageElementAttributes, ImageElementEventMap>

import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import type { IconElement } from '@aracna/web-components/elements/data/icon-element.js'

export type IconProps = ElementComponentProps<IconElement, IconElementAttributes, IconElementEventMap>

import type {
  FeedElementAttributes,
  FeedElementEventMap,
  FeedArticleElementAttributes,
  FeedArticleElementEventMap,
  FeedArticleLabelElementAttributes,
  FeedArticleLabelElementEventMap,
  FeedArticleDescriptionElementAttributes,
  FeedArticleDescriptionElementEventMap
} from '@aracna/web'
import type {
  FeedElement,
  FeedArticleElement,
  FeedArticleLabelElement,
  FeedArticleDescriptionElement
} from '@aracna/web-components/elements/data/feed-element.js'

export type FeedProps = ElementComponentProps<FeedElement, FeedElementAttributes, FeedElementEventMap>
export type FeedArticleProps = ElementComponentProps<FeedArticleElement, FeedArticleElementAttributes, FeedArticleElementEventMap>
export type FeedArticleLabelProps = ElementComponentProps<FeedArticleLabelElement, FeedArticleLabelElementAttributes, FeedArticleLabelElementEventMap>
export type FeedArticleDescriptionProps = ElementComponentProps<
  FeedArticleDescriptionElement,
  FeedArticleDescriptionElementAttributes,
  FeedArticleDescriptionElementEventMap
>

import type { ChipElementAttributes, ChipElementEventMap } from '@aracna/web'
import type { ChipElement } from '@aracna/web-components/elements/data/chip-element.js'

export type ChipProps = ElementComponentProps<ChipElement, ChipElementAttributes, ChipElementEventMap>

import type {
  CarouselElementAttributes,
  CarouselElementEventMap,
  CarouselSlidesElementAttributes,
  CarouselSlidesElementEventMap,
  CarouselSlideElementAttributes,
  CarouselSlideElementEventMap,
  CarouselRotationControlElementAttributes,
  CarouselRotationControlElementEventMap,
  CarouselNextSlideControlElementAttributes,
  CarouselNextSlideControlElementEventMap,
  CarouselPreviousSlideControlElementAttributes,
  CarouselPreviousSlideControlElementEventMap,
  CarouselTabsElementAttributes,
  CarouselTabsElementEventMap,
  CarouselTabElementAttributes,
  CarouselTabElementEventMap
} from '@aracna/web'
import type {
  CarouselElement,
  CarouselSlidesElement,
  CarouselSlideElement,
  CarouselRotationControlElement,
  CarouselNextSlideControlElement,
  CarouselPreviousSlideControlElement,
  CarouselTabsElement,
  CarouselTabElement
} from '@aracna/web-components/elements/data/carousel-element.js'

export type CarouselProps = ElementComponentProps<CarouselElement, CarouselElementAttributes, CarouselElementEventMap>
export type CarouselSlidesProps = ElementComponentProps<CarouselSlidesElement, CarouselSlidesElementAttributes, CarouselSlidesElementEventMap>
export type CarouselSlideProps = ElementComponentProps<CarouselSlideElement, CarouselSlideElementAttributes, CarouselSlideElementEventMap>
export type CarouselRotationControlProps = ElementComponentProps<
  CarouselRotationControlElement,
  CarouselRotationControlElementAttributes,
  CarouselRotationControlElementEventMap
>
export type CarouselNextSlideControlProps = ElementComponentProps<
  CarouselNextSlideControlElement,
  CarouselNextSlideControlElementAttributes,
  CarouselNextSlideControlElementEventMap
>
export type CarouselPreviousSlideControlProps = ElementComponentProps<
  CarouselPreviousSlideControlElement,
  CarouselPreviousSlideControlElementAttributes,
  CarouselPreviousSlideControlElementEventMap
>
export type CarouselTabsProps = ElementComponentProps<CarouselTabsElement, CarouselTabsElementAttributes, CarouselTabsElementEventMap>
export type CarouselTabProps = ElementComponentProps<CarouselTabElement, CarouselTabElementAttributes, CarouselTabElementEventMap>

import type { BadgeElementAttributes, BadgeElementEventMap } from '@aracna/web'
import type { BadgeElement } from '@aracna/web-components/elements/data/badge-element.js'

export type BadgeProps = ElementComponentProps<BadgeElement, BadgeElementAttributes, BadgeElementEventMap>

import type { AvatarElementAttributes, AvatarElementEventMap } from '@aracna/web'
import type { AvatarElement } from '@aracna/web-components/elements/data/avatar-element.js'

export type AvatarProps = ElementComponentProps<AvatarElement, AvatarElementAttributes, AvatarElementEventMap>

import type { MeterElementAttributes, MeterElementEventMap } from '@aracna/web'
import type { MeterElement } from '@aracna/web-components/elements/feedback/meter-element.js'

export type MeterProps = ElementComponentProps<MeterElement, MeterElementAttributes, MeterElementEventMap>

import type {
  DialogElementAttributes,
  DialogElementEventMap,
  DialogLabelElementAttributes,
  DialogLabelElementEventMap,
  DialogDescriptionElementAttributes,
  DialogDescriptionElementEventMap
} from '@aracna/web'
import type { DialogElement, DialogLabelElement, DialogDescriptionElement } from '@aracna/web-components/elements/feedback/dialog-element.js'

export type DialogProps = ElementComponentProps<DialogElement, DialogElementAttributes, DialogElementEventMap>
export type DialogLabelProps = ElementComponentProps<DialogLabelElement, DialogLabelElementAttributes, DialogLabelElementEventMap>
export type DialogDescriptionProps = ElementComponentProps<DialogDescriptionElement, DialogDescriptionElementAttributes, DialogDescriptionElementEventMap>

import type { AlertElementAttributes, AlertElementEventMap } from '@aracna/web'
import type { AlertElement } from '@aracna/web-components/elements/feedback/alert-element.js'

export type AlertProps = ElementComponentProps<AlertElement, AlertElementAttributes, AlertElementEventMap>

import type {
  AlertDialogElementAttributes,
  AlertDialogElementEventMap,
  AlertDialogLabelElementAttributes,
  AlertDialogLabelElementEventMap,
  AlertDialogDescriptionElementAttributes,
  AlertDialogDescriptionElementEventMap
} from '@aracna/web'
import type {
  AlertDialogElement,
  AlertDialogLabelElement,
  AlertDialogDescriptionElement
} from '@aracna/web-components/elements/feedback/alert-dialog-element.js'

export type AlertDialogProps = ElementComponentProps<AlertDialogElement, AlertDialogElementAttributes, AlertDialogElementEventMap>
export type AlertDialogLabelProps = ElementComponentProps<AlertDialogLabelElement, AlertDialogLabelElementAttributes, AlertDialogLabelElementEventMap>
export type AlertDialogDescriptionProps = ElementComponentProps<
  AlertDialogDescriptionElement,
  AlertDialogDescriptionElementAttributes,
  AlertDialogDescriptionElementEventMap
>

import type { TextAreaElementAttributes, TextAreaElementEventMap } from '@aracna/web'
import type { TextAreaElement } from '@aracna/web-components/elements/input/text-area-element.js'

export type TextAreaProps = ElementComponentProps<TextAreaElement, TextAreaElementAttributes, TextAreaElementEventMap>

import type { SwitchElementAttributes, SwitchElementEventMap } from '@aracna/web'
import type { SwitchElement } from '@aracna/web-components/elements/input/switch-element.js'

export type SwitchProps = ElementComponentProps<SwitchElement, SwitchElementAttributes, SwitchElementEventMap>

import type { SliderElementAttributes, SliderElementEventMap, SliderThumbElementAttributes, SliderThumbElementEventMap } from '@aracna/web'
import type { SliderElement, SliderThumbElement } from '@aracna/web-components/elements/input/slider-element.js'

export type SliderProps = ElementComponentProps<SliderElement, SliderElementAttributes, SliderElementEventMap>
export type SliderThumbProps = ElementComponentProps<SliderThumbElement, SliderThumbElementAttributes, SliderThumbElementEventMap>

import type {
  SelectElementAttributes,
  SelectElementEventMap,
  SelectGroupElementAttributes,
  SelectGroupElementEventMap,
  SelectButtonElementAttributes,
  SelectButtonElementEventMap,
  SelectInputElementAttributes,
  SelectInputElementEventMap,
  SelectListElementAttributes,
  SelectListElementEventMap,
  SelectOptionElementAttributes,
  SelectOptionElementEventMap
} from '@aracna/web'
import type {
  SelectElement,
  SelectGroupElement,
  SelectButtonElement,
  SelectInputElement,
  SelectListElement,
  SelectOptionElement
} from '@aracna/web-components/elements/input/select-element.js'

export type SelectProps = ElementComponentProps<SelectElement, SelectElementAttributes<SelectOptionElement>, SelectElementEventMap>
export type SelectGroupProps = ElementComponentProps<SelectGroupElement, SelectGroupElementAttributes, SelectGroupElementEventMap>
export type SelectButtonProps = ElementComponentProps<SelectButtonElement, SelectButtonElementAttributes, SelectButtonElementEventMap>
export type SelectInputProps = ElementComponentProps<SelectInputElement, SelectInputElementAttributes, SelectInputElementEventMap>
export type SelectListProps = ElementComponentProps<SelectListElement, SelectListElementAttributes, SelectListElementEventMap>
export type SelectOptionProps = ElementComponentProps<SelectOptionElement, SelectOptionElementAttributes, SelectOptionElementEventMap>

import type { RadioGroupElementAttributes, RadioGroupElementEventMap, RadioButtonElementAttributes, RadioButtonElementEventMap } from '@aracna/web'
import type { RadioGroupElement, RadioButtonElement } from '@aracna/web-components/elements/input/radio-group-element.js'

export type RadioGroupProps = ElementComponentProps<RadioGroupElement, RadioGroupElementAttributes, RadioGroupElementEventMap>
export type RadioButtonProps = ElementComponentProps<RadioButtonElement, RadioButtonElementAttributes, RadioButtonElementEventMap>

import type { InputFileElementAttributes, InputFileElementEventMap } from '@aracna/web'
import type { InputFileElement } from '@aracna/web-components/elements/input/input-file-element.js'

export type InputFileProps = ElementComponentProps<InputFileElement, InputFileElementAttributes, InputFileElementEventMap>

import type { InputElementAttributes, InputElementEventMap } from '@aracna/web'
import type { InputElement } from '@aracna/web-components/elements/input/input-element.js'

export type InputProps = ElementComponentProps<InputElement, InputElementAttributes, InputElementEventMap>

import type { FormElementAttributes, FormElementEventMap } from '@aracna/web'
import type { FormElement } from '@aracna/web-components/elements/input/form-element.js'

export type FormProps = ElementComponentProps<FormElement, FormElementAttributes, FormElementEventMap>

import type { CheckBoxElementAttributes, CheckBoxElementEventMap } from '@aracna/web'
import type { CheckBoxElement } from '@aracna/web-components/elements/input/check-box-element.js'

export type CheckBoxProps = ElementComponentProps<CheckBoxElement, CheckBoxElementAttributes, CheckBoxElementEventMap>

import type { ButtonGroupElementAttributes, ButtonGroupElementEventMap } from '@aracna/web'
import type { ButtonGroupElement } from '@aracna/web-components/elements/input/button-group-element.js'

export type ButtonGroupProps = ElementComponentProps<ButtonGroupElement, ButtonGroupElementAttributes, ButtonGroupElementEventMap>

import type { ButtonElementAttributes, ButtonElementEventMap } from '@aracna/web'
import type { ButtonElement } from '@aracna/web-components/elements/input/button-element.js'

export type ButtonProps = ElementComponentProps<ButtonElement, ButtonElementAttributes, ButtonElementEventMap>

import type { DividerElementAttributes, DividerElementEventMap } from '@aracna/web'
import type { DividerElement } from '@aracna/web-components/elements/layout/divider-element.js'

export type DividerProps = ElementComponentProps<DividerElement, DividerElementAttributes, DividerElementEventMap>

import type {
  TabsElementAttributes,
  TabsElementEventMap,
  TabsTabElementAttributes,
  TabsTabElementEventMap,
  TabsPanelElementAttributes,
  TabsPanelElementEventMap
} from '@aracna/web'
import type { TabsElement, TabsTabElement, TabsPanelElement } from '@aracna/web-components/elements/navigation/tabs-element.js'

export type TabsProps = ElementComponentProps<TabsElement, TabsElementAttributes, TabsElementEventMap>
export type TabsTabProps = ElementComponentProps<TabsTabElement, TabsTabElementAttributes, TabsTabElementEventMap>
export type TabsPanelProps = ElementComponentProps<TabsPanelElement, TabsPanelElementAttributes, TabsPanelElementEventMap>

import type {
  NavigationRailElementAttributes,
  NavigationRailElementEventMap,
  NavigationRailItemElementAttributes,
  NavigationRailItemElementEventMap
} from '@aracna/web'
import type { NavigationRailElement, NavigationRailItemElement } from '@aracna/web-components/elements/navigation/navigation-rail-element.js'

export type NavigationRailProps = ElementComponentProps<NavigationRailElement, NavigationRailElementAttributes, NavigationRailElementEventMap>
export type NavigationRailItemProps = ElementComponentProps<NavigationRailItemElement, NavigationRailItemElementAttributes, NavigationRailItemElementEventMap>

import type {
  NavigationBarElementAttributes,
  NavigationBarElementEventMap,
  NavigationBarItemElementAttributes,
  NavigationBarItemElementEventMap
} from '@aracna/web'
import type { NavigationBarElement, NavigationBarItemElement } from '@aracna/web-components/elements/navigation/navigation-bar-element.js'

export type NavigationBarProps = ElementComponentProps<NavigationBarElement, NavigationBarElementAttributes, NavigationBarElementEventMap>
export type NavigationBarItemProps = ElementComponentProps<NavigationBarItemElement, NavigationBarItemElementAttributes, NavigationBarItemElementEventMap>

import type {
  MenuElementAttributes,
  MenuElementEventMap,
  MenuButtonElementAttributes,
  MenuButtonElementEventMap,
  MenuItemElementAttributes,
  MenuItemElementEventMap,
  MenuSubMenuElementAttributes,
  MenuSubMenuElementEventMap
} from '@aracna/web'
import type { MenuElement, MenuButtonElement, MenuItemElement, MenuSubMenuElement } from '@aracna/web-components/elements/navigation/menu-element.js'

export type MenuProps = ElementComponentProps<MenuElement, MenuElementAttributes<MenuItemElement>, MenuElementEventMap>
export type MenuButtonProps = ElementComponentProps<MenuButtonElement, MenuButtonElementAttributes, MenuButtonElementEventMap>
export type MenuItemProps = ElementComponentProps<MenuItemElement, MenuItemElementAttributes, MenuItemElementEventMap>
export type MenuSubMenuProps = ElementComponentProps<MenuSubMenuElement, MenuSubMenuElementAttributes, MenuSubMenuElementEventMap>

import type {
  BreadcrumbElementAttributes,
  BreadcrumbElementEventMap,
  BreadcrumbListElementAttributes,
  BreadcrumbListElementEventMap,
  BreadcrumbItemElementAttributes,
  BreadcrumbItemElementEventMap
} from '@aracna/web'
import type { BreadcrumbElement, BreadcrumbListElement, BreadcrumbItemElement } from '@aracna/web-components/elements/navigation/breadcrumb-element.js'

export type BreadcrumbProps = ElementComponentProps<BreadcrumbElement, BreadcrumbElementAttributes, BreadcrumbElementEventMap>
export type BreadcrumbListProps = ElementComponentProps<BreadcrumbListElement, BreadcrumbListElementAttributes, BreadcrumbListElementEventMap>
export type BreadcrumbItemProps = ElementComponentProps<BreadcrumbItemElement, BreadcrumbItemElementAttributes, BreadcrumbItemElementEventMap>

import type {
  DisclosureElementAttributes,
  DisclosureElementEventMap,
  DisclosureSectionElementAttributes,
  DisclosureSectionElementEventMap,
  DisclosureButtonElementAttributes,
  DisclosureButtonElementEventMap,
  DisclosurePanelElementAttributes,
  DisclosurePanelElementEventMap
} from '@aracna/web'
import type {
  DisclosureElement,
  DisclosureSectionElement,
  DisclosureButtonElement,
  DisclosurePanelElement
} from '@aracna/web-components/elements/surface/disclosure-element.js'

export type DisclosureProps = ElementComponentProps<DisclosureElement, DisclosureElementAttributes, DisclosureElementEventMap>
export type DisclosureSectionProps = ElementComponentProps<DisclosureSectionElement, DisclosureSectionElementAttributes, DisclosureSectionElementEventMap>
export type DisclosureButtonProps = ElementComponentProps<DisclosureButtonElement, DisclosureButtonElementAttributes, DisclosureButtonElementEventMap>
export type DisclosurePanelProps = ElementComponentProps<DisclosurePanelElement, DisclosurePanelElementAttributes, DisclosurePanelElementEventMap>

import type {
  AccordionElementAttributes,
  AccordionElementEventMap,
  AccordionSectionElementAttributes,
  AccordionSectionElementEventMap,
  AccordionHeaderElementAttributes,
  AccordionHeaderElementEventMap,
  AccordionButtonElementAttributes,
  AccordionButtonElementEventMap,
  AccordionPanelElementAttributes,
  AccordionPanelElementEventMap
} from '@aracna/web'
import type {
  AccordionElement,
  AccordionSectionElement,
  AccordionHeaderElement,
  AccordionButtonElement,
  AccordionPanelElement
} from '@aracna/web-components/elements/surface/accordion-element.js'

export type AccordionProps = ElementComponentProps<AccordionElement, AccordionElementAttributes, AccordionElementEventMap>
export type AccordionSectionProps = ElementComponentProps<AccordionSectionElement, AccordionSectionElementAttributes, AccordionSectionElementEventMap>
export type AccordionHeaderProps = ElementComponentProps<AccordionHeaderElement, AccordionHeaderElementAttributes, AccordionHeaderElementEventMap>
export type AccordionButtonProps = ElementComponentProps<AccordionButtonElement, AccordionButtonElementAttributes, AccordionButtonElementEventMap>
export type AccordionPanelProps = ElementComponentProps<AccordionPanelElement, AccordionPanelElementAttributes, AccordionPanelElementEventMap>
