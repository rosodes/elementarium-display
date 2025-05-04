
// Use import statements instead of require
import { createServer } from './src/server/createServer.js';

// Start the server with improved logging
createServer().then(({ app }) => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`✅ Server started successfully at http://localhost:${port}`);
    console.log(`🚀 Environment: ${process.env.NODE_ENV || 'development'}`);
  });
});
