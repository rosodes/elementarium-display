
// Utility types for better type safety and reusability

// Make all properties of T optional and readonly
export type PartialReadonly<T> = Partial<Readonly<T>>;

// Make specific keys K of T required
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Extract specific keys from T
export type PickRequired<T, K extends keyof T> = Required<Pick<T, K>>;

// Omit specific keys and make the rest optional
export type OmitAndPartial<T, K extends keyof T> = Partial<Omit<T, K>>;

// Type for function that doesn't return anything
export type VoidFunction = () => void;

// Type for function that takes one parameter and doesn't return anything
export type ActionFunction<T> = (param: T) => void;

// Type for async functions
export type AsyncFunction<T = void> = () => Promise<T>;
export type AsyncActionFunction<T, R = void> = (param: T) => Promise<R>;

// Type for event handlers
export type EventHandler<T = Event> = (event: T) => void;
export type KeyboardEventHandler = EventHandler<KeyboardEvent>;
export type MouseEventHandler = EventHandler<MouseEvent>;

// Type for React component children
export type ReactChildren = React.ReactNode | readonly React.ReactNode[];

// Type for HTML element refs
export type ElementRef<T extends HTMLElement = HTMLElement> = React.RefObject<T>;

// Type for CSS class names
export type ClassName = string | undefined;
export type ClassNameProp = { readonly className?: ClassName };

// Type for common component props
export interface BaseComponentProps extends ClassNameProp {
  readonly children?: ReactChildren;
  readonly id?: string;
  readonly 'aria-label'?: string;
  readonly 'aria-labelledby'?: string;
  readonly 'aria-describedby'?: string;
  readonly role?: string;
  readonly tabIndex?: number;
}

// Type for components with loading state
export interface LoadingState {
  readonly isLoading: boolean;
  readonly error?: string | null;
}

// Type for components with async data
export interface AsyncComponentState<T> extends LoadingState {
  readonly data?: T | null;
}

// Type for search functionality
export interface SearchState {
  readonly query: string;
  readonly results: readonly unknown[];
  readonly isSearching: boolean;
}

// Type for navigation state
export interface NavigationState {
  readonly currentIndex: number;
  readonly canGoBack: boolean;
  readonly canGoForward: boolean;
}

// Type guards utility
export type TypeGuard<T> = (value: unknown) => value is T;

// Helper type for creating strict object types
export type StrictRecord<K extends string | number | symbol, V> = Record<K, V>;

// Type for color values in the app
export type ColorValue = `#${string}` | `rgb(${string})` | `rgba(${string})` | string;

// Type for size values
export type SizeValue = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Type for theme values
export type ThemeValue = 'light' | 'dark' | 'system';
