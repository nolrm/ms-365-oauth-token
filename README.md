# MS 365 OAuth Token Validation with Node.js and Express

This project is a simple Node.js server that validates Microsoft 365 OAuth tokens using the Microsoft Graph API. It provides an endpoint to verify if an access token is valid and retrieves user information.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
   
2. Start the server:
    node index.js

4. The server will run on http://localhost:3000.

### Endpoint
POST /validate-token: Validates the provided OAuth token and returns user information if valid.