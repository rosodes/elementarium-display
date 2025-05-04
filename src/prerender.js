
// This file serves as a bridge between JS and TS for prerendering functionality
// Using dynamic imports for ESM compatibility

/**
 * Prerender routes with proper ESM imports
 * @param {string} outDir - The output directory for prerendered pages
 * @returns {Promise<void>} - Promise resolving when prerendering is complete
 */
export async function prerenderRoutes(outDir) {
  try {
    // Use dynamic import for ESM compatibility
    const { prerenderRoutes: prerenderRoutesTs } = await import('./prerender.tsx');
    return prerenderRoutesTs(outDir);
  } catch (err) {
    console.error('Failed to import prerenderRoutes from prerender.tsx:', err);
    throw err;
  }
}

// Export function for use in the build process
export default prerenderRoutes;
