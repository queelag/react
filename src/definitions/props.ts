import type {
  AccordionButtonElementAttributes,
  AccordionButtonElementEventMap,
  AccordionElementAttributes,
  AccordionElementEventMap,
  AccordionHeaderElementAttributes,
  AccordionHeaderElementEventMap,
  AccordionPanelElementAttributes,
  AccordionPanelElementEventMap,
  AccordionSectionElementAttributes,
  AccordionSectionElementEventMap,
  AlertDialogDescriptionElementAttributes,
  AlertDialogDescriptionElementEventMap,
  AlertDialogElementAttributes,
  AlertDialogElementEventMap,
  AlertDialogLabelElementAttributes,
  AlertDialogLabelElementEventMap,
  AlertElementAttributes,
  AlertElementEventMap,
  AriaAccordionButtonElementAttributes,
  AriaAccordionButtonElementEventMap,
  AriaAccordionElementAttributes,
  AriaAccordionElementEventMap,
  AriaAccordionHeaderElementAttributes,
  AriaAccordionHeaderElementEventMap,
  AriaAccordionPanelElementAttributes,
  AriaAccordionPanelElementEventMap,
  AriaAccordionSectionElementAttributes,
  AriaAccordionSectionElementEventMap,
  AriaAlertDialogDescriptionElementAttributes,
  AriaAlertDialogDescriptionElementEventMap,
  AriaAlertDialogElementAttributes,
  AriaAlertDialogElementEventMap,
  AriaAlertDialogLabelElementAttributes,
  AriaAlertDialogLabelElementEventMap,
  AriaAlertElementAttributes,
  AriaAlertElementEventMap,
  AriaBreadcrumbElementAttributes,
  AriaBreadcrumbElementEventMap,
  AriaBreadcrumbItemElementAttributes,
  AriaBreadcrumbItemElementEventMap,
  AriaBreadcrumbListElementAttributes,
  AriaBreadcrumbListElementEventMap,
  AriaButtonElementAttributes,
  AriaButtonElementEventMap,
  AriaCarouselElementAttributes,
  AriaCarouselElementEventMap,
  AriaCarouselNextSlideControlElementAttributes,
  AriaCarouselNextSlideControlElementEventMap,
  AriaCarouselPreviousSlideControlElementAttributes,
  AriaCarouselPreviousSlideControlElementEventMap,
  AriaCarouselRotationControlElementAttributes,
  AriaCarouselRotationControlElementEventMap,
  AriaCarouselSlideElementAttributes,
  AriaCarouselSlideElementEventMap,
  AriaCarouselSlidesElementAttributes,
  AriaCarouselSlidesElementEventMap,
  AriaCarouselTabElementAttributes,
  AriaCarouselTabElementEventMap,
  AriaCarouselTabsElementAttributes,
  AriaCarouselTabsElementEventMap,
  AriaCheckBoxElementAttributes,
  AriaCheckBoxElementEventMap,
  AriaComboBoxButtonElementAttributes,
  AriaComboBoxButtonElementEventMap,
  AriaComboBoxElementAttributes,
  AriaComboBoxElementEventMap,
  AriaComboBoxGroupElementAttributes,
  AriaComboBoxGroupElementEventMap,
  AriaComboBoxInputElementAttributes,
  AriaComboBoxInputElementEventMap,
  AriaComboBoxListElementAttributes,
  AriaComboBoxListElementEventMap,
  AriaComboBoxOptionElementAttributes,
  AriaComboBoxOptionElementEventMap,
  AriaDialogDescriptionElementAttributes,
  AriaDialogDescriptionElementEventMap,
  AriaDialogElementAttributes,
  AriaDialogElementEventMap,
  AriaDialogLabelElementAttributes,
  AriaDialogLabelElementEventMap,
  AriaDisclosureButtonElementAttributes,
  AriaDisclosureButtonElementEventMap,
  AriaDisclosureElementAttributes,
  AriaDisclosureElementEventMap,
  AriaDisclosurePanelElementAttributes,
  AriaDisclosurePanelElementEventMap,
  AriaDisclosureSectionElementAttributes,
  AriaDisclosureSectionElementEventMap,
  AriaFeedArticleDescriptionElementAttributes,
  AriaFeedArticleDescriptionElementEventMap,
  AriaFeedArticleElementAttributes,
  AriaFeedArticleElementEventMap,
  AriaFeedArticleLabelElementAttributes,
  AriaFeedArticleLabelElementEventMap,
  AriaFeedElementAttributes,
  AriaFeedElementEventMap,
  AriaLinkElementAttributes,
  AriaLinkElementEventMap,
  AriaListBoxElementAttributes,
  AriaListBoxElementEventMap,
  AriaListBoxOptionElementAttributes,
  AriaListBoxOptionElementEventMap,
  AriaMenuButtonElementAttributes,
  AriaMenuButtonElementEventMap,
  AriaMenuElementAttributes,
  AriaMenuElementEventMap,
  AriaMenuItemElementAttributes,
  AriaMenuItemElementEventMap,
  AriaMenuSubMenuElementAttributes,
  AriaMenuSubMenuElementEventMap,
  AriaMeterElementAttributes,
  AriaMeterElementEventMap,
  AriaRadioButtonElementAttributes,
  AriaRadioButtonElementEventMap,
  AriaRadioGroupElementAttributes,
  AriaRadioGroupElementEventMap,
  AriaSliderElementAttributes,
  AriaSliderElementEventMap,
  AriaSliderThumbElementAttributes,
  AriaSliderThumbElementEventMap,
  AriaSwitchElementAttributes,
  AriaSwitchElementEventMap,
  AriaTabsElementAttributes,
  AriaTabsElementEventMap,
  AriaTabsPanelElementAttributes,
  AriaTabsPanelElementEventMap,
  AriaTabsTabElementAttributes,
  AriaTabsTabElementEventMap,
  AriaTooltipArrowElementAttributes,
  AriaTooltipArrowElementEventMap,
  AriaTooltipContentElementAttributes,
  AriaTooltipContentElementEventMap,
  AriaTooltipElementAttributes,
  AriaTooltipElementEventMap,
  AriaTooltipTriggerElementAttributes,
  AriaTooltipTriggerElementEventMap,
  AvatarElementAttributes,
  AvatarElementEventMap,
  BadgeElementAttributes,
  BadgeElementEventMap,
  BreadcrumbElementAttributes,
  BreadcrumbElementEventMap,
  BreadcrumbItemElementAttributes,
  BreadcrumbItemElementEventMap,
  BreadcrumbListElementAttributes,
  BreadcrumbListElementEventMap,
  ButtonElementAttributes,
  ButtonElementEventMap,
  ButtonGroupElementAttributes,
  ButtonGroupElementEventMap,
  CarouselElementAttributes,
  CarouselElementEventMap,
  CarouselNextSlideControlElementAttributes,
  CarouselNextSlideControlElementEventMap,
  CarouselPreviousSlideControlElementAttributes,
  CarouselPreviousSlideControlElementEventMap,
  CarouselRotationControlElementAttributes,
  CarouselRotationControlElementEventMap,
  CarouselSlideElementAttributes,
  CarouselSlideElementEventMap,
  CarouselSlidesElementAttributes,
  CarouselSlidesElementEventMap,
  CarouselTabElementAttributes,
  CarouselTabElementEventMap,
  CarouselTabsElementAttributes,
  CarouselTabsElementEventMap,
  CheckBoxElementAttributes,
  CheckBoxElementEventMap,
  ChipElementAttributes,
  ChipElementEventMap,
  DialogDescriptionElementAttributes,
  DialogDescriptionElementEventMap,
  DialogElementAttributes,
  DialogElementEventMap,
  DialogLabelElementAttributes,
  DialogLabelElementEventMap,
  DisclosureButtonElementAttributes,
  DisclosureButtonElementEventMap,
  DisclosureElementAttributes,
  DisclosureElementEventMap,
  DisclosurePanelElementAttributes,
  DisclosurePanelElementEventMap,
  DisclosureSectionElementAttributes,
  DisclosureSectionElementEventMap,
  DividerElementAttributes,
  DividerElementEventMap,
  FeedArticleDescriptionElementAttributes,
  FeedArticleDescriptionElementEventMap,
  FeedArticleElementAttributes,
  FeedArticleElementEventMap,
  FeedArticleLabelElementAttributes,
  FeedArticleLabelElementEventMap,
  FeedElementAttributes,
  FeedElementEventMap,
  FormElementAttributes,
  FormElementEventMap,
  IconElementAttributes,
  IconElementEventMap,
  ImageElementAttributes,
  ImageElementEventMap,
  InputElementAttributes,
  InputElementEventMap,
  InputFileElementAttributes,
  InputFileElementEventMap,
  ListElementAttributes,
  ListElementEventMap,
  ListItemElementAttributes,
  ListItemElementEventMap,
  MenuButtonElementAttributes,
  MenuButtonElementEventMap,
  MenuElementAttributes,
  MenuElementEventMap,
  MenuItemElementAttributes,
  MenuItemElementEventMap,
  MenuSubMenuElementAttributes,
  MenuSubMenuElementEventMap,
  MeterElementAttributes,
  MeterElementEventMap,
  NavigationBarElementAttributes,
  NavigationBarElementEventMap,
  NavigationBarItemElementAttributes,
  NavigationBarItemElementEventMap,
  NavigationRailElementAttributes,
  NavigationRailElementEventMap,
  NavigationRailItemElementAttributes,
  NavigationRailItemElementEventMap,
  RadioButtonElementAttributes,
  RadioButtonElementEventMap,
  RadioGroupElementAttributes,
  RadioGroupElementEventMap,
  SelectButtonElementAttributes,
  SelectButtonElementEventMap,
  SelectElementAttributes,
  SelectElementEventMap,
  SelectGroupElementAttributes,
  SelectGroupElementEventMap,
  SelectInputElementAttributes,
  SelectInputElementEventMap,
  SelectListElementAttributes,
  SelectListElementEventMap,
  SelectOptionElementAttributes,
  SelectOptionElementEventMap,
  SliderElementAttributes,
  SliderElementEventMap,
  SliderThumbElementAttributes,
  SliderThumbElementEventMap,
  SwitchElementAttributes,
  SwitchElementEventMap,
  TabsElementAttributes,
  TabsElementEventMap,
  TabsPanelElementAttributes,
  TabsPanelElementEventMap,
  TabsTabElementAttributes,
  TabsTabElementEventMap,
  TextAreaElementAttributes,
  TextAreaElementEventMap,
  TooltipArrowElementAttributes,
  TooltipArrowElementEventMap,
  TooltipContentElementAttributes,
  TooltipContentElementEventMap,
  TooltipElementAttributes,
  TooltipElementEventMap,
  TooltipTriggerElementAttributes,
  TooltipTriggerElementEventMap
} from '@aracna/web'
import type { AvatarElement } from '@aracna/web-components/elements/data/avatar.element.js'
import type { BadgeElement } from '@aracna/web-components/elements/data/badge.element.js'
import type {
  CarouselElement,
  CarouselNextSlideControlElement,
  CarouselPreviousSlideControlElement,
  CarouselRotationControlElement,
  CarouselSlideElement,
  CarouselSlidesElement,
  CarouselTabElement,
  CarouselTabsElement
} from '@aracna/web-components/elements/data/carousel.element.js'
import type { ChipElement } from '@aracna/web-components/elements/data/chip.element.js'
import type {
  FeedArticleDescriptionElement,
  FeedArticleElement,
  FeedArticleLabelElement,
  FeedElement
} from '@aracna/web-components/elements/data/feed.element.js'
import type { IconElement } from '@aracna/web-components/elements/data/icon.element.js'
import type { ImageElement } from '@aracna/web-components/elements/data/image.element.js'
import type { ListElement, ListItemElement } from '@aracna/web-components/elements/data/list.element.js'
import type { TooltipArrowElement, TooltipContentElement, TooltipElement, TooltipTriggerElement } from '@aracna/web-components/elements/data/tooltip.element.js'
import type {
  AlertDialogDescriptionElement,
  AlertDialogElement,
  AlertDialogLabelElement
} from '@aracna/web-components/elements/feedback/alert.dialog.element.js'
import type { AlertElement } from '@aracna/web-components/elements/feedback/alert.element.js'
import type { DialogDescriptionElement, DialogElement, DialogLabelElement } from '@aracna/web-components/elements/feedback/dialog.element.js'
import type { MeterElement } from '@aracna/web-components/elements/feedback/meter.element.js'
import type { ButtonElement } from '@aracna/web-components/elements/input/button.element.js'
import type { ButtonGroupElement } from '@aracna/web-components/elements/input/button.group.element.js'
import type { CheckBoxElement } from '@aracna/web-components/elements/input/check.box.element.js'
import type { FormElement } from '@aracna/web-components/elements/input/form.element.js'
import type { InputElement } from '@aracna/web-components/elements/input/input.element.js'
import type { InputFileElement } from '@aracna/web-components/elements/input/input.file.element.js'
import type { RadioButtonElement, RadioGroupElement } from '@aracna/web-components/elements/input/radio.group.element.js'
import type {
  SelectButtonElement,
  SelectElement,
  SelectGroupElement,
  SelectInputElement,
  SelectListElement,
  SelectOptionElement
} from '@aracna/web-components/elements/input/select.element.js'
import type { SliderElement, SliderThumbElement } from '@aracna/web-components/elements/input/slider.element.js'
import type { SwitchElement } from '@aracna/web-components/elements/input/switch.element.js'
import type { TextAreaElement } from '@aracna/web-components/elements/input/text.area.element.js'
import type { DividerElement } from '@aracna/web-components/elements/layout/divider.element.js'
import type { BreadcrumbElement, BreadcrumbItemElement, BreadcrumbListElement } from '@aracna/web-components/elements/navigation/breadcrumb.element.js'
import type { MenuButtonElement, MenuElement, MenuItemElement, MenuSubMenuElement } from '@aracna/web-components/elements/navigation/menu.element.js'
import type { NavigationBarElement, NavigationBarItemElement } from '@aracna/web-components/elements/navigation/navigation.bar.element.js'
import type { NavigationRailElement, NavigationRailItemElement } from '@aracna/web-components/elements/navigation/navigation.rail.element.js'
import type { TabsElement, TabsPanelElement, TabsTabElement } from '@aracna/web-components/elements/navigation/tabs.element.js'
import type {
  AccordionButtonElement,
  AccordionElement,
  AccordionHeaderElement,
  AccordionPanelElement,
  AccordionSectionElement
} from '@aracna/web-components/elements/surface/accordion.element.js'
import type {
  DisclosureButtonElement,
  DisclosureElement,
  DisclosurePanelElement,
  DisclosureSectionElement
} from '@aracna/web-components/elements/surface/disclosure.element.js'

