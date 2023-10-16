import type { ElementComponentProps } from './types.js'
import type { TextAreaElementAttributes, TextAreaElementEventMap } from '@aracna/web'
import type { TextAreaElement } from '@aracna/web-components/elements/input/text-area-element'

export type AracnaTextAreaProps = ElementComponentProps<TextAreaElement, TextAreaElementAttributes, TextAreaElementEventMap>

import type { SwitchElementAttributes, SwitchElementEventMap } from '@aracna/web'
import type { SwitchElement } from '@aracna/web-components/elements/input/switch-element'

export type AracnaSwitchProps = ElementComponentProps<SwitchElement, SwitchElementAttributes, SwitchElementEventMap>

import type { SliderElementAttributes, SliderElementEventMap, SliderThumbElementAttributes, SliderThumbElementEventMap } from '@aracna/web'
import type { SliderElement, SliderThumbElement } from '@aracna/web-components/elements/input/slider-element'

export type AracnaSliderProps = ElementComponentProps<SliderElement, SliderElementAttributes, SliderElementEventMap>
export type AracnaSliderThumbProps = ElementComponentProps<SliderThumbElement, SliderThumbElementAttributes, SliderThumbElementEventMap>

import type {
  SelectElementAttributes,
  SelectElementEventMap,
  SelectButtonElementAttributes,
  SelectButtonElementEventMap,
  SelectGroupElementAttributes,
  SelectGroupElementEventMap,
  SelectInputElementAttributes,
  SelectInputElementEventMap,
  SelectListElementAttributes,
  SelectListElementEventMap,
  SelectOptionElementAttributes,
  SelectOptionElementEventMap
} from '@aracna/web'
import type {
  SelectElement,
  SelectButtonElement,
  SelectGroupElement,
  SelectInputElement,
  SelectListElement,
  SelectOptionElement
} from '@aracna/web-components/elements/input/select-element'

export type AracnaSelectProps = ElementComponentProps<SelectElement, SelectElementAttributes<SelectOptionElement>, SelectElementEventMap>
export type AracnaSelectButtonProps = ElementComponentProps<SelectButtonElement, SelectButtonElementAttributes, SelectButtonElementEventMap>
export type AracnaSelectGroupProps = ElementComponentProps<SelectGroupElement, SelectGroupElementAttributes, SelectGroupElementEventMap>
export type AracnaSelectInputProps = ElementComponentProps<SelectInputElement, SelectInputElementAttributes, SelectInputElementEventMap>
export type AracnaSelectListProps = ElementComponentProps<SelectListElement, SelectListElementAttributes, SelectListElementEventMap>
export type AracnaSelectOptionProps = ElementComponentProps<SelectOptionElement, SelectOptionElementAttributes, SelectOptionElementEventMap>

import type { RadioGroupElementAttributes, RadioGroupElementEventMap, RadioButtonElementAttributes, RadioButtonElementEventMap } from '@aracna/web'
import type { RadioGroupElement, RadioButtonElement } from '@aracna/web-components/elements/input/radio-group-element'

export type AracnaRadioGroupProps = ElementComponentProps<RadioGroupElement, RadioGroupElementAttributes, RadioGroupElementEventMap>
export type AracnaRadioButtonProps = ElementComponentProps<RadioButtonElement, RadioButtonElementAttributes, RadioButtonElementEventMap>

import type { InputFileElementAttributes, InputFileElementEventMap } from '@aracna/web'
import type { InputFileElement } from '@aracna/web-components/elements/input/input-file-element'

export type AracnaInputFileProps = ElementComponentProps<InputFileElement, InputFileElementAttributes, InputFileElementEventMap>

import type { InputElementAttributes, InputElementEventMap } from '@aracna/web'
import type { InputElement } from '@aracna/web-components/elements/input/input-element'

export type AracnaInputProps = ElementComponentProps<InputElement, InputElementAttributes, InputElementEventMap>

import type { FormElementAttributes, FormElementEventMap } from '@aracna/web'
import type { FormElement } from '@aracna/web-components/elements/input/form-element'

export type AracnaFormProps = ElementComponentProps<FormElement, FormElementAttributes, FormElementEventMap>

import type { CheckBoxElementAttributes, CheckBoxElementEventMap } from '@aracna/web'
import type { CheckBoxElement } from '@aracna/web-components/elements/input/check-box-element'

