import type {
  AccordionButtonElementAttributes,
  AccordionElementAttributes,
  AccordionHeaderElementAttributes,
  AccordionPanelElementAttributes,
  AccordionSectionElementAttributes,
  AlertDialogDescriptionElementAttributes,
  AlertDialogElementAttributes,
  AlertDialogLabelElementAttributes,
  AlertElementAttributes,
  AriaAccordionButtonElementAttributes,
  AriaAccordionElementAttributes,
  AriaAccordionHeaderElementAttributes,
  AriaAccordionPanelElementAttributes,
  AriaAccordionSectionElementAttributes,
  AriaAlertDialogDescriptionElementAttributes,
  AriaAlertDialogElementAttributes,
  AriaAlertDialogLabelElementAttributes,
  AriaAlertElementAttributes,
  AriaBreadcrumbElementAttributes,
  AriaBreadcrumbItemElementAttributes,
  AriaBreadcrumbListElementAttributes,
  AriaButtonElementAttributes,
  AriaCarouselElementAttributes,
  AriaCarouselNextSlideControlElementAttributes,
  AriaCarouselPreviousSlideControlElementAttributes,
  AriaCarouselRotationControlElementAttributes,
  AriaCarouselSlideElementAttributes,
  AriaCarouselSlidesElementAttributes,
  AriaCarouselTabElementAttributes,
  AriaCarouselTabsElementAttributes,
  AriaCheckBoxElementAttributes,
  AriaComboBoxButtonElementAttributes,
  AriaComboBoxElementAttributes,
  AriaComboBoxGroupElementAttributes,
  AriaComboBoxInputElementAttributes,
  AriaComboBoxListElementAttributes,
  AriaComboBoxOptionElementAttributes,
  AriaDialogDescriptionElementAttributes,
  AriaDialogElementAttributes,
  AriaDialogLabelElementAttributes,
  AriaDisclosureButtonElementAttributes,
  AriaDisclosureElementAttributes,
  AriaDisclosurePanelElementAttributes,
  AriaDisclosureSectionElementAttributes,
  AriaFeedArticleDescriptionElementAttributes,
  AriaFeedArticleElementAttributes,
  AriaFeedArticleLabelElementAttributes,
  AriaFeedElementAttributes,
  AriaLinkElementAttributes,
  AriaListBoxElementAttributes,
  AriaListBoxOptionElementAttributes,
  AriaMenuButtonElementAttributes,
  AriaMenuElementAttributes,
  AriaMenuItemElementAttributes,
  AriaMenuSubMenuElementAttributes,
  AriaMeterElementAttributes,
  AriaRadioButtonElementAttributes,
  AriaRadioGroupElementAttributes,
  AriaSliderElementAttributes,
  AriaSliderThumbElementAttributes,
  AriaSwitchElementAttributes,
  AriaTabsElementAttributes,
  AriaTabsPanelElementAttributes,
  AriaTabsTabElementAttributes,
  AriaTooltipArrowElementAttributes,
  AriaTooltipContentElementAttributes,
  AriaTooltipElementAttributes,
  AriaTooltipTriggerElementAttributes,
  AvatarElementAttributes,
  BadgeElementAttributes,
  BreadcrumbElementAttributes,
  BreadcrumbItemElementAttributes,
  BreadcrumbListElementAttributes,
  ButtonElementAttributes,
  ButtonGroupElementAttributes,
  CarouselElementAttributes,
  CarouselNextSlideControlElementAttributes,
  CarouselPreviousSlideControlElementAttributes,
  CarouselRotationControlElementAttributes,
  CarouselSlideElementAttributes,
  CarouselSlidesElementAttributes,
  CarouselTabElementAttributes,
  CarouselTabsElementAttributes,
  CheckBoxElementAttributes,
  ChipElementAttributes,
  DialogDescriptionElementAttributes,
  DialogElementAttributes,
  DialogLabelElementAttributes,
  DisclosureButtonElementAttributes,
  DisclosureElementAttributes,
  DisclosurePanelElementAttributes,
  DisclosureSectionElementAttributes,
  DividerElementAttributes,
  FeedArticleDescriptionElementAttributes,
  FeedArticleElementAttributes,
  FeedArticleLabelElementAttributes,
  FeedElementAttributes,
  FormElementAttributes,
  IconElementAttributes,
  ImageElementAttributes,
  InputElementAttributes,
  InputFileElementAttributes,
  ListElementAttributes,
  ListItemElementAttributes,
  MenuButtonElementAttributes,
  MenuElementAttributes,
  MenuItemElementAttributes,
  MenuSubMenuElementAttributes,
  MeterElementAttributes,
  NavigationBarElementAttributes,
  NavigationBarItemElementAttributes,
  NavigationRailElementAttributes,
  NavigationRailItemElementAttributes,
  RadioButtonElementAttributes,
  RadioGroupElementAttributes,
  SelectButtonElementAttributes,
  SelectElementAttributes,
  SelectGroupElementAttributes,
  SelectInputElementAttributes,
  SelectListElementAttributes,
  SelectOptionElementAttributes,
  SliderElementAttributes,
  SliderThumbElementAttributes,
  SwitchElementAttributes,
  TabsElementAttributes,
  TabsPanelElementAttributes,
  TabsTabElementAttributes,
  TextAreaElementAttributes,
  TooltipArrowElementAttributes,
  TooltipContentElementAttributes,
  TooltipElementAttributes,
  TooltipTriggerElementAttributes
} from '@queelag/web'
import type {
  AccordionButtonElement,
  AccordionElement,
  AccordionHeaderElement,
  AccordionPanelElement,
  AccordionSectionElement,
  AlertDialogDescriptionElement,
  AlertDialogElement,
  AlertDialogLabelElement,
  AlertElement,
  AriaAccordionButtonElement,
  AriaAccordionElement,
  AriaAccordionHeaderElement,
  AriaAccordionPanelElement,
  AriaAccordionSectionElement,
  AriaAlertDialogDescriptionElement,
  AriaAlertDialogElement,
  AriaAlertDialogLabelElement,
  AriaAlertElement,
  AriaBreadcrumbElement,
  AriaBreadcrumbItemElement,
  AriaBreadcrumbListElement,
  AriaButtonElement,
  AriaCarouselElement,
  AriaCarouselNextSlideControlElement,
  AriaCarouselPreviousSlideControlElement,
  AriaCarouselRotationControlElement,
  AriaCarouselSlideElement,
  AriaCarouselSlidesElement,
  AriaCarouselTabElement,
  AriaCarouselTabsElement,
  AriaCheckBoxElement,
  AriaComboBoxButtonElement,
  AriaComboBoxElement,
  AriaComboBoxGroupElement,
  AriaComboBoxInputElement,
  AriaComboBoxListElement,
  AriaComboBoxOptionElement,
  AriaDialogDescriptionElement,
  AriaDialogElement,
  AriaDialogLabelElement,
  AriaDisclosureButtonElement,
  AriaDisclosureElement,
  AriaDisclosurePanelElement,
  AriaDisclosureSectionElement,
  AriaFeedArticleDescriptionElement,
  AriaFeedArticleElement,
  AriaFeedArticleLabelElement,
  AriaFeedElement,
  AriaLinkElement,
  AriaListBoxElement,
  AriaListBoxOptionElement,
  AriaMenuButtonElement,
  AriaMenuElement,
  AriaMenuItemElement,
  AriaMenuSubMenuElement,
  AriaMeterElement,
  AriaRadioButtonElement,
  AriaRadioGroupElement,
  AriaSliderElement,
  AriaSliderThumbElement,
  AriaSwitchElement,
  AriaTabsElement,
  AriaTabsPanelElement,
  AriaTabsTabElement,
  AriaTooltipArrowElement,
  AriaTooltipContentElement,
  AriaTooltipElement,
  AriaTooltipTriggerElement,
  AvatarElement,
  BadgeElement,
  BreadcrumbElement,
  BreadcrumbItemElement,
  BreadcrumbListElement,
  ButtonElement,
  ButtonGroupElement,
  CarouselElement,
  CarouselNextSlideControlElement,
  CarouselPreviousSlideControlElement,
  CarouselRotationControlElement,
  CarouselSlideElement,
  CarouselSlidesElement,
  CarouselTabElement,
  CarouselTabsElement,
  CheckBoxElement,
  ChipElement,
  DialogDescriptionElement,
  DialogElement,
  DialogLabelElement,
  DisclosureButtonElement,
  DisclosureElement,
  DisclosurePanelElement,
  DisclosureSectionElement,
  DividerElement,
  FeedArticleDescriptionElement,
  FeedArticleElement,
  FeedArticleLabelElement,
  FeedElement,
  FormElement,
  IconElement,
  ImageElement,
  InputElement,
  InputFileElement,
  ListElement,
  ListItemElement,
  MenuButtonElement,
  MenuElement,
  MenuItemElement,
  MenuSubMenuElement,
  MeterElement,
  NavigationBarElement,
  NavigationBarItemElement,
  NavigationRailElement,
  NavigationRailItemElement,
  RadioButtonElement,
  RadioGroupElement,
  SelectButtonElement,
  SelectElement,
  SelectGroupElement,
  SelectInputElement,
  SelectListElement,
  SelectOptionElement,
  SliderElement,
  SliderThumbElement,
  SwitchElement,
  TabsElement,
  TabsPanelElement,
  TabsTabElement,
  TextAreaElement,
  TooltipArrowElement,
  TooltipContentElement,
  TooltipElement,
  TooltipTriggerElement
} from '@queelag/web-components'
import type { ElementComponentProps } from './types'

