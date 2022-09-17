import type {
  AriaAccordionButtonElement,
  AriaAccordionButtonElementAttributes,
  AriaAccordionElement,
  AriaAccordionElementAttributes,
  AriaAccordionHeaderElement,
  AriaAccordionHeaderElementAttributes,
  AriaAccordionPanelElement,
  AriaAccordionPanelElementAttributes,
  AriaAccordionSectionElement,
  AriaAccordionSectionElementAttributes,
  AriaAlertDialogDescriptionElement,
  AriaAlertDialogDescriptionElementAttributes,
  AriaAlertDialogElement,
  AriaAlertDialogElementAttributes,
  AriaAlertDialogLabelElement,
  AriaAlertDialogLabelElementAttributes,
  AriaBreadcrumbElement,
  AriaBreadcrumbElementAttributes,
  AriaBreadcrumbListElement,
  AriaBreadcrumbListElementAttributes,
  AriaBreadcrumbListItemElement,
  AriaBreadcrumbListItemElementAttributes,
  AriaCarouselElement,
  AriaCarouselElementAttributes,
  AriaCarouselNextSlideControlElement,
  AriaCarouselNextSlideControlElementAttributes,
  AriaCarouselPreviousSlideControlElement,
  AriaCarouselPreviousSlideControlElementAttributes,
  AriaCarouselRotationControlElement,
  AriaCarouselRotationControlElementAttributes,
  AriaCarouselSlideElement,
  AriaCarouselSlideElementAttributes,
  AriaCarouselSlidesElement,
  AriaCarouselSlidesElementAttributes,
  AriaCarouselTabElement,
  AriaCarouselTabElementAttributes,
  AriaCarouselTabsElement,
  AriaCarouselTabsElementAttributes,
  AriaComboBoxButtonElement,
  AriaComboBoxButtonElementAttributes,
  AriaComboBoxElement,
  AriaComboBoxElementAttributes,
  AriaComboBoxGroupElement,
  AriaComboBoxGroupElementAttributes,
  AriaComboBoxInputElement,
  AriaComboBoxInputElementAttributes,
  AriaComboBoxListElement,
  AriaComboBoxListElementAttributes,
  AriaComboBoxOptionElement,
  AriaComboBoxOptionElementAttributes,
  AriaDialogDescriptionElement,
  AriaDialogDescriptionElementAttributes,
  AriaDialogElement,
  AriaDialogElementAttributes,
  AriaDialogLabelElement,
  AriaDialogLabelElementAttributes,
  AriaDisclosureButtonElement,
  AriaDisclosureButtonElementAttributes,
  AriaDisclosureElement,
  AriaDisclosureElementAttributes,
  AriaDisclosurePanelElement,
  AriaDisclosurePanelElementAttributes,
  AriaDisclosureSectionElement,
  AriaDisclosureSectionElementAttributes,
  AriaFeedArticleDescriptionElement,
  AriaFeedArticleDescriptionElementAttributes,
  AriaFeedArticleElement,
  AriaFeedArticleElementAttributes,
  AriaFeedArticleLabelElement,
  AriaFeedArticleLabelElementAttributes,
  AriaFeedElement,
  AriaFeedElementAttributes,
  AriaListBoxElement,
  AriaListBoxElementAttributes,
  AriaListBoxOptionElement,
  AriaListBoxOptionElementAttributes,
  AriaMenuBarElement,
  AriaMenuBarElementAttributes,
  AriaMenuBarItemElement,
  AriaMenuBarItemElementAttributes,
  AriaMenuBarSubMenuElement,
  AriaMenuBarSubMenuElementAttributes,
  AriaMenuButtonElement,
  AriaMenuButtonElementAttributes,
  AriaMenuElement,
  AriaMenuElementAttributes,
  AriaMenuItemElement,
  AriaMenuItemElementAttributes,
  AriaMenuListElement,
  AriaMenuListElementAttributes,
  AriaRadioButtonElement,
  AriaRadioButtonElementAttributes,
  AriaRadioGroupElement,
  AriaRadioGroupElementAttributes,
  AriaSliderElement,
  AriaSliderElementAttributes,
  AriaSliderThumbElement,
  AriaSliderThumbElementAttributes,
  AriaTabsElement,
  AriaTabsElementAttributes,
  AriaTabsPanelElement,
  AriaTabsPanelElementAttributes,
  AriaTabsTabElement,
  AriaTabsTabElementAttributes,
  AriaTooltipArrowElement,
  AriaTooltipArrowElementAttributes,
  AriaTooltipContentElement,
  AriaTooltipContentElementAttributes,
  AriaTooltipElement,
  AriaTooltipElementAttributes,
  AriaTooltipTriggerElement,
  AriaTooltipTriggerElementAttributes,
  AvatarElement,
  AvatarElementAttributes,
  BadgeElement,
  BadgeElementAttributes,
  ButtonElement,
  ButtonElementAttributes,
  CheckBoxElement,
  CheckBoxElementAttributes,
  ChipElement,
  ChipElementAttributes,
  DividerElement,
  DividerElementAttributes,
  FormElement,
  FormElementAttributes,
  IconElement,
  IconElementAttributes,
  ImageElement,
  ImageElementAttributes,
  InputElement,
  InputElementAttributes,
  InputFileElement,
  InputFileElementAttributes,
  ListElement,
  ListElementAttributes,
  ListItemElement,
  ListItemElementAttributes,
  MeterElement,
  MeterElementAttributes,
  NavigationBarElement,
  NavigationBarElementAttributes,
  NavigationBarItemElement,
  NavigationBarItemElementAttributes,
  NavigationRailElement,
  NavigationRailElementAttributes,
  NavigationRailItemElement,
  NavigationRailItemElementAttributes,
  SelectElement,
  SelectElementAttributes,
  SwitchElement,
  SwitchElementAttributes,
  TextAreaElement,
  TextAreaElementAttributes
} from '@queelag/web'
import { DetailedHTMLProps, HTMLAttributes } from 'preact/compat'