import type {
  AriaAccordionButtonElement,
  AriaAccordionElement,
  AriaAccordionHeaderElement,
  AriaAccordionPanelElement,
  AriaAccordionSectionElement
} from '@aracna/web-components/elements/aria/aria.accordion.element.js'
import type {
  AriaAlertDialogDescriptionElement,
  AriaAlertDialogElement,
  AriaAlertDialogLabelElement
} from '@aracna/web-components/elements/aria/aria.alert.dialog.element.js'
import type { AriaAlertElement } from '@aracna/web-components/elements/aria/aria.alert.element.js'
import type {
  AriaBreadcrumbElement,
  AriaBreadcrumbItemElement,
  AriaBreadcrumbListElement
} from '@aracna/web-components/elements/aria/aria.breadcrumb.element.js'
import type { AriaButtonElement } from '@aracna/web-components/elements/aria/aria.button.element.js'
import type {
  AriaCarouselElement,
  AriaCarouselNextSlideControlElement,
  AriaCarouselPreviousSlideControlElement,
  AriaCarouselRotationControlElement,
  AriaCarouselSlideElement,
  AriaCarouselSlidesElement,
  AriaCarouselTabElement,
  AriaCarouselTabsElement
} from '@aracna/web-components/elements/aria/aria.carousel.element.js'
import type { AriaCheckBoxElement } from '@aracna/web-components/elements/aria/aria.check.box.element.js'
import type {
  AriaComboBoxButtonElement,
  AriaComboBoxElement,
  AriaComboBoxGroupElement,
  AriaComboBoxInputElement,
  AriaComboBoxListElement,
  AriaComboBoxOptionElement
} from '@aracna/web-components/elements/aria/aria.combo.box.element.js'
import type { AriaDialogDescriptionElement, AriaDialogElement, AriaDialogLabelElement } from '@aracna/web-components/elements/aria/aria.dialog.element.js'
import type {
  AriaDisclosureButtonElement,
  AriaDisclosureElement,
  AriaDisclosurePanelElement,
  AriaDisclosureSectionElement
} from '@aracna/web-components/elements/aria/aria.disclosure.element.js'
import type {
  AriaFeedArticleDescriptionElement,
  AriaFeedArticleElement,
  AriaFeedArticleLabelElement,
  AriaFeedElement
} from '@aracna/web-components/elements/aria/aria.feed.element.js'
import type { AriaLinkElement } from '@aracna/web-components/elements/aria/aria.link.element.js'
import type { AriaListBoxElement, AriaListBoxOptionElement } from '@aracna/web-components/elements/aria/aria.list.box.element.js'
import type {
  AriaMenuButtonElement,
  AriaMenuElement,
  AriaMenuItemElement,
  AriaMenuSubMenuElement
} from '@aracna/web-components/elements/aria/aria.menu.element.js'
import type { AriaMeterElement } from '@aracna/web-components/elements/aria/aria.meter.element.js'
import type { AriaRadioButtonElement, AriaRadioGroupElement } from '@aracna/web-components/elements/aria/aria.radio.group.element.js'
import type { AriaSliderElement, AriaSliderThumbElement } from '@aracna/web-components/elements/aria/aria.slider.element.js'
import type { AriaSwitchElement } from '@aracna/web-components/elements/aria/aria.switch.element.js'
import type { AriaTabsElement, AriaTabsPanelElement, AriaTabsTabElement } from '@aracna/web-components/elements/aria/aria.tabs.element.js'
import type {
  AriaTooltipArrowElement,
  AriaTooltipContentElement,
  AriaTooltipElement,
  AriaTooltipTriggerElement
} from '@aracna/web-components/elements/aria/aria.tooltip.element.js'
import type { ElementComponentProps } from './types.js'

