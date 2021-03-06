// Load environment variables
import dotenv from "dotenv";
dotenv.config();

// Import dependencies
import express from "express";
import cors from "cors";
import compression from "compression";
import path from "path";

import router from "./routes";
import { setupApolloServer } from "./graphql/";

// Initialise app
const app = express();
app.set("port", process.env.PORT || 3001);

// Middleware
app.use(express.static(path.join(__dirname, "./frontend")));
app.use(cors());
app.use(compression()); // compress response bodies
app.use(express.json()); // support JSON-encoded bodies
app.use(
  express.urlencoded({
    // support URL-encoded bodies
    extended: true,
  })
);

setupApolloServer(app);

// Routes
app.use("/api", router);

process.env.NODE_ENV === "production" &&
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "./frontend/index.html"), function (err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });

export default app;