export interface AriaAccordionProps extends ElementProps<AriaAccordionElement, AriaAccordionElementAttributes> {}
export interface AriaAccordionButtonProps extends ElementProps<AriaAccordionButtonElement, AriaAccordionButtonElementAttributes> {}
export interface AriaAccordionHeaderProps extends ElementProps<AriaAccordionHeaderElement, AriaAccordionHeaderElementAttributes> {}
export interface AriaAccordionPanelProps extends ElementProps<AriaAccordionPanelElement, AriaAccordionPanelElementAttributes> {}
export interface AriaAccordionSectionProps extends ElementProps<AriaAccordionSectionElement, AriaAccordionSectionElementAttributes> {}

export interface AriaAlertDialogProps extends ElementProps<AriaAlertDialogElement, AriaAlertDialogElementAttributes> {}
export interface AriaAlertDialogDescriptionProps extends ElementProps<AriaAlertDialogDescriptionElement, AriaAlertDialogDescriptionElementAttributes> {}
export interface AriaAlertDialogLabelProps extends ElementProps<AriaAlertDialogLabelElement, AriaAlertDialogLabelElementAttributes> {}

export interface AriaBreadcrumbProps extends ElementProps<AriaBreadcrumbElement, AriaBreadcrumbElementAttributes> {}
export interface AriaBreadcrumbListProps extends ElementProps<AriaBreadcrumbListElement, AriaBreadcrumbListElementAttributes> {}
export interface AriaBreadcrumbListItemProps extends ElementProps<AriaBreadcrumbListItemElement, AriaBreadcrumbListItemElementAttributes> {}

export interface AriaDialogProps extends ElementProps<AriaDialogElement, AriaDialogElementAttributes> {}
export interface AriaDialogDescriptionProps extends ElementProps<AriaDialogDescriptionElement, AriaDialogDescriptionElementAttributes> {}
export interface AriaDialogLabelProps extends ElementProps<AriaDialogLabelElement, AriaDialogLabelElementAttributes> {}