/**
 * ARIA Props
 */
/** */

export type AriaAccordionProps = ElementComponentProps<AriaAccordionElement, AriaAccordionElementAttributes, AriaAccordionElementEventMap>
export type AriaAccordionButtonProps = ElementComponentProps<
  AriaAccordionButtonElement,
  AriaAccordionButtonElementAttributes,
  AriaAccordionButtonElementEventMap
>
export type AriaAccordionHeaderProps = ElementComponentProps<
  AriaAccordionHeaderElement,
  AriaAccordionHeaderElementAttributes,
  AriaAccordionHeaderElementEventMap
>
export type AriaAccordionPanelProps = ElementComponentProps<AriaAccordionPanelElement, AriaAccordionPanelElementAttributes, AriaAccordionPanelElementEventMap>
export type AriaAccordionSectionProps = ElementComponentProps<
  AriaAccordionSectionElement,
  AriaAccordionSectionElementAttributes,
  AriaAccordionSectionElementEventMap
>

export type AriaAlertProps = ElementComponentProps<AriaAlertElement, AriaAlertElementAttributes, AriaAlertElementEventMap>

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

export type AriaBreadcrumbProps = ElementComponentProps<AriaBreadcrumbElement, AriaBreadcrumbElementAttributes, AriaBreadcrumbElementEventMap>
export type AriaBreadcrumbListProps = ElementComponentProps<AriaBreadcrumbListElement, AriaBreadcrumbListElementAttributes, AriaBreadcrumbListElementEventMap>
export type AriaBreadcrumbItemProps = ElementComponentProps<AriaBreadcrumbItemElement, AriaBreadcrumbItemElementAttributes, AriaBreadcrumbItemElementEventMap>