export type AracnaCheckBoxProps = ElementComponentProps<CheckBoxElement, CheckBoxElementAttributes, CheckBoxElementEventMap>

import type { ButtonGroupElementAttributes, ButtonGroupElementEventMap } from '@aracna/web'
import type { ButtonGroupElement } from '@aracna/web-components/elements/input/button-group-element'

export type AracnaButtonGroupProps = ElementComponentProps<ButtonGroupElement, ButtonGroupElementAttributes, ButtonGroupElementEventMap>

import type { ButtonElementAttributes, ButtonElementEventMap } from '@aracna/web'
import type { ButtonElement } from '@aracna/web-components/elements/input/button-element'

export type AracnaButtonProps = ElementComponentProps<ButtonElement, ButtonElementAttributes, ButtonElementEventMap>

import type { DividerElementAttributes, DividerElementEventMap } from '@aracna/web'
import type { DividerElement } from '@aracna/web-components/elements/layout/divider-element'

export type AracnaDividerProps = ElementComponentProps<DividerElement, DividerElementAttributes, DividerElementEventMap>

import type { MeterElementAttributes, MeterElementEventMap } from '@aracna/web'
import type { MeterElement } from '@aracna/web-components/elements/feedback/meter-element'

export type AracnaMeterProps = ElementComponentProps<MeterElement, MeterElementAttributes, MeterElementEventMap>

import type {
  DialogElementAttributes,
  DialogElementEventMap,
  DialogDescriptionElementAttributes,
  DialogDescriptionElementEventMap,
  DialogLabelElementAttributes,
  DialogLabelElementEventMap
} from '@aracna/web'
import type { DialogElement, DialogDescriptionElement, DialogLabelElement } from '@aracna/web-components/elements/feedback/dialog-element'

export type AracnaDialogProps = ElementComponentProps<DialogElement, DialogElementAttributes, DialogElementEventMap>
export type AracnaDialogDescriptionProps = ElementComponentProps<DialogDescriptionElement, DialogDescriptionElementAttributes, DialogDescriptionElementEventMap>
export type AracnaDialogLabelProps = ElementComponentProps<DialogLabelElement, DialogLabelElementAttributes, DialogLabelElementEventMap>

import type { AlertElementAttributes, AlertElementEventMap } from '@aracna/web'
import type { AlertElement } from '@aracna/web-components/elements/feedback/alert-element'

export type AracnaAlertProps = ElementComponentProps<AlertElement, AlertElementAttributes, AlertElementEventMap>

import type {
  AlertDialogElementAttributes,
  AlertDialogElementEventMap,
  AlertDialogDescriptionElementAttributes,
  AlertDialogDescriptionElementEventMap,
  AlertDialogLabelElementAttributes,
  AlertDialogLabelElementEventMap
} from '@aracna/web'
import type { AlertDialogElement, AlertDialogDescriptionElement, AlertDialogLabelElement } from '@aracna/web-components/elements/feedback/alert-dialog-element'

export type AracnaAlertDialogProps = ElementComponentProps<AlertDialogElement, AlertDialogElementAttributes, AlertDialogElementEventMap>
export type AracnaAlertDialogDescriptionProps = ElementComponentProps<
  AlertDialogDescriptionElement,
  AlertDialogDescriptionElementAttributes,
  AlertDialogDescriptionElementEventMap
>
export type AracnaAlertDialogLabelProps = ElementComponentProps<AlertDialogLabelElement, AlertDialogLabelElementAttributes, AlertDialogLabelElementEventMap>

import type {
  TabsElementAttributes,
  TabsElementEventMap,
  TabsPanelElementAttributes,
  TabsPanelElementEventMap,
  TabsTabElementAttributes,
  TabsTabElementEventMap
} from '@aracna/web'
import type { TabsElement, TabsPanelElement, TabsTabElement } from '@aracna/web-components/elements/navigation/tabs-element'

export type AracnaTabsProps = ElementComponentProps<TabsElement, TabsElementAttributes, TabsElementEventMap>
export type AracnaTabsPanelProps = ElementComponentProps<TabsPanelElement, TabsPanelElementAttributes, TabsPanelElementEventMap>
export type AracnaTabsTabProps = ElementComponentProps<TabsTabElement, TabsTabElementAttributes, TabsTabElementEventMap>

