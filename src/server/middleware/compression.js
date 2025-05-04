
import compression from 'compression';

/**
 * Configure and export compression middleware with optimal settings
 */
export function setupCompression() {
  return compression({
    level: 6, // Balance between compression ratio and speed
    threshold: 1024, // Only compress responses larger than 1KB
    filter: (req, res) => {
      // Don't compress already compressed assets
      if (req.url.endsWith('.gz') || req.url.endsWith('.br')) {
        return false;
      }
      // Use compression for all HTTP requests
      return true;
    }
  });
}