export type AriaButtonProps = ElementComponentProps<AriaButtonElement, AriaButtonElementAttributes, AriaButtonElementEventMap>

export type AriaCarouselProps = ElementComponentProps<AriaCarouselElement, AriaCarouselElementAttributes, AriaCarouselElementEventMap>
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
export type AriaCarouselRotationControlProps = ElementComponentProps<
  AriaCarouselRotationControlElement,
  AriaCarouselRotationControlElementAttributes,
  AriaCarouselRotationControlElementEventMap
>
export type AriaCarouselSlideProps = ElementComponentProps<AriaCarouselSlideElement, AriaCarouselSlideElementAttributes, AriaCarouselSlideElementEventMap>
export type AriaCarouselSlidesProps = ElementComponentProps<AriaCarouselSlidesElement, AriaCarouselSlidesElementAttributes, AriaCarouselSlidesElementEventMap>
export type AriaCarouselTabProps = ElementComponentProps<AriaCarouselTabElement, AriaCarouselTabElementAttributes, AriaCarouselTabElementEventMap>
export type AriaCarouselTabsProps = ElementComponentProps<AriaCarouselTabsElement, AriaCarouselTabsElementAttributes, AriaCarouselTabsElementEventMap>

export type AriaCheckBoxProps = ElementComponentProps<AriaCheckBoxElement, AriaCheckBoxElementAttributes, AriaCheckBoxElementEventMap>

