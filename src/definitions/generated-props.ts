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
  AriaListElementAttributes,
  AriaListElementEventMap,
  AriaListItemElementAttributes,
  AriaListItemElementEventMap,
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
  CardElementAttributes,
  CardElementEventMap,
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
  ListBoxElementAttributes,
  ListBoxElementEventMap,
  ListBoxOptionElementAttributes,
  ListBoxOptionElementEventMap,
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
import type {
  AriaAccordionButtonElement,
  AriaAccordionElement,
  AriaAccordionHeaderElement,
  AriaAccordionPanelElement,
  AriaAccordionSectionElement
} from '@aracna/web-components/elements/aria/aria-accordion-element'
import type {
  AriaAlertDialogDescriptionElement,
  AriaAlertDialogElement,
  AriaAlertDialogLabelElement
} from '@aracna/web-components/elements/aria/aria-alert-dialog-element'
import type { AriaAlertElement } from '@aracna/web-components/elements/aria/aria-alert-element'
import type { AriaBreadcrumbElement, AriaBreadcrumbItemElement, AriaBreadcrumbListElement } from '@aracna/web-components/elements/aria/aria-breadcrumb-element'
import type { AriaButtonElement } from '@aracna/web-components/elements/aria/aria-button-element'
import type {
  AriaCarouselElement,
  AriaCarouselNextSlideControlElement,
  AriaCarouselPreviousSlideControlElement,
  AriaCarouselRotationControlElement,
  AriaCarouselSlideElement,
  AriaCarouselSlidesElement,
  AriaCarouselTabElement,
  AriaCarouselTabsElement
} from '@aracna/web-components/elements/aria/aria-carousel-element'
import type { AriaCheckBoxElement } from '@aracna/web-components/elements/aria/aria-check-box-element'
import type {
  AriaComboBoxButtonElement,
  AriaComboBoxElement,
  AriaComboBoxGroupElement,
  AriaComboBoxInputElement,
  AriaComboBoxListElement,
  AriaComboBoxOptionElement
} from '@aracna/web-components/elements/aria/aria-combo-box-element'
import type { AriaDialogDescriptionElement, AriaDialogElement, AriaDialogLabelElement } from '@aracna/web-components/elements/aria/aria-dialog-element'
import type {
  AriaDisclosureButtonElement,
  AriaDisclosureElement,
  AriaDisclosurePanelElement,
  AriaDisclosureSectionElement
} from '@aracna/web-components/elements/aria/aria-disclosure-element'
import type {
  AriaFeedArticleDescriptionElement,
  AriaFeedArticleElement,
  AriaFeedArticleLabelElement,
  AriaFeedElement
} from '@aracna/web-components/elements/aria/aria-feed-element'
import type { AriaLinkElement } from '@aracna/web-components/elements/aria/aria-link-element'
import type { AriaListBoxElement, AriaListBoxOptionElement } from '@aracna/web-components/elements/aria/aria-list-box-element'
import type { AriaListElement, AriaListItemElement } from '@aracna/web-components/elements/aria/aria-list-element'
import type {
  AriaMenuButtonElement,
  AriaMenuElement,
  AriaMenuItemElement,
  AriaMenuSubMenuElement
} from '@aracna/web-components/elements/aria/aria-menu-element'
import type { AriaMeterElement } from '@aracna/web-components/elements/aria/aria-meter-element'
import type { AriaRadioButtonElement, AriaRadioGroupElement } from '@aracna/web-components/elements/aria/aria-radio-group-element'
import type { AriaSliderElement, AriaSliderThumbElement } from '@aracna/web-components/elements/aria/aria-slider-element'
import type { AriaSwitchElement } from '@aracna/web-components/elements/aria/aria-switch-element'
import type { AriaTabsElement, AriaTabsPanelElement, AriaTabsTabElement } from '@aracna/web-components/elements/aria/aria-tabs-element'
import type {
  AriaTooltipArrowElement,
  AriaTooltipContentElement,
  AriaTooltipElement,
  AriaTooltipTriggerElement
} from '@aracna/web-components/elements/aria/aria-tooltip-element'
import type { AvatarElement } from '@aracna/web-components/elements/data/avatar-element'
import type { BadgeElement } from '@aracna/web-components/elements/data/badge-element'
import type {
  CarouselElement,
  CarouselNextSlideControlElement,
  CarouselPreviousSlideControlElement,
  CarouselRotationControlElement,
  CarouselSlideElement,
  CarouselSlidesElement,
  CarouselTabElement,
  CarouselTabsElement
} from '@aracna/web-components/elements/data/carousel-element'
import type { ChipElement } from '@aracna/web-components/elements/data/chip-element'
import type { FeedArticleDescriptionElement, FeedArticleElement, FeedArticleLabelElement, FeedElement } from '@aracna/web-components/elements/data/feed-element'
import type { IconElement } from '@aracna/web-components/elements/data/icon-element'
import type { ImageElement } from '@aracna/web-components/elements/data/image-element'
import type { ListElement, ListItemElement } from '@aracna/web-components/elements/data/list-element'
import type { TooltipArrowElement, TooltipContentElement, TooltipElement, TooltipTriggerElement } from '@aracna/web-components/elements/data/tooltip-element'
import type { AlertDialogDescriptionElement, AlertDialogElement, AlertDialogLabelElement } from '@aracna/web-components/elements/feedback/alert-dialog-element'
import type { AlertElement } from '@aracna/web-components/elements/feedback/alert-element'
import type { DialogDescriptionElement, DialogElement, DialogLabelElement } from '@aracna/web-components/elements/feedback/dialog-element'
import type { MeterElement } from '@aracna/web-components/elements/feedback/meter-element'
import type { ButtonElement } from '@aracna/web-components/elements/input/button-element'
import type { ButtonGroupElement } from '@aracna/web-components/elements/input/button-group-element'
import type { CheckBoxElement } from '@aracna/web-components/elements/input/check-box-element'
import type { FormElement } from '@aracna/web-components/elements/input/form-element'
import type { InputElement } from '@aracna/web-components/elements/input/input-element'
import type { InputFileElement } from '@aracna/web-components/elements/input/input-file-element'
import type { ListBoxElement, ListBoxOptionElement } from '@aracna/web-components/elements/input/list-box-element'
import type { RadioButtonElement, RadioGroupElement } from '@aracna/web-components/elements/input/radio-group-element'
import type {
  SelectButtonElement,
  SelectElement,
  SelectGroupElement,
  SelectInputElement,
  SelectListElement,
  SelectOptionElement
} from '@aracna/web-components/elements/input/select-element'
import type { SliderElement, SliderThumbElement } from '@aracna/web-components/elements/input/slider-element'
import type { SwitchElement } from '@aracna/web-components/elements/input/switch-element'
import type { TextAreaElement } from '@aracna/web-components/elements/input/text-area-element'
import type { DividerElement } from '@aracna/web-components/elements/layout/divider-element'
import type { BreadcrumbElement, BreadcrumbItemElement, BreadcrumbListElement } from '@aracna/web-components/elements/navigation/breadcrumb-element'
import type { MenuButtonElement, MenuElement, MenuItemElement, MenuSubMenuElement } from '@aracna/web-components/elements/navigation/menu-element'
import type { NavigationBarElement, NavigationBarItemElement } from '@aracna/web-components/elements/navigation/navigation-bar-element'
import type { NavigationRailElement, NavigationRailItemElement } from '@aracna/web-components/elements/navigation/navigation-rail-element'
import type { TabsElement, TabsPanelElement, TabsTabElement } from '@aracna/web-components/elements/navigation/tabs-element'
import type {
  AccordionButtonElement,
  AccordionElement,
  AccordionHeaderElement,
  AccordionPanelElement,
  AccordionSectionElement
} from '@aracna/web-components/elements/surface/accordion-element'
import type { CardElement } from '@aracna/web-components/elements/surface/card-element'
import type {
  DisclosureButtonElement,
  DisclosureElement,
  DisclosurePanelElement,
  DisclosureSectionElement
} from '@aracna/web-components/elements/surface/disclosure-element'
import type { ElementComponentProps } from './types.js'

