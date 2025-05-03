
/**
 * Simple prerender function for SSR static generation
 */
export async function prerenderRoutes(outputDir) {
  console.log('Prerendering routes to:', outputDir);
  // Simple implementation - production code would handle the actual prerendering
  return Promise.resolve();
}

export default prerenderRoutes;