/**
 * ARIA Props
 */
/** */

export type AriaAccordionProps = ElementComponentProps<AriaAccordionElement, AriaAccordionElementAttributes>
export type AriaAccordionButtonProps = ElementComponentProps<AriaAccordionButtonElement, AriaAccordionButtonElementAttributes>
export type AriaAccordionHeaderProps = ElementComponentProps<AriaAccordionHeaderElement, AriaAccordionHeaderElementAttributes>
export type AriaAccordionPanelProps = ElementComponentProps<AriaAccordionPanelElement, AriaAccordionPanelElementAttributes>
export type AriaAccordionSectionProps = ElementComponentProps<AriaAccordionSectionElement, AriaAccordionSectionElementAttributes>

export type AriaAlertProps = ElementComponentProps<AriaAlertElement, AriaAlertElementAttributes>

export type AriaAlertDialogProps = ElementComponentProps<AriaAlertDialogElement, AriaAlertDialogElementAttributes>
export type AriaAlertDialogDescriptionProps = ElementComponentProps<AriaAlertDialogDescriptionElement, AriaAlertDialogDescriptionElementAttributes>
export type AriaAlertDialogLabelProps = ElementComponentProps<AriaAlertDialogLabelElement, AriaAlertDialogLabelElementAttributes>

export type AriaBreadcrumbProps = ElementComponentProps<AriaBreadcrumbElement, AriaBreadcrumbElementAttributes>
export type AriaBreadcrumbListProps = ElementComponentProps<AriaBreadcrumbListElement, AriaBreadcrumbListElementAttributes>
export type AriaBreadcrumbItemProps = ElementComponentProps<AriaBreadcrumbItemElement, AriaBreadcrumbItemElementAttributes>