import type {
  NavigationRailElementAttributes,
  NavigationRailElementEventMap,
  NavigationRailItemElementAttributes,
  NavigationRailItemElementEventMap
} from '@aracna/web'
import type { NavigationRailElement, NavigationRailItemElement } from '@aracna/web-components/elements/navigation/navigation-rail-element'

export type AracnaNavigationRailProps<T extends NavigationRailItemElementAttributes = NavigationRailItemElementAttributes> = ElementComponentProps<
  NavigationRailElement,
  NavigationRailElementAttributes<T>,
  NavigationRailElementEventMap
>
export type AracnaNavigationRailItemProps = ElementComponentProps<
  NavigationRailItemElement,
  NavigationRailItemElementAttributes,
  NavigationRailItemElementEventMap
>

import type {
  NavigationBarElementAttributes,
  NavigationBarElementEventMap,
  NavigationBarItemElementAttributes,
  NavigationBarItemElementEventMap
} from '@aracna/web'
import type { NavigationBarElement, NavigationBarItemElement } from '@aracna/web-components/elements/navigation/navigation-bar-element'

export type AracnaNavigationBarProps<T extends NavigationBarItemElementAttributes = NavigationBarItemElementAttributes> = ElementComponentProps<
  NavigationBarElement,
  NavigationBarElementAttributes<T>,
  NavigationBarElementEventMap
>
export type AracnaNavigationBarItemProps = ElementComponentProps<NavigationBarItemElement, NavigationBarItemElementAttributes, NavigationBarItemElementEventMap>

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
import type { MenuElement, MenuButtonElement, MenuItemElement, MenuSubMenuElement } from '@aracna/web-components/elements/navigation/menu-element'

export type AracnaMenuProps = ElementComponentProps<MenuElement, MenuElementAttributes<MenuItemElement>, MenuElementEventMap>
export type AracnaMenuButtonProps = ElementComponentProps<MenuButtonElement, MenuButtonElementAttributes, MenuButtonElementEventMap>
export type AracnaMenuItemProps = ElementComponentProps<MenuItemElement, MenuItemElementAttributes, MenuItemElementEventMap>
export type AracnaMenuSubMenuProps = ElementComponentProps<MenuSubMenuElement, MenuSubMenuElementAttributes, MenuSubMenuElementEventMap>

import type {
  BreadcrumbElementAttributes,
  BreadcrumbElementEventMap,
  BreadcrumbItemElementAttributes,
  BreadcrumbItemElementEventMap,
  BreadcrumbListElementAttributes,
  BreadcrumbListElementEventMap
} from '@aracna/web'
import type { BreadcrumbElement, BreadcrumbItemElement, BreadcrumbListElement } from '@aracna/web-components/elements/navigation/breadcrumb-element'

export type AracnaBreadcrumbProps = ElementComponentProps<BreadcrumbElement, BreadcrumbElementAttributes, BreadcrumbElementEventMap>
export type AracnaBreadcrumbItemProps = ElementComponentProps<BreadcrumbItemElement, BreadcrumbItemElementAttributes, BreadcrumbItemElementEventMap>
export type AracnaBreadcrumbListProps = ElementComponentProps<BreadcrumbListElement, BreadcrumbListElementAttributes, BreadcrumbListElementEventMap>

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
} from '@aracna/web-components/elements/aria/aria-tooltip-element'

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

import type {
  AriaTabsElementAttributes,
  AriaTabsElementEventMap,
  AriaTabsPanelElementAttributes,
  AriaTabsPanelElementEventMap,
  AriaTabsTabElementAttributes,
  AriaTabsTabElementEventMap
} from '@aracna/web'
import type { AriaTabsElement, AriaTabsPanelElement, AriaTabsTabElement } from '@aracna/web-components/elements/aria/aria-tabs-element'

export type AracnaAriaTabsProps = ElementComponentProps<AriaTabsElement, AriaTabsElementAttributes, AriaTabsElementEventMap>
export type AracnaAriaTabsPanelProps = ElementComponentProps<AriaTabsPanelElement, AriaTabsPanelElementAttributes, AriaTabsPanelElementEventMap>
export type AracnaAriaTabsTabProps = ElementComponentProps<AriaTabsTabElement, AriaTabsTabElementAttributes, AriaTabsTabElementEventMap>

