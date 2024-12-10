# Master Data Functions Deployment

This repository contains code for deploying the master data function into firebase. Follow the steps below to set up and deploy the function.

## Prerequisites

- [Node.js](https://nodejs.org/) installed.

## Steps to Deploy

1. Clone the repository
   ```bash
   git clone https://github.com/Ques-Store/ques-store-masterdata-function.git

2. Navigate to the functions directory
   ```bash
   cd functions

3. Install the Firebase CLI globally
   ```bash
   npm install -g firebase-tools

4. Install necessary dependencies
   ```bash
   npm install 

5. Deploy the functions to firebase
   ```bash
   firebase deploy --only functions

## Test the deployed function 
   ```bash
   curl --location 'https://us-central1-ques-store.cloudfunctions.net/masterdataApi/graphql'
   --header 'Content-Type: application/json'
   --data '{"query":"{ masterData { data } }","variables":{}}'

