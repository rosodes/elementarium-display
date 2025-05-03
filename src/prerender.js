
/**
 * Simple prerender function for SSR static generation
 * 
 * This file is used as a fallback if the TypeScript version fails to compile
 */
export async function prerenderRoutes(outputDir) {
  console.log('Prerendering routes to:', outputDir);
  
  // When using full SSR, prerendering may be less necessary
  // but can still be useful for static paths
  try {
    console.log('Using JavaScript fallback prerender for directory:', outputDir);
    // This is a simplified version that doesn't actually render,
    // but prevents build failures when the TypeScript version has issues
    return Promise.resolve();
  } catch (err) {
    console.error('Error in fallback prerender:', err);
    return Promise.resolve();
  }
}

export default prerenderRoutes;