import type { AriaSwitchElementAttributes, AriaSwitchElementEventMap } from '@aracna/web'
import type { AriaSwitchElement } from '@aracna/web-components/elements/aria/aria-switch-element'

export type AracnaAriaSwitchProps = ElementComponentProps<AriaSwitchElement, AriaSwitchElementAttributes, AriaSwitchElementEventMap>

import type { AriaSliderElementAttributes, AriaSliderElementEventMap, AriaSliderThumbElementAttributes, AriaSliderThumbElementEventMap } from '@aracna/web'
import type { AriaSliderElement, AriaSliderThumbElement } from '@aracna/web-components/elements/aria/aria-slider-element'

export type AracnaAriaSliderProps = ElementComponentProps<AriaSliderElement, AriaSliderElementAttributes, AriaSliderElementEventMap>
export type AracnaAriaSliderThumbProps = ElementComponentProps<AriaSliderThumbElement, AriaSliderThumbElementAttributes, AriaSliderThumbElementEventMap>

import type {
  AriaRadioButtonElementAttributes,
  AriaRadioButtonElementEventMap,
  AriaRadioGroupElementAttributes,
  AriaRadioGroupElementEventMap
} from '@aracna/web'
import type { AriaRadioButtonElement, AriaRadioGroupElement } from '@aracna/web-components/elements/aria/aria-radio-group-element'

export type AracnaAriaRadioButtonProps = ElementComponentProps<AriaRadioButtonElement, AriaRadioButtonElementAttributes, AriaRadioButtonElementEventMap>
export type AracnaAriaRadioGroupProps = ElementComponentProps<AriaRadioGroupElement, AriaRadioGroupElementAttributes, AriaRadioGroupElementEventMap>

import type { AriaMeterElementAttributes, AriaMeterElementEventMap } from '@aracna/web'
import type { AriaMeterElement } from '@aracna/web-components/elements/aria/aria-meter-element'

export type AracnaAriaMeterProps = ElementComponentProps<AriaMeterElement, AriaMeterElementAttributes, AriaMeterElementEventMap>

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
} from '@aracna/web-components/elements/aria/aria-menu-element'

export type AracnaAriaMenuProps = ElementComponentProps<AriaMenuElement, AriaMenuElementAttributes<AriaMenuItemElement>, AriaMenuElementEventMap>
export type AracnaAriaMenuButtonProps = ElementComponentProps<AriaMenuButtonElement, AriaMenuButtonElementAttributes, AriaMenuButtonElementEventMap>
export type AracnaAriaMenuItemProps = ElementComponentProps<AriaMenuItemElement, AriaMenuItemElementAttributes, AriaMenuItemElementEventMap>
export type AracnaAriaMenuSubMenuProps = ElementComponentProps<AriaMenuSubMenuElement, AriaMenuSubMenuElementAttributes, AriaMenuSubMenuElementEventMap>

import type { AriaListElementAttributes, AriaListElementEventMap, AriaListItemElementAttributes, AriaListItemElementEventMap } from '@aracna/web'
import type { AriaListElement, AriaListItemElement } from '@aracna/web-components/elements/aria/aria-list-element'

export type AracnaAriaListProps = ElementComponentProps<AriaListElement, AriaListElementAttributes, AriaListElementEventMap>
export type AracnaAriaListItemProps = ElementComponentProps<AriaListItemElement, AriaListItemElementAttributes, AriaListItemElementEventMap>

import type {
  AriaListBoxElementAttributes,
  AriaListBoxElementEventMap,
  AriaListBoxOptionElementAttributes,
  AriaListBoxOptionElementEventMap
} from '@aracna/web'
import type { AriaListBoxElement, AriaListBoxOptionElement } from '@aracna/web-components/elements/aria/aria-list-box-element'

export type AracnaAriaListBoxProps = ElementComponentProps<
  AriaListBoxElement,
  AriaListBoxElementAttributes<AriaListBoxOptionElement>,
  AriaListBoxElementEventMap
>
export type AracnaAriaListBoxOptionProps = ElementComponentProps<AriaListBoxOptionElement, AriaListBoxOptionElementAttributes, AriaListBoxOptionElementEventMap>

