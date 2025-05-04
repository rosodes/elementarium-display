
// Use import statements instead of require
import { createServer } from './src/server/createServer.js';

// Start the server
createServer().then(({ app }) => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
});
