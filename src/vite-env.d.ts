
/// <reference types="vite/client" />

// Fix for react-fast-compare default export issue
declare module 'react-fast-compare' {
  const isEqual: (a: any, b: any) => boolean;
  export = isEqual;
}

// Fix for invariant default export issue
declare module 'invariant' {
  function invariant(condition: any, message?: string): asserts condition;
  export = invariant;
}
