const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

const models = require("./modelData/models");
app.use(cors());
app.use(express.json());
const path = require('path');
app.use("/images", express.static(path.join(__dirname, "images")));

// Test API
app.get("/test/info", (req, res) => {
  res.json(models.schemaInfo());
});

// List all users
app.get("/user/list", (req, res) => {
  res.json(models.userListModel());
});

// User details
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = models.userModel(id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// Photos of user
app.get("/photosOfUser/:id", (req, res) => {
  const id = req.params.id;
  const photos = models.photoOfUserModel(id);
  res.json(photos);
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});