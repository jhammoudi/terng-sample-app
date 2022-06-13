import express from "express";
const router = express.Router();

router.get("/health", (req, res) => {
  res.send({
    health: "UP",
  });
});

export default router;
