
import { Element, SafeElement } from '../data/elementTypes';

// Base props for element-related components
export interface BaseElementProps {
  readonly element: Element;
}

// Props for components that handle element selection
export interface ElementSelectionProps {
  readonly onElementClick: (element: Element) => void;
}

export interface ElementNavigationProps {
  readonly onElementSelect: (element: Element) => void;
}

// Props for element details components
export interface ElementDetailsProps extends BaseElementProps {
  readonly onClose: () => void;
  readonly onNavigate: (element: Element) => void;
  readonly isFullPage?: boolean;
}

// Props for periodic table components
export interface TableGridProps extends ElementSelectionProps {}

export interface TablePeriodsProps extends ElementSelectionProps {}

export interface FBlockSectionProps extends ElementSelectionProps {}

// Props for search components
export interface SearchContainerProps {
  readonly searchQuery: string;
  readonly filteredElements: readonly Element[];
  readonly onElementSelect: (element: Element) => void;
}

export interface ElementSearchProps extends SearchContainerProps {}

// Props for element property components
export interface ElementPropertyProps extends BaseElementProps {
  readonly categoryColor?: string;
}

// Props for tab components
export interface TabComponentProps extends BaseElementProps {
  readonly categoryColor?: string;
}

// Props for visualization components
export interface VisualizationProps extends BaseElementProps {}

// Header and footer component props
export interface ElementHeaderProps extends BaseElementProps {
  readonly categoryColor: string;
  readonly prevElement: SafeElement;
  readonly nextElement: SafeElement;
  readonly onClose: () => void;
  readonly onNavigate: (element: Element) => void;
  readonly isFullPage?: boolean;
}

export interface ElementFooterProps extends BaseElementProps {
  readonly prevElement: SafeElement;
  readonly nextElement: SafeElement;
  readonly onNavigate: (element: Element) => void;
}

// Period row props
export interface PeriodRowProps {
  readonly periodLabel: string;
  readonly elements: readonly React.ReactNode[];
}

// Element placeholder props
export interface ElementPlaceholderProps {
  readonly type: 'lanthanide' | 'actinide';
  readonly range: string;
}

// Empty cell props
export interface EmptyCellProps {
  readonly count?: number;
  readonly className?: string;
}
