
// This file serves as a bridge between JS and TS for prerendering functionality
// Using dynamic imports for ESM compatibility
export async function prerenderRoutes(...args) {
  try {
    const { prerenderRoutes: prerenderRoutesTs } = await import('./prerender.tsx');
    return prerenderRoutesTs(...args);
  } catch (err) {
    console.error('Failed to import prerenderRoutes from prerender.tsx:', err);
    throw err;
  }
}

// Export function for use in the build process
export default prerenderRoutes;
