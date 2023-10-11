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
} from '@aracna/web-components/elements/aria/aria-tooltip-element'

export type AriaTooltipProps = ElementComponentProps<AriaTooltipElement, AriaTooltipElementAttributes, AriaTooltipElementEventMap>
export type AriaTooltipArrowProps = ElementComponentProps<AriaTooltipArrowElement, AriaTooltipArrowElementAttributes, AriaTooltipArrowElementEventMap>
export type AriaTooltipContentProps = ElementComponentProps<AriaTooltipContentElement, AriaTooltipContentElementAttributes, AriaTooltipContentElementEventMap>
export type AriaTooltipTriggerProps = ElementComponentProps<AriaTooltipTriggerElement, AriaTooltipTriggerElementAttributes, AriaTooltipTriggerElementEventMap>

import type {
  AriaTabsElementAttributes,
  AriaTabsElementEventMap,
  AriaTabsPanelElementAttributes,
  AriaTabsPanelElementEventMap,
  AriaTabsTabElementAttributes,
  AriaTabsTabElementEventMap
} from '@aracna/web'
import type { AriaTabsElement, AriaTabsPanelElement, AriaTabsTabElement } from '@aracna/web-components/elements/aria/aria-tabs-element'

export type AriaTabsProps = ElementComponentProps<AriaTabsElement, AriaTabsElementAttributes, AriaTabsElementEventMap>
export type AriaTabsPanelProps = ElementComponentProps<AriaTabsPanelElement, AriaTabsPanelElementAttributes, AriaTabsPanelElementEventMap>
export type AriaTabsTabProps = ElementComponentProps<AriaTabsTabElement, AriaTabsTabElementAttributes, AriaTabsTabElementEventMap>

import type { AriaSwitchElementAttributes, AriaSwitchElementEventMap } from '@aracna/web'
import type { AriaSwitchElement } from '@aracna/web-components/elements/aria/aria-switch-element'

export type AriaSwitchProps = ElementComponentProps<AriaSwitchElement, AriaSwitchElementAttributes, AriaSwitchElementEventMap>

import type { AriaSliderElementAttributes, AriaSliderElementEventMap, AriaSliderThumbElementAttributes, AriaSliderThumbElementEventMap } from '@aracna/web'
import type { AriaSliderElement, AriaSliderThumbElement } from '@aracna/web-components/elements/aria/aria-slider-element'

export type AriaSliderProps = ElementComponentProps<AriaSliderElement, AriaSliderElementAttributes, AriaSliderElementEventMap>
export type AriaSliderThumbProps = ElementComponentProps<AriaSliderThumbElement, AriaSliderThumbElementAttributes, AriaSliderThumbElementEventMap>

import type {
  AriaRadioButtonElementAttributes,
  AriaRadioButtonElementEventMap,
  AriaRadioGroupElementAttributes,
  AriaRadioGroupElementEventMap
} from '@aracna/web'
import type { AriaRadioButtonElement, AriaRadioGroupElement } from '@aracna/web-components/elements/aria/aria-radio-group-element'

export type AriaRadioButtonProps = ElementComponentProps<AriaRadioButtonElement, AriaRadioButtonElementAttributes, AriaRadioButtonElementEventMap>
export type AriaRadioGroupProps = ElementComponentProps<AriaRadioGroupElement, AriaRadioGroupElementAttributes, AriaRadioGroupElementEventMap>

import type { AriaMeterElementAttributes, AriaMeterElementEventMap } from '@aracna/web'
import type { AriaMeterElement } from '@aracna/web-components/elements/aria/aria-meter-element'

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
} from '@aracna/web-components/elements/aria/aria-menu-element'

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
import type { AriaListBoxElement, AriaListBoxOptionElement } from '@aracna/web-components/elements/aria/aria-list-box-element'

export type AriaListBoxProps = ElementComponentProps<AriaListBoxElement, AriaListBoxElementAttributes<AriaListBoxOptionElement>, AriaListBoxElementEventMap>
export type AriaListBoxOptionProps = ElementComponentProps<AriaListBoxOptionElement, AriaListBoxOptionElementAttributes, AriaListBoxOptionElementEventMap>

import type { AriaLinkElementAttributes, AriaLinkElementEventMap } from '@aracna/web'
import type { AriaLinkElement } from '@aracna/web-components/elements/aria/aria-link-element'