export type AracnaMeterProps = ElementComponentProps<MeterElement, MeterElementAttributes, MeterElementEventMap>

export type AracnaDialogProps = ElementComponentProps<DialogElement, DialogElementAttributes, DialogElementEventMap>
export type AracnaDialogDescriptionProps = ElementComponentProps<DialogDescriptionElement, DialogDescriptionElementAttributes, DialogDescriptionElementEventMap>
export type AracnaDialogLabelProps = ElementComponentProps<DialogLabelElement, DialogLabelElementAttributes, DialogLabelElementEventMap>

export type AracnaAlertProps = ElementComponentProps<AlertElement, AlertElementAttributes, AlertElementEventMap>

export type AracnaAlertDialogProps = ElementComponentProps<AlertDialogElement, AlertDialogElementAttributes, AlertDialogElementEventMap>
export type AracnaAlertDialogDescriptionProps = ElementComponentProps<
  AlertDialogDescriptionElement,
  AlertDialogDescriptionElementAttributes,
  AlertDialogDescriptionElementEventMap
>
export type AracnaAlertDialogLabelProps = ElementComponentProps<AlertDialogLabelElement, AlertDialogLabelElementAttributes, AlertDialogLabelElementEventMap>

export type AracnaTooltipProps = ElementComponentProps<TooltipElement, TooltipElementAttributes, TooltipElementEventMap>
export type AracnaTooltipArrowProps = ElementComponentProps<TooltipArrowElement, TooltipArrowElementAttributes, TooltipArrowElementEventMap>
export type AracnaTooltipContentProps = ElementComponentProps<TooltipContentElement, TooltipContentElementAttributes, TooltipContentElementEventMap>
export type AracnaTooltipTriggerProps = ElementComponentProps<TooltipTriggerElement, TooltipTriggerElementAttributes, TooltipTriggerElementEventMap>