export type AriaComboBoxProps = ElementComponentProps<
  AriaComboBoxElement,
  AriaComboBoxElementAttributes<AriaComboBoxOptionElement>,
  AriaComboBoxElementEventMap
>
export type AriaComboBoxButtonProps = ElementComponentProps<AriaComboBoxButtonElement, AriaComboBoxButtonElementAttributes, AriaComboBoxButtonElementEventMap>
export type AriaComboBoxGroupProps = ElementComponentProps<AriaComboBoxGroupElement, AriaComboBoxGroupElementAttributes, AriaComboBoxGroupElementEventMap>
export type AriaComboBoxInputProps = ElementComponentProps<AriaComboBoxInputElement, AriaComboBoxInputElementAttributes, AriaComboBoxInputElementEventMap>
export type AriaComboBoxListProps = ElementComponentProps<AriaComboBoxListElement, AriaComboBoxListElementAttributes, AriaComboBoxListElementEventMap>
export type AriaComboBoxOptionProps = ElementComponentProps<AriaComboBoxOptionElement, AriaComboBoxOptionElementAttributes, AriaComboBoxOptionElementEventMap>

export type AriaDialogProps = ElementComponentProps<AriaDialogElement, AriaDialogElementAttributes, AriaDialogElementEventMap>
export type AriaDialogDescriptionProps = ElementComponentProps<
  AriaDialogDescriptionElement,
  AriaDialogDescriptionElementAttributes,
  AriaDialogDescriptionElementEventMap
>
export type AriaDialogLabelProps = ElementComponentProps<AriaDialogLabelElement, AriaDialogLabelElementAttributes, AriaDialogLabelElementEventMap>

export type AriaDisclosureProps = ElementComponentProps<AriaDisclosureElement, AriaDisclosureElementAttributes, AriaDisclosureElementEventMap>
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
export type AriaDisclosureSectionProps = ElementComponentProps<
  AriaDisclosureSectionElement,
  AriaDisclosureSectionElementAttributes,
  AriaDisclosureSectionElementEventMap