export type AriaLinkProps = ElementComponentProps<AriaLinkElement, AriaLinkElementAttributes, AriaLinkElementEventMap>

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

import type {
  AriaDialogElementAttributes,
  AriaDialogElementEventMap,
  AriaDialogDescriptionElementAttributes,
  AriaDialogDescriptionElementEventMap,
  AriaDialogLabelElementAttributes,
  AriaDialogLabelElementEventMap
} from '@aracna/web'
import type { AriaDialogElement, AriaDialogDescriptionElement, AriaDialogLabelElement } from '@aracna/web-components/elements/aria/aria-dialog-element'

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

import type { AriaCheckBoxElementAttributes, AriaCheckBoxElementEventMap } from '@aracna/web'
import type { AriaCheckBoxElement } from '@aracna/web-components/elements/aria/aria-check-box-element'

export type AriaCheckBoxProps = ElementComponentProps<AriaCheckBoxElement, AriaCheckBoxElementAttributes, AriaCheckBoxElementEventMap>

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

import type { AriaButtonElementAttributes, AriaButtonElementEventMap } from '@aracna/web'
import type { AriaButtonElement } from '@aracna/web-components/elements/aria/aria-button-element'

export type AriaButtonProps = ElementComponentProps<AriaButtonElement, AriaButtonElementAttributes, AriaButtonElementEventMap>

import type {
  AriaBreadcrumbElementAttributes,
  AriaBreadcrumbElementEventMap,
  AriaBreadcrumbItemElementAttributes,
  AriaBreadcrumbItemElementEventMap,
  AriaBreadcrumbListElementAttributes,
  AriaBreadcrumbListElementEventMap
} from '@aracna/web'
import type { AriaBreadcrumbElement, AriaBreadcrumbItemElement, AriaBreadcrumbListElement } from '@aracna/web-components/elements/aria/aria-breadcrumb-element'

export type AriaBreadcrumbProps = ElementComponentProps<AriaBreadcrumbElement, AriaBreadcrumbElementAttributes, AriaBreadcrumbElementEventMap>
export type AriaBreadcrumbItemProps = ElementComponentProps<AriaBreadcrumbItemElement, AriaBreadcrumbItemElementAttributes, AriaBreadcrumbItemElementEventMap>
export type AriaBreadcrumbListProps = ElementComponentProps<AriaBreadcrumbListElement, AriaBreadcrumbListElementAttributes, AriaBreadcrumbListElementEventMap>

import type { AriaAlertElementAttributes, AriaAlertElementEventMap } from '@aracna/web'
import type { AriaAlertElement } from '@aracna/web-components/elements/aria/aria-alert-element'

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
} from '@aracna/web-components/elements/aria/aria-alert-dialog-element'

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

export type TooltipProps = ElementComponentProps<TooltipElement, TooltipElementAttributes, TooltipElementEventMap>
export type TooltipArrowProps = ElementComponentProps<TooltipArrowElement, TooltipArrowElementAttributes, TooltipArrowElementEventMap>
export type TooltipContentProps = ElementComponentProps<TooltipContentElement, TooltipContentElementAttributes, TooltipContentElementEventMap>
export type TooltipTriggerProps = ElementComponentProps<TooltipTriggerElement, TooltipTriggerElementAttributes, TooltipTriggerElementEventMap>

import type { ListElementAttributes, ListElementEventMap, ListItemElementAttributes, ListItemElementEventMap } from '@aracna/web'
import type { ListElement, ListItemElement } from '@aracna/web-components/elements/data/list-element'

export type ListProps = ElementComponentProps<ListElement, ListElementAttributes, ListElementEventMap>
export type ListItemProps = ElementComponentProps<ListItemElement, ListItemElementAttributes, ListItemElementEventMap>

import type { ImageElementAttributes, ImageElementEventMap } from '@aracna/web'
import type { ImageElement } from '@aracna/web-components/elements/data/image-element'

export type ImageProps = ElementComponentProps<ImageElement, ImageElementAttributes, ImageElementEventMap>

import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import type { IconElement } from '@aracna/web-components/elements/data/icon-element'

export type IconProps = ElementComponentProps<IconElement, IconElementAttributes, IconElementEventMap>

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

export type FeedProps = ElementComponentProps<FeedElement, FeedElementAttributes, FeedElementEventMap>
export type FeedArticleProps = ElementComponentProps<FeedArticleElement, FeedArticleElementAttributes, FeedArticleElementEventMap>
export type FeedArticleDescriptionProps = ElementComponentProps<
  FeedArticleDescriptionElement,
  FeedArticleDescriptionElementAttributes,
  FeedArticleDescriptionElementEventMap