export type AriaButtonProps = ElementComponentProps<AriaButtonElement, AriaButtonElementAttributes>

export type AriaCarouselProps = ElementComponentProps<AriaCarouselElement, AriaCarouselElementAttributes>
export type AriaCarouselNextSlideControlProps = ElementComponentProps<AriaCarouselNextSlideControlElement, AriaCarouselNextSlideControlElementAttributes>
export type AriaCarouselPreviousSlideControlProps = ElementComponentProps<
  AriaCarouselPreviousSlideControlElement,
  AriaCarouselPreviousSlideControlElementAttributes
>
export type AriaCarouselRotationControlProps = ElementComponentProps<AriaCarouselRotationControlElement, AriaCarouselRotationControlElementAttributes>
export type AriaCarouselSlideProps = ElementComponentProps<AriaCarouselSlideElement, AriaCarouselSlideElementAttributes>
export type AriaCarouselSlidesProps = ElementComponentProps<AriaCarouselSlidesElement, AriaCarouselSlidesElementAttributes>
export type AriaCarouselTabProps = ElementComponentProps<AriaCarouselTabElement, AriaCarouselTabElementAttributes>
export type AriaCarouselTabsProps = ElementComponentProps<AriaCarouselTabsElement, AriaCarouselTabsElementAttributes>

export type AriaCheckBoxProps = ElementComponentProps<AriaCheckBoxElement, AriaCheckBoxElementAttributes>

