# TERNG Sample App

The TERNG stack contains popular technologies for building a modern single-page application.

- **React**: A JavaScript front-end library for building user interfaces.
- **Node.js**: JavaScript run-time environment that executes JavaScript code outside of a browser (such as a server).
- **Express**: A web application framework for Node.js.
- **Typescript**: Strict syntactical superset of JavaScript and adds optional static typing
- **GraphQL**: Data query and manipulation language for APIs, using Apollo GraphQL.

## Getting Started

### Installing

Clone repository:

```
git clone https://github.com/jhammoudi/terng-sample-app.git
cd terng-sample-app
```

## Configure Environment variables

To create your `.env` file, copy the `.env.example` file to `.env`.

To do this, run the following command in the root project folder.

```
cp .env.example .env
```

When adding variables to your `.env` file, make sure to also add the variable names to your `.env.example`, since your `.env` file will be ignored by git.

## Run locally

1. Install the backend npm dependencies

   ```
   npm install
   ```

   Install the frontend npm dependencies

   ```
   npm install --prefix frontend
   ```

2. Run the below command to start application in development mode.

   ```
   npm run start-dev
   ```

3. To run a production build, run the following commands.
   ```
   npm run build
   npm start
   ```