>

export type AriaFeedProps = ElementComponentProps<AriaFeedElement, AriaFeedElementAttributes, AriaFeedElementEventMap>
export type AriaFeedArticleProps = ElementComponentProps<AriaFeedArticleElement, AriaFeedArticleElementAttributes, AriaFeedArticleElementEventMap>
export type AriaFeedArticleDescriptionProps = ElementComponentProps<
  AriaFeedArticleDescriptionElement,
  AriaFeedArticleDescriptionElementAttributes,
  AriaFeedArticleDescriptionElementEventMap
>
export type AriaFeedArticleLabelProps = ElementComponentProps<
  AriaFeedArticleLabelElement,
  AriaFeedArticleLabelElementAttributes,
  AriaFeedArticleLabelElementEventMap
>

export type AriaLinkProps = ElementComponentProps<AriaLinkElement, AriaLinkElementAttributes, AriaLinkElementEventMap>

export type AriaListBoxProps = ElementComponentProps<AriaListBoxElement, AriaListBoxElementAttributes<AriaListBoxOptionElement>, AriaListBoxElementEventMap>
export type AriaListBoxOptionProps = ElementComponentProps<AriaListBoxOptionElement, AriaListBoxOptionElementAttributes, AriaListBoxOptionElementEventMap>

export type AriaMenuProps = ElementComponentProps<AriaMenuElement, AriaMenuElementAttributes<AriaMenuItemElement>, AriaMenuElementEventMap>
export type AriaMenuButtonProps = ElementComponentProps<AriaMenuButtonElement, AriaMenuButtonElementAttributes, AriaMenuButtonElementEventMap>
export type AriaMenuItemProps = ElementComponentProps<AriaMenuItemElement, AriaMenuItemElementAttributes, AriaMenuItemElementEventMap>
export type AriaMenuSubMenuProps = ElementComponentProps<AriaMenuSubMenuElement, AriaMenuSubMenuElementAttributes, AriaMenuSubMenuElementEventMap>

export type AriaMeterProps = ElementComponentProps<AriaMeterElement, AriaMeterElementAttributes, AriaMeterElementEventMap>

export type AriaRadioButtonProps = ElementComponentProps<AriaRadioButtonElement, AriaRadioButtonElementAttributes, AriaRadioButtonElementEventMap>
export type AriaRadioGroupProps = ElementComponentProps<AriaRadioGroupElement, AriaRadioGroupElementAttributes, AriaRadioGroupElementEventMap>

export type AriaSliderProps = ElementComponentProps<AriaSliderElement, AriaSliderElementAttributes, AriaSliderElementEventMap>
export type AriaSliderThumbProps = ElementComponentProps<AriaSliderThumbElement, AriaSliderThumbElementAttributes, AriaSliderThumbElementEventMap>

export type AriaSwitchProps = ElementComponentProps<AriaSwitchElement, AriaSwitchElementAttributes, AriaSwitchElementEventMap>

export type AriaTabsProps = ElementComponentProps<AriaTabsElement, AriaTabsElementAttributes, AriaTabsElementEventMap>
export type AriaTabsPanelProps = ElementComponentProps<AriaTabsPanelElement, AriaTabsPanelElementAttributes, AriaTabsPanelElementEventMap>
export type AriaTabsTabProps = ElementComponentProps<AriaTabsTabElement, AriaTabsTabElementAttributes, AriaTabsTabElementEventMap>

export type AriaTooltipProps = ElementComponentProps<AriaTooltipElement, AriaTooltipElementAttributes, AriaTooltipElementEventMap>
export type AriaTooltipArrowProps = ElementComponentProps<AriaTooltipArrowElement, AriaTooltipArrowElementAttributes, AriaTooltipArrowElementEventMap>
export type AriaTooltipContentProps = ElementComponentProps<AriaTooltipContentElement, AriaTooltipContentElementAttributes, AriaTooltipContentElementEventMap>
export type AriaTooltipTriggerProps = ElementComponentProps<AriaTooltipTriggerElement, AriaTooltipTriggerElementAttributes, AriaTooltipTriggerElementEventMap>

/**
 * Data Props
 */
/** */

export type AvatarProps = ElementComponentProps<AvatarElement, AvatarElementAttributes, AvatarElementEventMap>
export type BadgeProps = ElementComponentProps<BadgeElement, BadgeElementAttributes, BadgeElementEventMap>

export type CarouselProps = ElementComponentProps<CarouselElement, CarouselElementAttributes, CarouselElementEventMap>
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
export type CarouselRotationControlProps = ElementComponentProps<
  CarouselRotationControlElement,
  CarouselRotationControlElementAttributes,
  CarouselRotationControlElementEventMap