export type AracnaListProps<T = any> = ElementComponentProps<ListElement, ListElementAttributes<T>, ListElementEventMap>
export type AracnaListItemProps = ElementComponentProps<ListItemElement, ListItemElementAttributes, ListItemElementEventMap>

export type AracnaImageProps = ElementComponentProps<ImageElement, ImageElementAttributes, ImageElementEventMap>

export type AracnaIconProps = ElementComponentProps<IconElement, IconElementAttributes, IconElementEventMap>

export type AracnaFeedProps<T = any> = ElementComponentProps<FeedElement, FeedElementAttributes<T>, FeedElementEventMap>
export type AracnaFeedArticleProps = ElementComponentProps<FeedArticleElement, FeedArticleElementAttributes, FeedArticleElementEventMap>
export type AracnaFeedArticleDescriptionProps = ElementComponentProps<
  FeedArticleDescriptionElement,
  FeedArticleDescriptionElementAttributes,
  FeedArticleDescriptionElementEventMap
>
export type AracnaFeedArticleLabelProps = ElementComponentProps<FeedArticleLabelElement, FeedArticleLabelElementAttributes, FeedArticleLabelElementEventMap>

export type AracnaChipProps = ElementComponentProps<ChipElement, ChipElementAttributes, ChipElementEventMap>

export type AracnaCarouselProps<T = any> = ElementComponentProps<CarouselElement, CarouselElementAttributes<T>, CarouselElementEventMap>
export type AracnaCarouselNextSlideControlProps = ElementComponentProps<
  CarouselNextSlideControlElement,
  CarouselNextSlideControlElementAttributes,
  CarouselNextSlideControlElementEventMap
>
export type AracnaCarouselPreviousSlideControlProps = ElementComponentProps<
  CarouselPreviousSlideControlElement,
  CarouselPreviousSlideControlElementAttributes,
  CarouselPreviousSlideControlElementEventMap