export type AriaComboBoxProps = ElementComponentProps<AriaComboBoxElement, AriaComboBoxElementAttributes<AriaComboBoxOptionElement>>
export type AriaComboBoxButtonProps = ElementComponentProps<AriaComboBoxButtonElement, AriaComboBoxButtonElementAttributes>
export type AriaComboBoxGroupProps = ElementComponentProps<AriaComboBoxGroupElement, AriaComboBoxGroupElementAttributes>
export type AriaComboBoxInputProps = ElementComponentProps<AriaComboBoxInputElement, AriaComboBoxInputElementAttributes>
export type AriaComboBoxListProps = ElementComponentProps<AriaComboBoxListElement, AriaComboBoxListElementAttributes>
export type AriaComboBoxOptionProps = ElementComponentProps<AriaComboBoxOptionElement, AriaComboBoxOptionElementAttributes>

export type AriaDialogProps = ElementComponentProps<AriaDialogElement, AriaDialogElementAttributes>
export type AriaDialogDescriptionProps = ElementComponentProps<AriaDialogDescriptionElement, AriaDialogDescriptionElementAttributes>
export type AriaDialogLabelProps = ElementComponentProps<AriaDialogLabelElement, AriaDialogLabelElementAttributes>

export type AriaDisclosureProps = ElementComponentProps<AriaDisclosureElement, AriaDisclosureElementAttributes>
export type AriaDisclosureButtonProps = ElementComponentProps<AriaDisclosureButtonElement, AriaDisclosureButtonElementAttributes>
export type AriaDisclosurePanelProps = ElementComponentProps<AriaDisclosurePanelElement, AriaDisclosurePanelElementAttributes>
export type AriaDisclosureSectionProps = ElementComponentProps<AriaDisclosureSectionElement, AriaDisclosureSectionElementAttributes>

export type AriaFeedProps = ElementComponentProps<AriaFeedElement, AriaFeedElementAttributes>
export type AriaFeedArticleProps = ElementComponentProps<AriaFeedArticleElement, AriaFeedArticleElementAttributes>
export type AriaFeedArticleDescriptionProps = ElementComponentProps<AriaFeedArticleDescriptionElement, AriaFeedArticleDescriptionElementAttributes>
export type AriaFeedArticleLabelProps = ElementComponentProps<AriaFeedArticleLabelElement, AriaFeedArticleLabelElementAttributes>

export type AriaLinkProps = ElementComponentProps<AriaLinkElement, AriaLinkElementAttributes>

export type AriaListBoxProps = ElementComponentProps<AriaListBoxElement, AriaListBoxElementAttributes<AriaListBoxOptionElement>>
export type AriaListBoxOptionProps = ElementComponentProps<AriaListBoxOptionElement, AriaListBoxOptionElementAttributes>

export type AriaMenuProps = ElementComponentProps<AriaMenuElement, AriaMenuElementAttributes<AriaMenuItemElement>>
export type AriaMenuButtonProps = ElementComponentProps<AriaMenuButtonElement, AriaMenuButtonElementAttributes>
export type AriaMenuItemProps = ElementComponentProps<AriaMenuItemElement, AriaMenuItemElementAttributes>
export type AriaMenuSubMenuProps = ElementComponentProps<AriaMenuSubMenuElement, AriaMenuSubMenuElementAttributes>

export type AriaMeterProps = ElementComponentProps<AriaMeterElement, AriaMeterElementAttributes>

export type AriaRadioButtonProps = ElementComponentProps<AriaRadioButtonElement, AriaRadioButtonElementAttributes>
export type AriaRadioGroupProps = ElementComponentProps<AriaRadioGroupElement, AriaRadioGroupElementAttributes>

export type AriaSliderProps = ElementComponentProps<AriaSliderElement, AriaSliderElementAttributes>
export type AriaSliderThumbProps = ElementComponentProps<AriaSliderThumbElement, AriaSliderThumbElementAttributes>

export type AriaSwitchProps = ElementComponentProps<AriaSwitchElement, AriaSwitchElementAttributes>

export type AriaTabsProps = ElementComponentProps<AriaTabsElement, AriaTabsElementAttributes>
export type AriaTabsPanelProps = ElementComponentProps<AriaTabsPanelElement, AriaTabsPanelElementAttributes>
export type AriaTabsTabProps = ElementComponentProps<AriaTabsTabElement, AriaTabsTabElementAttributes>