import type { AriaLinkElementAttributes, AriaLinkElementEventMap } from '@aracna/web'
import type { AriaLinkElement } from '@aracna/web-components/elements/aria/aria-link-element'

export type AracnaAriaLinkProps = ElementComponentProps<AriaLinkElement, AriaLinkElementAttributes, AriaLinkElementEventMap>

import type {
  AriaFeedElementAttributes,
  AriaFeedElementEventMap,
  AriaFeedArticleElementAttributes,
  AriaFeedArticleElementEventMap,
  AriaFeedArticleDescriptionElementAttributes,
  AriaFeedArticleDescriptionElementEventMap,
  AriaFeedArticleLabelElementAttributes,
  AriaFeedArticleLabelElementEventMap
} from '@aracna/web'
import type {
  AriaFeedElement,
  AriaFeedArticleElement,
  AriaFeedArticleDescriptionElement,
  AriaFeedArticleLabelElement
} from '@aracna/web-components/elements/aria/aria-feed-element'

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

import type {
  AriaDisclosureElementAttributes,
  AriaDisclosureElementEventMap,
  AriaDisclosureButtonElementAttributes,
  AriaDisclosureButtonElementEventMap,
  AriaDisclosurePanelElementAttributes,
  AriaDisclosurePanelElementEventMap,
  AriaDisclosureSectionElementAttributes,
  AriaDisclosureSectionElementEventMap
} from '@aracna/web'
import type {
  AriaDisclosureElement,
  AriaDisclosureButtonElement,
  AriaDisclosurePanelElement,
  AriaDisclosureSectionElement
} from '@aracna/web-components/elements/aria/aria-disclosure-element'

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

import type {
  AriaDialogElementAttributes,
  AriaDialogElementEventMap,
  AriaDialogDescriptionElementAttributes,
  AriaDialogDescriptionElementEventMap,
  AriaDialogLabelElementAttributes,
  AriaDialogLabelElementEventMap
} from '@aracna/web'
import type { AriaDialogElement, AriaDialogDescriptionElement, AriaDialogLabelElement } from '@aracna/web-components/elements/aria/aria-dialog-element'

export type AracnaAriaDialogProps = ElementComponentProps<AriaDialogElement, AriaDialogElementAttributes, AriaDialogElementEventMap>
export type AracnaAriaDialogDescriptionProps = ElementComponentProps<
  AriaDialogDescriptionElement,
  AriaDialogDescriptionElementAttributes,
  AriaDialogDescriptionElementEventMap
>
export type AracnaAriaDialogLabelProps = ElementComponentProps<AriaDialogLabelElement, AriaDialogLabelElementAttributes, AriaDialogLabelElementEventMap>

import type {
  AriaComboBoxElementAttributes,
  AriaComboBoxElementEventMap,
  AriaComboBoxButtonElementAttributes,
  AriaComboBoxButtonElementEventMap,
  AriaComboBoxGroupElementAttributes,
  AriaComboBoxGroupElementEventMap,
  AriaComboBoxInputElementAttributes,
  AriaComboBoxInputElementEventMap,
  AriaComboBoxListElementAttributes,
  AriaComboBoxListElementEventMap,
  AriaComboBoxOptionElementAttributes,
  AriaComboBoxOptionElementEventMap
} from '@aracna/web'
import type {
  AriaComboBoxElement,
  AriaComboBoxButtonElement,
  AriaComboBoxGroupElement,
  AriaComboBoxInputElement,
  AriaComboBoxListElement,
  AriaComboBoxOptionElement
} from '@aracna/web-components/elements/aria/aria-combo-box-element'

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

import type { AriaCheckBoxElementAttributes, AriaCheckBoxElementEventMap } from '@aracna/web'
import type { AriaCheckBoxElement } from '@aracna/web-components/elements/aria/aria-check-box-element'

export type AracnaAriaCheckBoxProps = ElementComponentProps<AriaCheckBoxElement, AriaCheckBoxElementAttributes, AriaCheckBoxElementEventMap>

import type {
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
  AriaCarouselTabsElementEventMap
} from '@aracna/web'
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

import type { AriaButtonElementAttributes, AriaButtonElementEventMap } from '@aracna/web'
import type { AriaButtonElement } from '@aracna/web-components/elements/aria/aria-button-element'