>
export type CarouselSlideProps = ElementComponentProps<CarouselSlideElement, CarouselSlideElementAttributes, CarouselSlideElementEventMap>
export type CarouselSlidesProps = ElementComponentProps<CarouselSlidesElement, CarouselSlidesElementAttributes, CarouselSlidesElementEventMap>
export type CarouselTabProps = ElementComponentProps<CarouselTabElement, CarouselTabElementAttributes, CarouselTabElementEventMap>
export type CarouselTabsProps = ElementComponentProps<CarouselTabsElement, CarouselTabsElementAttributes, CarouselTabsElementEventMap>

export type ChipProps = ElementComponentProps<ChipElement, ChipElementAttributes, ChipElementEventMap>

export type FeedProps = ElementComponentProps<FeedElement, FeedElementAttributes, FeedElementEventMap>
export type FeedArticleProps = ElementComponentProps<FeedArticleElement, FeedArticleElementAttributes, FeedArticleElementEventMap>
export type FeedArticleDescriptionProps = ElementComponentProps<
  FeedArticleDescriptionElement,
  FeedArticleDescriptionElementAttributes,
  FeedArticleDescriptionElementEventMap
>
export type FeedArticleLabelProps = ElementComponentProps<FeedArticleLabelElement, FeedArticleLabelElementAttributes, FeedArticleLabelElementEventMap>

export type IconProps = ElementComponentProps<IconElement, IconElementAttributes, IconElementEventMap>
export type ImageProps = ElementComponentProps<ImageElement, ImageElementAttributes, ImageElementEventMap>

export type ListProps = ElementComponentProps<ListElement, ListElementAttributes, ListElementEventMap>
export type ListItemProps = ElementComponentProps<ListItemElement, ListItemElementAttributes, ListItemElementEventMap>

export type TooltipProps = ElementComponentProps<TooltipElement, TooltipElementAttributes, TooltipElementEventMap>
export type TooltipArrowProps = ElementComponentProps<TooltipArrowElement, TooltipArrowElementAttributes, TooltipArrowElementEventMap>
export type TooltipContentProps = ElementComponentProps<TooltipContentElement, TooltipContentElementAttributes, TooltipContentElementEventMap>
export type TooltipTriggerProps = ElementComponentProps<TooltipTriggerElement, TooltipTriggerElementAttributes, TooltipTriggerElementEventMap>

/**
 * Feedback Props
 */
/** */

export type AlertProps = ElementComponentProps<AlertElement, AlertElementAttributes, AlertElementEventMap>

export type AlertDialogProps = ElementComponentProps<AlertDialogElement, AlertDialogElementAttributes, AlertDialogElementEventMap>
export type AlertDialogDescriptionProps = ElementComponentProps<
  AlertDialogDescriptionElement,
  AlertDialogDescriptionElementAttributes,
  AlertDialogDescriptionElementEventMap
>
export type AlertDialogLabelProps = ElementComponentProps<AlertDialogLabelElement, AlertDialogLabelElementAttributes, AlertDialogLabelElementEventMap>

export type DialogProps = ElementComponentProps<DialogElement, DialogElementAttributes, DialogElementEventMap>
export type DialogDescriptionProps = ElementComponentProps<DialogDescriptionElement, DialogDescriptionElementAttributes, DialogDescriptionElementEventMap>
export type DialogLabelProps = ElementComponentProps<DialogLabelElement, DialogLabelElementAttributes, DialogLabelElementEventMap>

export type MeterProps = ElementComponentProps<MeterElement, MeterElementAttributes, MeterElementEventMap>

/**
 * Input Props
 */
/** */

export type ButtonProps = ElementComponentProps<ButtonElement, ButtonElementAttributes, ButtonElementEventMap>
export type ButtonGroupProps = ElementComponentProps<ButtonGroupElement, ButtonGroupElementAttributes, ButtonGroupElementEventMap>
export type CheckBoxProps = ElementComponentProps<CheckBoxElement, CheckBoxElementAttributes, CheckBoxElementEventMap>
export type FormProps = ElementComponentProps<FormElement, FormElementAttributes, FormElementEventMap>
export type InputProps = ElementComponentProps<InputElement, InputElementAttributes, InputElementEventMap>
export type InputFileProps = ElementComponentProps<InputFileElement, InputFileElementAttributes, InputFileElementEventMap>

export type RadioButtonProps = ElementComponentProps<RadioButtonElement, RadioButtonElementAttributes, RadioButtonElementEventMap>
export type RadioGroupProps = ElementComponentProps<RadioGroupElement, RadioGroupElementAttributes, RadioGroupElementEventMap>