>
export type AracnaCarouselRotationControlProps = ElementComponentProps<
  CarouselRotationControlElement,
  CarouselRotationControlElementAttributes,
  CarouselRotationControlElementEventMap
>
export type AracnaCarouselSlideProps = ElementComponentProps<CarouselSlideElement, CarouselSlideElementAttributes, CarouselSlideElementEventMap>
export type AracnaCarouselSlidesProps = ElementComponentProps<CarouselSlidesElement, CarouselSlidesElementAttributes, CarouselSlidesElementEventMap>
export type AracnaCarouselTabProps = ElementComponentProps<CarouselTabElement, CarouselTabElementAttributes, CarouselTabElementEventMap>
export type AracnaCarouselTabsProps = ElementComponentProps<CarouselTabsElement, CarouselTabsElementAttributes, CarouselTabsElementEventMap>

export type AracnaBadgeProps = ElementComponentProps<BadgeElement, BadgeElementAttributes, BadgeElementEventMap>

export type AracnaAvatarProps = ElementComponentProps<AvatarElement, AvatarElementAttributes, AvatarElementEventMap>

export type AracnaDividerProps = ElementComponentProps<DividerElement, DividerElementAttributes, DividerElementEventMap>

export type AracnaAriaTooltipProps = ElementComponentProps<AriaTooltipElement, AriaTooltipElementAttributes, AriaTooltipElementEventMap>
export type AracnaAriaTooltipArrowProps = ElementComponentProps<AriaTooltipArrowElement, AriaTooltipArrowElementAttributes, AriaTooltipArrowElementEventMap>
export type AracnaAriaTooltipContentProps = ElementComponentProps<
  AriaTooltipContentElement,
  AriaTooltipContentElementAttributes,
  AriaTooltipContentElementEventMap
>
export type AracnaAriaTooltipTriggerProps = ElementComponentProps<
  AriaTooltipTriggerElement,
  AriaTooltipTriggerElementAttributes,
  AriaTooltipTriggerElementEventMap
>

export type AracnaAriaTabsProps = ElementComponentProps<AriaTabsElement, AriaTabsElementAttributes, AriaTabsElementEventMap>
export type AracnaAriaTabsPanelProps = ElementComponentProps<AriaTabsPanelElement, AriaTabsPanelElementAttributes, AriaTabsPanelElementEventMap>
export type AracnaAriaTabsTabProps = ElementComponentProps<AriaTabsTabElement, AriaTabsTabElementAttributes, AriaTabsTabElementEventMap>

export type AracnaAriaSwitchProps = ElementComponentProps<AriaSwitchElement, AriaSwitchElementAttributes, AriaSwitchElementEventMap>

export type AracnaAriaSliderProps = ElementComponentProps<AriaSliderElement, AriaSliderElementAttributes, AriaSliderElementEventMap>
export type AracnaAriaSliderThumbProps = ElementComponentProps<AriaSliderThumbElement, AriaSliderThumbElementAttributes, AriaSliderThumbElementEventMap>

export type AracnaAriaRadioButtonProps = ElementComponentProps<AriaRadioButtonElement, AriaRadioButtonElementAttributes, AriaRadioButtonElementEventMap>
export type AracnaAriaRadioGroupProps = ElementComponentProps<AriaRadioGroupElement, AriaRadioGroupElementAttributes, AriaRadioGroupElementEventMap>

export type AracnaAriaMeterProps = ElementComponentProps<AriaMeterElement, AriaMeterElementAttributes, AriaMeterElementEventMap>

export type AracnaAriaMenuProps = ElementComponentProps<AriaMenuElement, AriaMenuElementAttributes<AriaMenuItemElement>, AriaMenuElementEventMap>
export type AracnaAriaMenuButtonProps = ElementComponentProps<AriaMenuButtonElement, AriaMenuButtonElementAttributes, AriaMenuButtonElementEventMap>
export type AracnaAriaMenuItemProps = ElementComponentProps<AriaMenuItemElement, AriaMenuItemElementAttributes, AriaMenuItemElementEventMap>
export type AracnaAriaMenuSubMenuProps = ElementComponentProps<AriaMenuSubMenuElement, AriaMenuSubMenuElementAttributes, AriaMenuSubMenuElementEventMap>