>
export type FeedArticleLabelProps = ElementComponentProps<FeedArticleLabelElement, FeedArticleLabelElementAttributes, FeedArticleLabelElementEventMap>

import type { ChipElementAttributes, ChipElementEventMap } from '@aracna/web'
import type { ChipElement } from '@aracna/web-components/elements/data/chip-element'

export type ChipProps = ElementComponentProps<ChipElement, ChipElementAttributes, ChipElementEventMap>

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

import type { BadgeElementAttributes, BadgeElementEventMap } from '@aracna/web'
import type { BadgeElement } from '@aracna/web-components/elements/data/badge-element'

export type BadgeProps = ElementComponentProps<BadgeElement, BadgeElementAttributes, BadgeElementEventMap>

import type { AvatarElementAttributes, AvatarElementEventMap } from '@aracna/web'
import type { AvatarElement } from '@aracna/web-components/elements/data/avatar-element'

export type AvatarProps = ElementComponentProps<AvatarElement, AvatarElementAttributes, AvatarElementEventMap>

import type { DividerElementAttributes, DividerElementEventMap } from '@aracna/web'
import type { DividerElement } from '@aracna/web-components/elements/layout/divider-element'

export type DividerProps = ElementComponentProps<DividerElement, DividerElementAttributes, DividerElementEventMap>

import type {
  TabsElementAttributes,
  TabsElementEventMap,
  TabsPanelElementAttributes,
  TabsPanelElementEventMap,
  TabsTabElementAttributes,
  TabsTabElementEventMap
} from '@aracna/web'
import type { TabsElement, TabsPanelElement, TabsTabElement } from '@aracna/web-components/elements/navigation/tabs-element'

export type TabsProps = ElementComponentProps<TabsElement, TabsElementAttributes, TabsElementEventMap>
export type TabsPanelProps = ElementComponentProps<TabsPanelElement, TabsPanelElementAttributes, TabsPanelElementEventMap>
export type TabsTabProps = ElementComponentProps<TabsTabElement, TabsTabElementAttributes, TabsTabElementEventMap>

import type {
  NavigationRailElementAttributes,
  NavigationRailElementEventMap,
  NavigationRailItemElementAttributes,
  NavigationRailItemElementEventMap
} from '@aracna/web'
import type { NavigationRailElement, NavigationRailItemElement } from '@aracna/web-components/elements/navigation/navigation-rail-element'

export type NavigationRailProps<T extends NavigationRailItemElementAttributes = NavigationRailItemElementAttributes> = ElementComponentProps<
  NavigationRailElement,
  NavigationRailElementAttributes<T>,
  NavigationRailElementEventMap
>
export type NavigationRailItemProps = ElementComponentProps<NavigationRailItemElement, NavigationRailItemElementAttributes, NavigationRailItemElementEventMap>

import type {
  NavigationBarElementAttributes,
  NavigationBarElementEventMap,
  NavigationBarItemElementAttributes,
  NavigationBarItemElementEventMap
} from '@aracna/web'
import type { NavigationBarElement, NavigationBarItemElement } from '@aracna/web-components/elements/navigation/navigation-bar-element'

export type NavigationBarProps<T extends NavigationBarItemElementAttributes = NavigationBarItemElementAttributes> = ElementComponentProps<
  NavigationBarElement,
  NavigationBarElementAttributes<T>,
  NavigationBarElementEventMap
>
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
import type { MenuElement, MenuButtonElement, MenuItemElement, MenuSubMenuElement } from '@aracna/web-components/elements/navigation/menu-element'

export type MenuProps = ElementComponentProps<MenuElement, MenuElementAttributes<MenuItemElement>, MenuElementEventMap>
export type MenuButtonProps = ElementComponentProps<MenuButtonElement, MenuButtonElementAttributes, MenuButtonElementEventMap>
export type MenuItemProps = ElementComponentProps<MenuItemElement, MenuItemElementAttributes, MenuItemElementEventMap>
export type MenuSubMenuProps = ElementComponentProps<MenuSubMenuElement, MenuSubMenuElementAttributes, MenuSubMenuElementEventMap>