export type AracnaAriaButtonProps = ElementComponentProps<AriaButtonElement, AriaButtonElementAttributes, AriaButtonElementEventMap>

import type {
  AriaBreadcrumbElementAttributes,
  AriaBreadcrumbElementEventMap,
  AriaBreadcrumbItemElementAttributes,
  AriaBreadcrumbItemElementEventMap,
  AriaBreadcrumbListElementAttributes,
  AriaBreadcrumbListElementEventMap
} from '@aracna/web'
import type { AriaBreadcrumbElement, AriaBreadcrumbItemElement, AriaBreadcrumbListElement } from '@aracna/web-components/elements/aria/aria-breadcrumb-element'

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

import type { AriaAlertElementAttributes, AriaAlertElementEventMap } from '@aracna/web'
import type { AriaAlertElement } from '@aracna/web-components/elements/aria/aria-alert-element'

export type AracnaAriaAlertProps = ElementComponentProps<AriaAlertElement, AriaAlertElementAttributes, AriaAlertElementEventMap>

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
} from '@aracna/web-components/elements/aria/aria-alert-dialog-element'

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

import type {
  AriaAccordionElementAttributes,
  AriaAccordionElementEventMap,
  AriaAccordionButtonElementAttributes,
  AriaAccordionButtonElementEventMap,
  AriaAccordionHeaderElementAttributes,
  AriaAccordionHeaderElementEventMap,
  AriaAccordionPanelElementAttributes,
  AriaAccordionPanelElementEventMap,
  AriaAccordionSectionElementAttributes,
  AriaAccordionSectionElementEventMap
} from '@aracna/web'
import type {
  AriaAccordionElement,
  AriaAccordionButtonElement,
  AriaAccordionHeaderElement,
  AriaAccordionPanelElement,
  AriaAccordionSectionElement
} from '@aracna/web-components/elements/aria/aria-accordion-element'

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

import type {
  DisclosureElementAttributes,
  DisclosureElementEventMap,
  DisclosureButtonElementAttributes,
  DisclosureButtonElementEventMap,
  DisclosurePanelElementAttributes,
  DisclosurePanelElementEventMap,
  DisclosureSectionElementAttributes,
  DisclosureSectionElementEventMap
} from '@aracna/web'
import type {
  DisclosureElement,
  DisclosureButtonElement,
  DisclosurePanelElement,
  DisclosureSectionElement
} from '@aracna/web-components/elements/surface/disclosure-element'

export type AracnaDisclosureProps = ElementComponentProps<DisclosureElement, DisclosureElementAttributes, DisclosureElementEventMap>
export type AracnaDisclosureButtonProps = ElementComponentProps<DisclosureButtonElement, DisclosureButtonElementAttributes, DisclosureButtonElementEventMap>
export type AracnaDisclosurePanelProps = ElementComponentProps<DisclosurePanelElement, DisclosurePanelElementAttributes, DisclosurePanelElementEventMap>
export type AracnaDisclosureSectionProps = ElementComponentProps<DisclosureSectionElement, DisclosureSectionElementAttributes, DisclosureSectionElementEventMap>

import type {
  AccordionElementAttributes,
  AccordionElementEventMap,
  AccordionButtonElementAttributes,
  AccordionButtonElementEventMap,
  AccordionHeaderElementAttributes,
  AccordionHeaderElementEventMap,
  AccordionPanelElementAttributes,
  AccordionPanelElementEventMap,
  AccordionSectionElementAttributes,
  AccordionSectionElementEventMap
} from '@aracna/web'
import type {
  AccordionElement,
  AccordionButtonElement,
  AccordionHeaderElement,
  AccordionPanelElement,
  AccordionSectionElement
} from '@aracna/web-components/elements/surface/accordion-element'

export type AracnaAccordionProps = ElementComponentProps<AccordionElement, AccordionElementAttributes, AccordionElementEventMap>
export type AracnaAccordionButtonProps = ElementComponentProps<AccordionButtonElement, AccordionButtonElementAttributes, AccordionButtonElementEventMap>
export type AracnaAccordionHeaderProps = ElementComponentProps<AccordionHeaderElement, AccordionHeaderElementAttributes, AccordionHeaderElementEventMap>
export type AracnaAccordionPanelProps = ElementComponentProps<AccordionPanelElement, AccordionPanelElementAttributes, AccordionPanelElementEventMap>
export type AracnaAccordionSectionProps = ElementComponentProps<AccordionSectionElement, AccordionSectionElementAttributes, AccordionSectionElementEventMap>

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
import type { TooltipElement, TooltipArrowElement, TooltipContentElement, TooltipTriggerElement } from '@aracna/web-components/elements/data/tooltip-element'