export type AracnaAriaListProps = ElementComponentProps<AriaListElement, AriaListElementAttributes, AriaListElementEventMap>
export type AracnaAriaListItemProps = ElementComponentProps<AriaListItemElement, AriaListItemElementAttributes, AriaListItemElementEventMap>

export type AracnaAriaListBoxProps = ElementComponentProps<
  AriaListBoxElement,
  AriaListBoxElementAttributes<AriaListBoxOptionElement>,
  AriaListBoxElementEventMap
>
export type AracnaAriaListBoxOptionProps = ElementComponentProps<AriaListBoxOptionElement, AriaListBoxOptionElementAttributes, AriaListBoxOptionElementEventMap>

export type AracnaAriaLinkProps = ElementComponentProps<AriaLinkElement, AriaLinkElementAttributes, AriaLinkElementEventMap>

export type AracnaAriaFeedProps = ElementComponentProps<AriaFeedElement, AriaFeedElementAttributes, AriaFeedElementEventMap>
export type AracnaAriaFeedArticleProps = ElementComponentProps<AriaFeedArticleElement, AriaFeedArticleElementAttributes, AriaFeedArticleElementEventMap>
export type AracnaAriaFeedArticleDescriptionProps = ElementComponentProps<
  AriaFeedArticleDescriptionElement,
  AriaFeedArticleDescriptionElementAttributes,
  AriaFeedArticleDescriptionElementEventMap
>
export type AracnaAriaFeedArticleLabelProps = ElementComponentProps<
  AriaFeedArticleLabelElement,
  AriaFeedArticleLabelElementAttributes,
  AriaFeedArticleLabelElementEventMap
>

export type AracnaAriaDisclosureProps = ElementComponentProps<AriaDisclosureElement, AriaDisclosureElementAttributes, AriaDisclosureElementEventMap>
export type AracnaAriaDisclosureButtonProps = ElementComponentProps<
  AriaDisclosureButtonElement,
  AriaDisclosureButtonElementAttributes,
  AriaDisclosureButtonElementEventMap
>
export type AracnaAriaDisclosurePanelProps = ElementComponentProps<
  AriaDisclosurePanelElement,
  AriaDisclosurePanelElementAttributes,
  AriaDisclosurePanelElementEventMap
>
export type AracnaAriaDisclosureSectionProps = ElementComponentProps<
  AriaDisclosureSectionElement,
  AriaDisclosureSectionElementAttributes,
  AriaDisclosureSectionElementEventMap
>

export type AracnaAriaDialogProps = ElementComponentProps<AriaDialogElement, AriaDialogElementAttributes, AriaDialogElementEventMap>
export type AracnaAriaDialogDescriptionProps = ElementComponentProps<
  AriaDialogDescriptionElement,
  AriaDialogDescriptionElementAttributes,
  AriaDialogDescriptionElementEventMap
>
export type AracnaAriaDialogLabelProps = ElementComponentProps<AriaDialogLabelElement, AriaDialogLabelElementAttributes, AriaDialogLabelElementEventMap>

export type AracnaAriaComboBoxProps = ElementComponentProps<
  AriaComboBoxElement,
  AriaComboBoxElementAttributes<AriaComboBoxOptionElement>,
  AriaComboBoxElementEventMap
>
export type AracnaAriaComboBoxButtonProps = ElementComponentProps<
  AriaComboBoxButtonElement,
  AriaComboBoxButtonElementAttributes,
  AriaComboBoxButtonElementEventMap