export type SelectProps = ElementComponentProps<SelectElement, SelectElementAttributes<SelectOptionElement>, SelectElementEventMap>
export type SelectButtonProps = ElementComponentProps<SelectButtonElement, SelectButtonElementAttributes, SelectButtonElementEventMap>
export type SelectGroupProps = ElementComponentProps<SelectGroupElement, SelectGroupElementAttributes, SelectGroupElementEventMap>
export type SelectInputProps = ElementComponentProps<SelectInputElement, SelectInputElementAttributes, SelectInputElementEventMap>
export type SelectListProps = ElementComponentProps<SelectListElement, SelectListElementAttributes, SelectListElementEventMap>
export type SelectOptionProps = ElementComponentProps<SelectOptionElement, SelectOptionElementAttributes, SelectOptionElementEventMap>

export type SliderProps = ElementComponentProps<SliderElement, SliderElementAttributes, SliderElementEventMap>
export type SliderThumbProps = ElementComponentProps<SliderThumbElement, SliderThumbElementAttributes, SliderThumbElementEventMap>

export type SwitchProps = ElementComponentProps<SwitchElement, SwitchElementAttributes, SwitchElementEventMap>
export type TextAreaProps = ElementComponentProps<TextAreaElement, TextAreaElementAttributes, TextAreaElementEventMap>

/**
 * Layout Props
 */

export type DividerProps = ElementComponentProps<DividerElement, DividerElementAttributes, DividerElementEventMap>

/**
 * Navigation Props
 */

export type BreadcrumbProps = ElementComponentProps<BreadcrumbElement, BreadcrumbElementAttributes, BreadcrumbElementEventMap>
export type BreadcrumbListProps = ElementComponentProps<BreadcrumbListElement, BreadcrumbListElementAttributes, BreadcrumbListElementEventMap>
export type BreadcrumbItemProps = ElementComponentProps<BreadcrumbItemElement, BreadcrumbItemElementAttributes, BreadcrumbItemElementEventMap>

export type MenuProps = ElementComponentProps<MenuElement, MenuElementAttributes<MenuItemElement>, MenuElementEventMap>
export type MenuButtonProps = ElementComponentProps<MenuButtonElement, MenuButtonElementAttributes, MenuButtonElementEventMap>
export type MenuItemProps = ElementComponentProps<MenuItemElement, MenuItemElementAttributes, MenuItemElementEventMap>
export type MenuSubMenuProps = ElementComponentProps<MenuSubMenuElement, MenuSubMenuElementAttributes, MenuSubMenuElementEventMap>

export type NavigationBarProps = ElementComponentProps<NavigationBarElement, NavigationBarElementAttributes, NavigationBarElementEventMap>
export type NavigationBarItemProps = ElementComponentProps<NavigationBarItemElement, NavigationBarItemElementAttributes, NavigationBarItemElementEventMap>

export type NavigationRailProps = ElementComponentProps<NavigationRailElement, NavigationRailElementAttributes, NavigationRailElementEventMap>
export type NavigationRailItemProps = ElementComponentProps<NavigationRailItemElement, NavigationRailItemElementAttributes, NavigationRailItemElementEventMap>

export type TabsProps = ElementComponentProps<TabsElement, TabsElementAttributes, TabsElementEventMap>
export type TabsPanelProps = ElementComponentProps<TabsPanelElement, TabsPanelElementAttributes, TabsPanelElementEventMap>
export type TabsTabProps = ElementComponentProps<TabsTabElement, TabsTabElementAttributes, TabsTabElementEventMap>

/**
 * Surface Props
 */

export type AccordionProps = ElementComponentProps<AccordionElement, AccordionElementAttributes, AccordionElementEventMap>
export type AccordionButtonProps = ElementComponentProps<AccordionButtonElement, AccordionButtonElementAttributes, AccordionButtonElementEventMap>
export type AccordionHeaderProps = ElementComponentProps<AccordionHeaderElement, AccordionHeaderElementAttributes, AccordionHeaderElementEventMap>
export type AccordionPanelProps = ElementComponentProps<AccordionPanelElement, AccordionPanelElementAttributes, AccordionPanelElementEventMap>
export type AccordionSectionProps = ElementComponentProps<AccordionSectionElement, AccordionSectionElementAttributes, AccordionSectionElementEventMap>

export type DisclosureProps = ElementComponentProps<DisclosureElement, DisclosureElementAttributes, DisclosureElementEventMap>
export type DisclosureButtonProps = ElementComponentProps<DisclosureButtonElement, DisclosureButtonElementAttributes, DisclosureButtonElementEventMap>
export type DisclosurePanelProps = ElementComponentProps<DisclosurePanelElement, DisclosurePanelElementAttributes, DisclosurePanelElementEventMap>
export type DisclosureSectionProps = ElementComponentProps<DisclosureSectionElement, DisclosureSectionElementAttributes, DisclosureSectionElementEventMap>