export type AriaTooltipProps = ElementComponentProps<AriaTooltipElement, AriaTooltipElementAttributes>
export type AriaTooltipArrowProps = ElementComponentProps<AriaTooltipArrowElement, AriaTooltipArrowElementAttributes>
export type AriaTooltipContentProps = ElementComponentProps<AriaTooltipContentElement, AriaTooltipContentElementAttributes>
export type AriaTooltipTriggerProps = ElementComponentProps<AriaTooltipTriggerElement, AriaTooltipTriggerElementAttributes>

/**
 * Data Props
 */
/** */

export type AvatarProps = ElementComponentProps<AvatarElement, AvatarElementAttributes>
export type BadgeProps = ElementComponentProps<BadgeElement, BadgeElementAttributes>

export type CarouselProps = ElementComponentProps<CarouselElement, CarouselElementAttributes>
export type CarouselNextSlideControlProps = ElementComponentProps<CarouselNextSlideControlElement, CarouselNextSlideControlElementAttributes>
export type CarouselPreviousSlideControlProps = ElementComponentProps<CarouselPreviousSlideControlElement, CarouselPreviousSlideControlElementAttributes>
export type CarouselRotationControlProps = ElementComponentProps<CarouselRotationControlElement, CarouselRotationControlElementAttributes>
export type CarouselSlideProps = ElementComponentProps<CarouselSlideElement, CarouselSlideElementAttributes>
export type CarouselSlidesProps = ElementComponentProps<CarouselSlidesElement, CarouselSlidesElementAttributes>
export type CarouselTabProps = ElementComponentProps<CarouselTabElement, CarouselTabElementAttributes>
export type CarouselTabsProps = ElementComponentProps<CarouselTabsElement, CarouselTabsElementAttributes>

export type ChipProps = ElementComponentProps<ChipElement, ChipElementAttributes>

export type FeedProps = ElementComponentProps<FeedElement, FeedElementAttributes>
export type FeedArticleProps = ElementComponentProps<FeedArticleElement, FeedArticleElementAttributes>
export type FeedArticleDescriptionProps = ElementComponentProps<FeedArticleDescriptionElement, FeedArticleDescriptionElementAttributes>
export type FeedArticleLabelProps = ElementComponentProps<FeedArticleLabelElement, FeedArticleLabelElementAttributes>

export type IconProps = ElementComponentProps<IconElement, IconElementAttributes>
export type ImageProps = ElementComponentProps<ImageElement, ImageElementAttributes>

export type ListProps = ElementComponentProps<ListElement, ListElementAttributes>
export type ListItemProps = ElementComponentProps<ListItemElement, ListItemElementAttributes>

export type TooltipProps = ElementComponentProps<TooltipElement, TooltipElementAttributes>
export type TooltipArrowProps = ElementComponentProps<TooltipArrowElement, TooltipArrowElementAttributes>
export type TooltipContentProps = ElementComponentProps<TooltipContentElement, TooltipContentElementAttributes>
export type TooltipTriggerProps = ElementComponentProps<TooltipTriggerElement, TooltipTriggerElementAttributes>

/**
 * Feedback Props
 */
/** */

export type AlertProps = ElementComponentProps<AlertElement, AlertElementAttributes>

export type AlertDialogProps = ElementComponentProps<AlertDialogElement, AlertDialogElementAttributes>
export type AlertDialogDescriptionProps = ElementComponentProps<AlertDialogDescriptionElement, AlertDialogDescriptionElementAttributes>
export type AlertDialogLabelProps = ElementComponentProps<AlertDialogLabelElement, AlertDialogLabelElementAttributes>

export type DialogProps = ElementComponentProps<DialogElement, DialogElementAttributes>
export type DialogDescriptionProps = ElementComponentProps<DialogDescriptionElement, DialogDescriptionElementAttributes>
export type DialogLabelProps = ElementComponentProps<DialogLabelElement, DialogLabelElementAttributes>

export type MeterProps = ElementComponentProps<MeterElement, MeterElementAttributes>

/**
 * Input Props
 */
/** */

