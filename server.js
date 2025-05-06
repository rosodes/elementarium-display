
// Use import statements for ESM compatibility
import { createServer } from './src/server/createServer.js';

// Start the server with improved logging
const startServer = async () => {
  try {
    const { app } = await createServer();
    const port = process.env.PORT || 3000;
    
    app.listen(port, () => {
      console.log(`✅ Server started successfully at http://localhost:${port}`);
      console.log(`🚀 Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
