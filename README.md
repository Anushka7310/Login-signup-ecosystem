# xeroCodee-assignment
## Project Overview

The project consists of two main steps:

### Step 1: Login System
- Sign Up and Sign In functionality with secure JWT-based authentication.
- Social login with GitHub OAuth and Google.
- Utilizes Redis and DynamoDB/MongoDB as the backend databases.

### Step 2: Dashboard
- Users can choose a cloud provider (e.g., AWS, GCP) with a slide-in effect and a progress bar.
- Depending on the cloud provider choice, users can select specific options with slide-down animations and progress bar updates.
- Finalize the selection and complete the process with another slide-down animation.

## Running the Application

To run the project locally, follow these steps:

### Frontend (Client)
1. Navigate to the `client` directory: `cd client`.
2. Install dependencies: `npm install`.
3. Start the development server: `npm run dev`.

### Backend (Server)
1. Navigate to the `server` directory: `cd server`.
2. Install dependencies: `npm install`.
3. Start the backend server: `npm start`.

## Setting Up Credentials

To run the application successfully, you need to set up your credentials. Create a `.env` file in the project root directory and add the following placeholders for your credentials:

```dotenv
# .env

MONGO_URL=your-mongodb-uri
JWT_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

## Access the Deployed Application

You can access the deployed version of this application by following the link below:

[**Open the Application**](https://xerocodee-ef638.web.app)

Feel free to explore and interact with the live version of the project without the need to set up a local environment.