export type ButtonProps = ElementComponentProps<ButtonElement, ButtonElementAttributes>
export type ButtonGroupProps = ElementComponentProps<ButtonGroupElement, ButtonGroupElementAttributes>
export type CheckBoxProps = ElementComponentProps<CheckBoxElement, CheckBoxElementAttributes>
export type FormProps = ElementComponentProps<FormElement, FormElementAttributes>
export type InputProps = ElementComponentProps<InputElement, InputElementAttributes>
export type InputFileProps = ElementComponentProps<InputFileElement, InputFileElementAttributes>

export type RadioButtonProps = ElementComponentProps<RadioButtonElement, RadioButtonElementAttributes>
export type RadioGroupProps = ElementComponentProps<RadioGroupElement, RadioGroupElementAttributes>

export type SelectProps = ElementComponentProps<SelectElement, SelectElementAttributes<SelectOptionElement>>
export type SelectButtonProps = ElementComponentProps<SelectButtonElement, SelectButtonElementAttributes>
export type SelectGroupProps = ElementComponentProps<SelectGroupElement, SelectGroupElementAttributes>
export type SelectInputProps = ElementComponentProps<SelectInputElement, SelectInputElementAttributes>
export type SelectListProps = ElementComponentProps<SelectListElement, SelectListElementAttributes>
export type SelectOptionProps = ElementComponentProps<SelectOptionElement, SelectOptionElementAttributes>

export type SliderProps = ElementComponentProps<SliderElement, SliderElementAttributes>
export type SliderThumbProps = ElementComponentProps<SliderThumbElement, SliderThumbElementAttributes>

export type SwitchProps = ElementComponentProps<SwitchElement, SwitchElementAttributes>
export type TextAreaProps = ElementComponentProps<TextAreaElement, TextAreaElementAttributes>

/**
 * Layout Props
 */

export type DividerProps = ElementComponentProps<DividerElement, DividerElementAttributes>

/**
 * Navigation Props
 */

export type BreadcrumbProps = ElementComponentProps<BreadcrumbElement, BreadcrumbElementAttributes>
export type BreadcrumbListProps = ElementComponentProps<BreadcrumbListElement, BreadcrumbListElementAttributes>
export type BreadcrumbItemProps = ElementComponentProps<BreadcrumbItemElement, BreadcrumbItemElementAttributes>

export type MenuProps = ElementComponentProps<MenuElement, MenuElementAttributes<MenuItemElement>>
export type MenuButtonProps = ElementComponentProps<MenuButtonElement, MenuButtonElementAttributes>
export type MenuItemProps = ElementComponentProps<MenuItemElement, MenuItemElementAttributes>
export type MenuSubMenuProps = ElementComponentProps<MenuSubMenuElement, MenuSubMenuElementAttributes>

export type NavigationBarProps = ElementComponentProps<NavigationBarElement, NavigationBarElementAttributes>
export type NavigationBarItemProps = ElementComponentProps<NavigationBarItemElement, NavigationBarItemElementAttributes>

export type NavigationRailProps = ElementComponentProps<NavigationRailElement, NavigationRailElementAttributes>
export type NavigationRailItemProps = ElementComponentProps<NavigationRailItemElement, NavigationRailItemElementAttributes>

export type TabsProps = ElementComponentProps<TabsElement, TabsElementAttributes>
export type TabsPanelProps = ElementComponentProps<TabsPanelElement, TabsPanelElementAttributes>
export type TabsTabProps = ElementComponentProps<TabsTabElement, TabsTabElementAttributes>

/**
 * Surface Props
 */

export type AccordionProps = ElementComponentProps<AccordionElement, AccordionElementAttributes>
export type AccordionButtonProps = ElementComponentProps<AccordionButtonElement, AccordionButtonElementAttributes>
export type AccordionHeaderProps = ElementComponentProps<AccordionHeaderElement, AccordionHeaderElementAttributes>
export type AccordionPanelProps = ElementComponentProps<AccordionPanelElement, AccordionPanelElementAttributes>
export type AccordionSectionProps = ElementComponentProps<AccordionSectionElement, AccordionSectionElementAttributes>

export type DisclosureProps = ElementComponentProps<DisclosureElement, DisclosureElementAttributes>
export type DisclosureButtonProps = ElementComponentProps<DisclosureButtonElement, DisclosureButtonElementAttributes>
export type DisclosurePanelProps = ElementComponentProps<DisclosurePanelElement, DisclosurePanelElementAttributes>
export type DisclosureSectionProps = ElementComponentProps<DisclosureSectionElement, DisclosureSectionElementAttributes>