import type {
  BreadcrumbElementAttributes,
  BreadcrumbElementEventMap,
  BreadcrumbItemElementAttributes,
  BreadcrumbItemElementEventMap,
  BreadcrumbListElementAttributes,
  BreadcrumbListElementEventMap
} from '@aracna/web'
import type { BreadcrumbElement, BreadcrumbItemElement, BreadcrumbListElement } from '@aracna/web-components/elements/navigation/breadcrumb-element'

export type BreadcrumbProps = ElementComponentProps<BreadcrumbElement, BreadcrumbElementAttributes, BreadcrumbElementEventMap>
export type BreadcrumbItemProps = ElementComponentProps<BreadcrumbItemElement, BreadcrumbItemElementAttributes, BreadcrumbItemElementEventMap>
export type BreadcrumbListProps = ElementComponentProps<BreadcrumbListElement, BreadcrumbListElementAttributes, BreadcrumbListElementEventMap>

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

export type DisclosureProps = ElementComponentProps<DisclosureElement, DisclosureElementAttributes, DisclosureElementEventMap>
export type DisclosureButtonProps = ElementComponentProps<DisclosureButtonElement, DisclosureButtonElementAttributes, DisclosureButtonElementEventMap>
export type DisclosurePanelProps = ElementComponentProps<DisclosurePanelElement, DisclosurePanelElementAttributes, DisclosurePanelElementEventMap>
export type DisclosureSectionProps = ElementComponentProps<DisclosureSectionElement, DisclosureSectionElementAttributes, DisclosureSectionElementEventMap>

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

export type AccordionProps = ElementComponentProps<AccordionElement, AccordionElementAttributes, AccordionElementEventMap>
export type AccordionButtonProps = ElementComponentProps<AccordionButtonElement, AccordionButtonElementAttributes, AccordionButtonElementEventMap>
export type AccordionHeaderProps = ElementComponentProps<AccordionHeaderElement, AccordionHeaderElementAttributes, AccordionHeaderElementEventMap>
export type AccordionPanelProps = ElementComponentProps<AccordionPanelElement, AccordionPanelElementAttributes, AccordionPanelElementEventMap>
export type AccordionSectionProps = ElementComponentProps<AccordionSectionElement, AccordionSectionElementAttributes, AccordionSectionElementEventMap>

import type { MeterElementAttributes, MeterElementEventMap } from '@aracna/web'
import type { MeterElement } from '@aracna/web-components/elements/feedback/meter-element'

export type MeterProps = ElementComponentProps<MeterElement, MeterElementAttributes, MeterElementEventMap>

import type {
  DialogElementAttributes,
  DialogElementEventMap,
  DialogDescriptionElementAttributes,
  DialogDescriptionElementEventMap,
  DialogLabelElementAttributes,
  DialogLabelElementEventMap
} from '@aracna/web'
import type { DialogElement, DialogDescriptionElement, DialogLabelElement } from '@aracna/web-components/elements/feedback/dialog-element'

export type DialogProps = ElementComponentProps<DialogElement, DialogElementAttributes, DialogElementEventMap>
export type DialogDescriptionProps = ElementComponentProps<DialogDescriptionElement, DialogDescriptionElementAttributes, DialogDescriptionElementEventMap>
export type DialogLabelProps = ElementComponentProps<DialogLabelElement, DialogLabelElementAttributes, DialogLabelElementEventMap>

import type { AlertElementAttributes, AlertElementEventMap } from '@aracna/web'
import type { AlertElement } from '@aracna/web-components/elements/feedback/alert-element'

export type AlertProps = ElementComponentProps<AlertElement, AlertElementAttributes, AlertElementEventMap>

import type {
  AlertDialogElementAttributes,
  AlertDialogElementEventMap,
  AlertDialogDescriptionElementAttributes,
  AlertDialogDescriptionElementEventMap,
  AlertDialogLabelElementAttributes,
  AlertDialogLabelElementEventMap
} from '@aracna/web'
import type { AlertDialogElement, AlertDialogDescriptionElement, AlertDialogLabelElement } from '@aracna/web-components/elements/feedback/alert-dialog-element'

export type AlertDialogProps = ElementComponentProps<AlertDialogElement, AlertDialogElementAttributes, AlertDialogElementEventMap>
export type AlertDialogDescriptionProps = ElementComponentProps<
  AlertDialogDescriptionElement,
  AlertDialogDescriptionElementAttributes,
  AlertDialogDescriptionElementEventMap
