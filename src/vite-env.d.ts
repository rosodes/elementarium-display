
/// <reference types="vite/client" />

// Fix for react-fast-compare default export issue
declare module 'react-fast-compare' {
  const isEqual: (a: any, b: any) => boolean;
  export = isEqual;
}
