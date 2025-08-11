const express = require("express");
const router = express.Router();
const { createUser, getAllUsers } = require("../controllers/user.controller");

// Define the route
router.post("/createUser", createUser);
router.get("/getAllUsers", getAllUsers);

// Export the router
module.exports = router;