>
export type AlertDialogLabelProps = ElementComponentProps<AlertDialogLabelElement, AlertDialogLabelElementAttributes, AlertDialogLabelElementEventMap>

import type { TextAreaElementAttributes, TextAreaElementEventMap } from '@aracna/web'
import type { TextAreaElement } from '@aracna/web-components/elements/input/text-area-element'

export type TextAreaProps = ElementComponentProps<TextAreaElement, TextAreaElementAttributes, TextAreaElementEventMap>

import type { SwitchElementAttributes, SwitchElementEventMap } from '@aracna/web'
import type { SwitchElement } from '@aracna/web-components/elements/input/switch-element'

export type SwitchProps = ElementComponentProps<SwitchElement, SwitchElementAttributes, SwitchElementEventMap>

import type { SliderElementAttributes, SliderElementEventMap, SliderThumbElementAttributes, SliderThumbElementEventMap } from '@aracna/web'
import type { SliderElement, SliderThumbElement } from '@aracna/web-components/elements/input/slider-element'

export type SliderProps = ElementComponentProps<SliderElement, SliderElementAttributes, SliderElementEventMap>
export type SliderThumbProps = ElementComponentProps<SliderThumbElement, SliderThumbElementAttributes, SliderThumbElementEventMap>

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

export type SelectProps = ElementComponentProps<SelectElement, SelectElementAttributes<SelectOptionElement>, SelectElementEventMap>
export type SelectButtonProps = ElementComponentProps<SelectButtonElement, SelectButtonElementAttributes, SelectButtonElementEventMap>
export type SelectGroupProps = ElementComponentProps<SelectGroupElement, SelectGroupElementAttributes, SelectGroupElementEventMap>
export type SelectInputProps = ElementComponentProps<SelectInputElement, SelectInputElementAttributes, SelectInputElementEventMap>
export type SelectListProps = ElementComponentProps<SelectListElement, SelectListElementAttributes, SelectListElementEventMap>
export type SelectOptionProps = ElementComponentProps<SelectOptionElement, SelectOptionElementAttributes, SelectOptionElementEventMap>

import type { RadioGroupElementAttributes, RadioGroupElementEventMap, RadioButtonElementAttributes, RadioButtonElementEventMap } from '@aracna/web'
import type { RadioGroupElement, RadioButtonElement } from '@aracna/web-components/elements/input/radio-group-element'

export type RadioGroupProps = ElementComponentProps<RadioGroupElement, RadioGroupElementAttributes, RadioGroupElementEventMap>
export type RadioButtonProps = ElementComponentProps<RadioButtonElement, RadioButtonElementAttributes, RadioButtonElementEventMap>

import type { InputFileElementAttributes, InputFileElementEventMap } from '@aracna/web'
import type { InputFileElement } from '@aracna/web-components/elements/input/input-file-element'

export type InputFileProps = ElementComponentProps<InputFileElement, InputFileElementAttributes, InputFileElementEventMap>

import type { InputElementAttributes, InputElementEventMap } from '@aracna/web'
import type { InputElement } from '@aracna/web-components/elements/input/input-element'

export type InputProps = ElementComponentProps<InputElement, InputElementAttributes, InputElementEventMap>

import type { FormElementAttributes, FormElementEventMap } from '@aracna/web'
import type { FormElement } from '@aracna/web-components/elements/input/form-element'

export type FormProps = ElementComponentProps<FormElement, FormElementAttributes, FormElementEventMap>

import type { CheckBoxElementAttributes, CheckBoxElementEventMap } from '@aracna/web'
import type { CheckBoxElement } from '@aracna/web-components/elements/input/check-box-element'

export type CheckBoxProps = ElementComponentProps<CheckBoxElement, CheckBoxElementAttributes, CheckBoxElementEventMap>

import type { ButtonGroupElementAttributes, ButtonGroupElementEventMap } from '@aracna/web'
import type { ButtonGroupElement } from '@aracna/web-components/elements/input/button-group-element'

export type ButtonGroupProps<T extends ButtonElementAttributes = ButtonElementAttributes> = ElementComponentProps<
  ButtonGroupElement,
  ButtonGroupElementAttributes<T>,
  ButtonGroupElementEventMap
>

import type { ButtonElementAttributes, ButtonElementEventMap } from '@aracna/web'
import type { ButtonElement } from '@aracna/web-components/elements/input/button-element'

export type ButtonProps = ElementComponentProps<ButtonElement, ButtonElementAttributes, ButtonElementEventMap>