export type AracnaTooltipProps = ElementComponentProps<TooltipElement, TooltipElementAttributes, TooltipElementEventMap>
export type AracnaTooltipArrowProps = ElementComponentProps<TooltipArrowElement, TooltipArrowElementAttributes, TooltipArrowElementEventMap>
export type AracnaTooltipContentProps = ElementComponentProps<TooltipContentElement, TooltipContentElementAttributes, TooltipContentElementEventMap>
export type AracnaTooltipTriggerProps = ElementComponentProps<TooltipTriggerElement, TooltipTriggerElementAttributes, TooltipTriggerElementEventMap>

import type { ListElementAttributes, ListElementEventMap, ListItemElementAttributes, ListItemElementEventMap } from '@aracna/web'
import type { ListElement, ListItemElement } from '@aracna/web-components/elements/data/list-element'

export type AracnaListProps = ElementComponentProps<ListElement, ListElementAttributes, ListElementEventMap>
export type AracnaListItemProps = ElementComponentProps<ListItemElement, ListItemElementAttributes, ListItemElementEventMap>

import type { ImageElementAttributes, ImageElementEventMap } from '@aracna/web'
import type { ImageElement } from '@aracna/web-components/elements/data/image-element'

export type AracnaImageProps = ElementComponentProps<ImageElement, ImageElementAttributes, ImageElementEventMap>

import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import type { IconElement } from '@aracna/web-components/elements/data/icon-element'

export type AracnaIconProps = ElementComponentProps<IconElement, IconElementAttributes, IconElementEventMap>

import type {
  FeedElementAttributes,
  FeedElementEventMap,
  FeedArticleElementAttributes,
  FeedArticleElementEventMap,
  FeedArticleDescriptionElementAttributes,
  FeedArticleDescriptionElementEventMap,
  FeedArticleLabelElementAttributes,
  FeedArticleLabelElementEventMap
} from '@aracna/web'
import type { FeedElement, FeedArticleElement, FeedArticleDescriptionElement, FeedArticleLabelElement } from '@aracna/web-components/elements/data/feed-element'

export type AracnaFeedProps = ElementComponentProps<FeedElement, FeedElementAttributes, FeedElementEventMap>
export type AracnaFeedArticleProps = ElementComponentProps<FeedArticleElement, FeedArticleElementAttributes, FeedArticleElementEventMap>
export type AracnaFeedArticleDescriptionProps = ElementComponentProps<
  FeedArticleDescriptionElement,
  FeedArticleDescriptionElementAttributes,
  FeedArticleDescriptionElementEventMap
>
export type AracnaFeedArticleLabelProps = ElementComponentProps<FeedArticleLabelElement, FeedArticleLabelElementAttributes, FeedArticleLabelElementEventMap>

import type { ChipElementAttributes, ChipElementEventMap } from '@aracna/web'
import type { ChipElement } from '@aracna/web-components/elements/data/chip-element'

export type AracnaChipProps = ElementComponentProps<ChipElement, ChipElementAttributes, ChipElementEventMap>

import type {
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
  CarouselTabsElementEventMap
} from '@aracna/web'
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

export type AracnaCarouselProps = ElementComponentProps<CarouselElement, CarouselElementAttributes, CarouselElementEventMap>
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

import type { BadgeElementAttributes, BadgeElementEventMap } from '@aracna/web'
import type { BadgeElement } from '@aracna/web-components/elements/data/badge-element'

export type AracnaBadgeProps = ElementComponentProps<BadgeElement, BadgeElementAttributes, BadgeElementEventMap>

import type { AvatarElementAttributes, AvatarElementEventMap } from '@aracna/web'
import type { AvatarElement } from '@aracna/web-components/elements/data/avatar-element'

export type AracnaAvatarProps = ElementComponentProps<AvatarElement, AvatarElementAttributes, AvatarElementEventMap>
