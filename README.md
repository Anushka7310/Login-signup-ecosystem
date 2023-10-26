# Login Signup Ecosystem

## Video Walkthrough

For a detailed walkthrough of the application's functionality, you can watch the following Loom video:

[**Watch the Video Walkthrough**](https://www.loom.com/share/d78a3dfd6a234c1a9e8169ec8f4cc566?sid=63beb664-72e2-4a1d-9b91-15dda1893172)
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
3. Start the backend server: `npm run server`.

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


![signupp-login-ecosystem](https://github.com/Anushka7310/Login-signup-ecosystem/assets/61081130/65854ea2-2944-4746-8db6-e160cde9e5e7)

![signup login ecosystem](https://github.com/Anushka7310/Login-signup-ecosystem/assets/61081130/cdb16d74-d929-4058-8a4b-a289909fe46e)

![login-signup ecosystem](https://github.com/Anushka7310/Login-signup-ecosystem/assets/61081130/434e5c12-1d22-404d-97b1-f367b2cce2d8)