>
export type AracnaAriaComboBoxGroupProps = ElementComponentProps<AriaComboBoxGroupElement, AriaComboBoxGroupElementAttributes, AriaComboBoxGroupElementEventMap>
export type AracnaAriaComboBoxInputProps = ElementComponentProps<AriaComboBoxInputElement, AriaComboBoxInputElementAttributes, AriaComboBoxInputElementEventMap>
export type AracnaAriaComboBoxListProps = ElementComponentProps<AriaComboBoxListElement, AriaComboBoxListElementAttributes, AriaComboBoxListElementEventMap>
export type AracnaAriaComboBoxOptionProps = ElementComponentProps<
  AriaComboBoxOptionElement,
  AriaComboBoxOptionElementAttributes,
  AriaComboBoxOptionElementEventMap
>

export type AracnaAriaCheckBoxProps = ElementComponentProps<AriaCheckBoxElement, AriaCheckBoxElementAttributes, AriaCheckBoxElementEventMap>

export type AracnaAriaCarouselProps = ElementComponentProps<AriaCarouselElement, AriaCarouselElementAttributes, AriaCarouselElementEventMap>
export type AracnaAriaCarouselNextSlideControlProps = ElementComponentProps<
  AriaCarouselNextSlideControlElement,
  AriaCarouselNextSlideControlElementAttributes,
  AriaCarouselNextSlideControlElementEventMap
>
export type AracnaAriaCarouselPreviousSlideControlProps = ElementComponentProps<
  AriaCarouselPreviousSlideControlElement,
  AriaCarouselPreviousSlideControlElementAttributes,
  AriaCarouselPreviousSlideControlElementEventMap
>
export type AracnaAriaCarouselRotationControlProps = ElementComponentProps<
  AriaCarouselRotationControlElement,
  AriaCarouselRotationControlElementAttributes,
  AriaCarouselRotationControlElementEventMap
>
export type AracnaAriaCarouselSlideProps = ElementComponentProps<AriaCarouselSlideElement, AriaCarouselSlideElementAttributes, AriaCarouselSlideElementEventMap>
export type AracnaAriaCarouselSlidesProps = ElementComponentProps<
  AriaCarouselSlidesElement,
  AriaCarouselSlidesElementAttributes,
  AriaCarouselSlidesElementEventMap
>
export type AracnaAriaCarouselTabProps = ElementComponentProps<AriaCarouselTabElement, AriaCarouselTabElementAttributes, AriaCarouselTabElementEventMap>
export type AracnaAriaCarouselTabsProps = ElementComponentProps<AriaCarouselTabsElement, AriaCarouselTabsElementAttributes, AriaCarouselTabsElementEventMap>

export type AracnaAriaButtonProps = ElementComponentProps<AriaButtonElement, AriaButtonElementAttributes, AriaButtonElementEventMap>

export type AracnaAriaBreadcrumbProps = ElementComponentProps<AriaBreadcrumbElement, AriaBreadcrumbElementAttributes, AriaBreadcrumbElementEventMap>
export type AracnaAriaBreadcrumbItemProps = ElementComponentProps<
  AriaBreadcrumbItemElement,
  AriaBreadcrumbItemElementAttributes,
  AriaBreadcrumbItemElementEventMap
>
export type AracnaAriaBreadcrumbListProps = ElementComponentProps<
  AriaBreadcrumbListElement,
  AriaBreadcrumbListElementAttributes,
  AriaBreadcrumbListElementEventMap
>

export type AracnaAriaAlertProps = ElementComponentProps<AriaAlertElement, AriaAlertElementAttributes, AriaAlertElementEventMap>

export type AracnaAriaAlertDialogProps = ElementComponentProps<AriaAlertDialogElement, AriaAlertDialogElementAttributes, AriaAlertDialogElementEventMap>
export type AracnaAriaAlertDialogDescriptionProps = ElementComponentProps<
  AriaAlertDialogDescriptionElement,
  AriaAlertDialogDescriptionElementAttributes,
  AriaAlertDialogDescriptionElementEventMap
>
export type AracnaAriaAlertDialogLabelProps = ElementComponentProps<
  AriaAlertDialogLabelElement,
  AriaAlertDialogLabelElementAttributes,
  AriaAlertDialogLabelElementEventMap
