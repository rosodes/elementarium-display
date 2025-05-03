
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

// Fix for shallowequal default export issue
declare module 'shallowequal' {
  function shallowEqual(objA: any, objB: any): boolean;
  export = shallowEqual;
}

// Add type definition for vite-plugin-compression
declare module 'vite-plugin-compression' {
  import { Plugin } from 'vite';
  
  interface CompressionOptions {
    algorithm?: string; // Changed to string to avoid type issues
    ext?: string;
    filter?: RegExp | ((file: string) => boolean);
    threshold?: number;
    deleteOriginFile?: boolean;
    compressionOptions?: Record<string, any>;
  }
  
  function compression(options?: CompressionOptions): Plugin;
  export default compression;
}
