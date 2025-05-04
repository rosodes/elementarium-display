
// This file is a bridge between JS and TS for prerender functionality
import { prerenderRoutes } from './prerender.tsx';

// Export the function for use in build process
export { prerenderRoutes };
export default prerenderRoutes;