export interface AriaCarouselProps extends ElementProps<AriaCarouselElement, AriaCarouselElementAttributes> {}
export interface AriaCarouselNextSlideControlProps extends ElementProps<AriaCarouselNextSlideControlElement, AriaCarouselNextSlideControlElementAttributes> {}
export interface AriaCarouselPreviousSlideControlProps
  extends ElementProps<AriaCarouselPreviousSlideControlElement, AriaCarouselPreviousSlideControlElementAttributes> {}
export interface AriaCarouselRotationControlProps extends ElementProps<AriaCarouselRotationControlElement, AriaCarouselRotationControlElementAttributes> {}
export interface AriaCarouselSlideProps extends ElementProps<AriaCarouselSlideElement, AriaCarouselSlideElementAttributes> {}
export interface AriaCarouselSlidesProps extends ElementProps<AriaCarouselSlidesElement, AriaCarouselSlidesElementAttributes> {}
export interface AriaCarouselTabProps extends ElementProps<AriaCarouselTabElement, AriaCarouselTabElementAttributes> {}
export interface AriaCarouselTabsProps extends ElementProps<AriaCarouselTabsElement, AriaCarouselTabsElementAttributes> {}

export interface AriaComboBoxProps extends ElementProps<AriaComboBoxElement, AriaComboBoxElementAttributes> {}
export interface AriaComboBoxButtonProps extends ElementProps<AriaComboBoxButtonElement, AriaComboBoxButtonElementAttributes> {}
export interface AriaComboBoxGroupProps extends ElementProps<AriaComboBoxGroupElement, AriaComboBoxGroupElementAttributes> {}
export interface AriaComboBoxInputProps extends ElementProps<AriaComboBoxInputElement, AriaComboBoxInputElementAttributes> {}
export interface AriaComboBoxListProps extends ElementProps<AriaComboBoxListElement, AriaComboBoxListElementAttributes> {}
export interface AriaComboBoxOptionProps extends ElementProps<AriaComboBoxOptionElement, AriaComboBoxOptionElementAttributes> {}

export interface AriaDisclosureProps extends ElementProps<AriaDisclosureElement, AriaDisclosureElementAttributes> {}
export interface AriaDisclosureButtonProps extends ElementProps<AriaDisclosureButtonElement, AriaDisclosureButtonElementAttributes> {}
export interface AriaDisclosurePanelProps extends ElementProps<AriaDisclosurePanelElement, AriaDisclosurePanelElementAttributes> {}
export interface AriaDisclosureSectionProps extends ElementProps<AriaDisclosureSectionElement, AriaDisclosureSectionElementAttributes> {}

export interface AriaFeedProps extends ElementProps<AriaFeedElement, AriaFeedElementAttributes> {}
export interface AriaFeedArticleProps extends ElementProps<AriaFeedArticleElement, AriaFeedArticleElementAttributes> {}
export interface AriaFeedArticleDescriptionProps extends ElementProps<AriaFeedArticleDescriptionElement, AriaFeedArticleDescriptionElementAttributes> {}
export interface AriaFeedArticleLabelProps extends ElementProps<AriaFeedArticleLabelElement, AriaFeedArticleLabelElementAttributes> {}

export interface AriaListBoxProps extends ElementProps<AriaListBoxElement, AriaListBoxElementAttributes> {}
export interface AriaListBoxOptionProps extends ElementProps<AriaListBoxOptionElement, AriaListBoxOptionElementAttributes> {}

export interface AriaMenuProps extends ElementProps<AriaMenuElement, AriaMenuElementAttributes> {}
export interface AriaMenuButtonProps extends ElementProps<AriaMenuButtonElement, AriaMenuButtonElementAttributes> {}
export interface AriaMenuItemProps extends ElementProps<AriaMenuItemElement, AriaMenuItemElementAttributes> {}
export interface AriaMenuListProps extends ElementProps<AriaMenuListElement, AriaMenuListElementAttributes> {}

