
/// <reference types="vite/client" />

// Add window.__REACT_QUERY_STATE__ for SSR hydration
interface Window {
  __REACT_QUERY_STATE__?: any;
}