>

export type AracnaAriaAccordionProps = ElementComponentProps<AriaAccordionElement, AriaAccordionElementAttributes, AriaAccordionElementEventMap>
export type AracnaAriaAccordionButtonProps = ElementComponentProps<
  AriaAccordionButtonElement,
  AriaAccordionButtonElementAttributes,
  AriaAccordionButtonElementEventMap
>
export type AracnaAriaAccordionHeaderProps = ElementComponentProps<
  AriaAccordionHeaderElement,
  AriaAccordionHeaderElementAttributes,
  AriaAccordionHeaderElementEventMap
>
export type AracnaAriaAccordionPanelProps = ElementComponentProps<
  AriaAccordionPanelElement,
  AriaAccordionPanelElementAttributes,
  AriaAccordionPanelElementEventMap
>
export type AracnaAriaAccordionSectionProps = ElementComponentProps<
  AriaAccordionSectionElement,
  AriaAccordionSectionElementAttributes,
  AriaAccordionSectionElementEventMap
>

export type AracnaTabsProps<T = any> = ElementComponentProps<TabsElement, TabsElementAttributes<T>, TabsElementEventMap>
export type AracnaTabsPanelProps = ElementComponentProps<TabsPanelElement, TabsPanelElementAttributes, TabsPanelElementEventMap>
export type AracnaTabsTabProps = ElementComponentProps<TabsTabElement, TabsTabElementAttributes, TabsTabElementEventMap>

export type AracnaNavigationRailProps<T = any> = ElementComponentProps<NavigationRailElement, NavigationRailElementAttributes<T>, NavigationRailElementEventMap>
export type AracnaNavigationRailItemProps = ElementComponentProps<
  NavigationRailItemElement,
  NavigationRailItemElementAttributes,
  NavigationRailItemElementEventMap
>

export type AracnaNavigationBarProps<T = any> = ElementComponentProps<NavigationBarElement, NavigationBarElementAttributes<T>, NavigationBarElementEventMap>
export type AracnaNavigationBarItemProps = ElementComponentProps<NavigationBarItemElement, NavigationBarItemElementAttributes, NavigationBarItemElementEventMap>

export type AracnaMenuProps<T = any> = ElementComponentProps<MenuElement, MenuElementAttributes<MenuItemElement, T>, MenuElementEventMap>
export type AracnaMenuButtonProps = ElementComponentProps<MenuButtonElement, MenuButtonElementAttributes, MenuButtonElementEventMap>
export type AracnaMenuItemProps<T = any> = ElementComponentProps<MenuItemElement, MenuItemElementAttributes<T>, MenuItemElementEventMap>
export type AracnaMenuSubMenuProps = ElementComponentProps<MenuSubMenuElement, MenuSubMenuElementAttributes, MenuSubMenuElementEventMap>

export type AracnaBreadcrumbProps<T = any> = ElementComponentProps<BreadcrumbElement, BreadcrumbElementAttributes<T>, BreadcrumbElementEventMap>
export type AracnaBreadcrumbItemProps = ElementComponentProps<BreadcrumbItemElement, BreadcrumbItemElementAttributes, BreadcrumbItemElementEventMap>
export type AracnaBreadcrumbListProps = ElementComponentProps<BreadcrumbListElement, BreadcrumbListElementAttributes, BreadcrumbListElementEventMap>

export type AracnaDisclosureProps<T = any> = ElementComponentProps<DisclosureElement, DisclosureElementAttributes<T>, DisclosureElementEventMap>
export type AracnaDisclosureButtonProps = ElementComponentProps<DisclosureButtonElement, DisclosureButtonElementAttributes, DisclosureButtonElementEventMap>
export type AracnaDisclosurePanelProps = ElementComponentProps<DisclosurePanelElement, DisclosurePanelElementAttributes, DisclosurePanelElementEventMap>
export type AracnaDisclosureSectionProps = ElementComponentProps<DisclosureSectionElement, DisclosureSectionElementAttributes, DisclosureSectionElementEventMap>

