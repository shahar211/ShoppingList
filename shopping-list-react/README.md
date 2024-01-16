# Shopping List

## Getting Started

To set up this app, follow these steps:

1. Install dependencies:

   ```bash
   npm install

// shopping-list/src/store/middleware/api.js

In the `api.js` file located at `shopping-list/src/store/middleware/`, you will find the configuration for the API middleware. Update the following line in the code:

```javascript
const api = axios.create({
  baseURL: 'http://localhost:<your-dotnet-core-port>', // Update the port here
  // ...
});