export interface AriaMenuBarProps extends ElementProps<AriaMenuBarElement, AriaMenuBarElementAttributes> {}
export interface AriaMenuBarItemProps extends ElementProps<AriaMenuBarItemElement, AriaMenuBarItemElementAttributes> {}
export interface AriaMenuBarSubMenuProps extends ElementProps<AriaMenuBarSubMenuElement, AriaMenuBarSubMenuElementAttributes> {}

export interface AriaRadioButtonProps extends ElementProps<AriaRadioButtonElement, AriaRadioButtonElementAttributes> {}
export interface AriaRadioGroupProps extends ElementProps<AriaRadioGroupElement, AriaRadioGroupElementAttributes> {}

export interface AriaSliderProps extends ElementProps<AriaSliderElement, AriaSliderElementAttributes> {}
export interface AriaSliderThumbProps extends ElementProps<AriaSliderThumbElement, AriaSliderThumbElementAttributes> {}

export interface AriaTabsProps extends ElementProps<AriaTabsElement, AriaTabsElementAttributes> {}
export interface AriaTabsPanelProps extends ElementProps<AriaTabsPanelElement, AriaTabsPanelElementAttributes> {}
export interface AriaTabsTabProps extends ElementProps<AriaTabsTabElement, AriaTabsTabElementAttributes> {}

export interface AriaTooltipProps extends ElementProps<AriaTooltipElement, AriaTooltipElementAttributes> {}
export interface AriaTooltipArrowProps extends ElementProps<AriaTooltipArrowElement, AriaTooltipArrowElementAttributes> {}
export interface AriaTooltipContentProps extends ElementProps<AriaTooltipContentElement, AriaTooltipContentElementAttributes> {}
export interface AriaTooltipTriggerProps extends ElementProps<AriaTooltipTriggerElement, AriaTooltipTriggerElementAttributes> {}

export interface AvatarProps extends ElementProps<AvatarElement, AvatarElementAttributes> {}
export interface BadgeProps extends ElementProps<BadgeElement, BadgeElementAttributes> {}
export interface ButtonProps extends ElementProps<ButtonElement, ButtonElementAttributes> {}
export interface CheckBoxProps extends ElementProps<CheckBoxElement, CheckBoxElementAttributes> {}
export interface ChipProps extends ElementProps<ChipElement, ChipElementAttributes> {}
export interface DividerProps extends ElementProps<DividerElement, DividerElementAttributes> {}
export interface FormProps extends ElementProps<FormElement, FormElementAttributes> {}
export interface IconProps extends ElementProps<IconElement, IconElementAttributes> {}
export interface ImageProps extends ElementProps<ImageElement, ImageElementAttributes> {}
export interface InputProps extends ElementProps<InputElement, InputElementAttributes> {}
export interface InputFileProps extends ElementProps<InputFileElement, InputFileElementAttributes> {}
export interface ListProps extends ElementProps<ListElement, ListElementAttributes> {}
export interface ListItemProps extends ElementProps<ListItemElement, ListItemElementAttributes> {}
export interface MeterProps extends ElementProps<MeterElement, MeterElementAttributes> {}
export interface NavigationBarProps extends ElementProps<NavigationBarElement, NavigationBarElementAttributes> {}
export interface NavigationBarItemProps extends ElementProps<NavigationBarItemElement, NavigationBarItemElementAttributes> {}
export interface NavigationRailProps extends ElementProps<NavigationRailElement, NavigationRailElementAttributes> {}
export interface NavigationRailItemProps extends ElementProps<NavigationRailItemElement, NavigationRailItemElementAttributes> {}
export interface SelectProps extends ElementProps<SelectElement, SelectElementAttributes> {}
export interface SwitchProps extends ElementProps<SwitchElement, SwitchElementAttributes> {}
export interface TextAreaProps extends ElementProps<TextAreaElement, TextAreaElementAttributes> {}

export type ElementProps<Element extends HTMLElement, Attributes> = DetailedHTMLProps<HTMLAttributes<Element>, Element> & Attributes