export type AracnaCardProps = ElementComponentProps<CardElement, CardElementAttributes, CardElementEventMap>

export type AracnaAccordionProps<T = any> = ElementComponentProps<AccordionElement, AccordionElementAttributes<T>, AccordionElementEventMap>
export type AracnaAccordionButtonProps = ElementComponentProps<AccordionButtonElement, AccordionButtonElementAttributes, AccordionButtonElementEventMap>
export type AracnaAccordionHeaderProps = ElementComponentProps<AccordionHeaderElement, AccordionHeaderElementAttributes, AccordionHeaderElementEventMap>
export type AracnaAccordionPanelProps = ElementComponentProps<AccordionPanelElement, AccordionPanelElementAttributes, AccordionPanelElementEventMap>
export type AracnaAccordionSectionProps = ElementComponentProps<AccordionSectionElement, AccordionSectionElementAttributes, AccordionSectionElementEventMap>

export type AracnaTextAreaProps = ElementComponentProps<TextAreaElement, TextAreaElementAttributes, TextAreaElementEventMap>

export type AracnaSwitchProps = ElementComponentProps<SwitchElement, SwitchElementAttributes, SwitchElementEventMap>

export type AracnaSliderProps<T = any> = ElementComponentProps<SliderElement, SliderElementAttributes<T>, SliderElementEventMap>
export type AracnaSliderThumbProps = ElementComponentProps<SliderThumbElement, SliderThumbElementAttributes, SliderThumbElementEventMap>

export type AracnaSelectProps<T = any> = ElementComponentProps<SelectElement, SelectElementAttributes<SelectOptionElement, T>, SelectElementEventMap>
export type AracnaSelectButtonProps = ElementComponentProps<SelectButtonElement, SelectButtonElementAttributes, SelectButtonElementEventMap>
export type AracnaSelectGroupProps = ElementComponentProps<SelectGroupElement, SelectGroupElementAttributes, SelectGroupElementEventMap>
export type AracnaSelectInputProps = ElementComponentProps<SelectInputElement, SelectInputElementAttributes, SelectInputElementEventMap>
export type AracnaSelectListProps = ElementComponentProps<SelectListElement, SelectListElementAttributes, SelectListElementEventMap>
export type AracnaSelectOptionProps = ElementComponentProps<SelectOptionElement, SelectOptionElementAttributes, SelectOptionElementEventMap>

export type AracnaRadioGroupProps<T = any> = ElementComponentProps<RadioGroupElement, RadioGroupElementAttributes<T>, RadioGroupElementEventMap>
export type AracnaRadioButtonProps = ElementComponentProps<RadioButtonElement, RadioButtonElementAttributes, RadioButtonElementEventMap>

export type AracnaListBoxProps = ElementComponentProps<ListBoxElement, ListBoxElementAttributes<ListBoxOptionElement>, ListBoxElementEventMap>
export type AracnaListBoxOptionProps = ElementComponentProps<ListBoxOptionElement, ListBoxOptionElementAttributes, ListBoxOptionElementEventMap>

export type AracnaInputFileProps = ElementComponentProps<InputFileElement, InputFileElementAttributes, InputFileElementEventMap>

export type AracnaInputProps = ElementComponentProps<InputElement, InputElementAttributes, InputElementEventMap>

export type AracnaFormProps<T = any> = ElementComponentProps<FormElement, FormElementAttributes<T>, FormElementEventMap>

export type AracnaCheckBoxProps = ElementComponentProps<CheckBoxElement, CheckBoxElementAttributes, CheckBoxElementEventMap>

export type AracnaButtonGroupProps<T = any> = ElementComponentProps<ButtonGroupElement, ButtonGroupElementAttributes<T>, ButtonGroupElementEventMap>

export type AracnaButtonProps = ElementComponentProps<ButtonElement, ButtonElementAttributes, ButtonElementEventMap>
