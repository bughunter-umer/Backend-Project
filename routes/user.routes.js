const express = require("express");
const router = express.Router();
const { createUser, getAllUsers, deleteUser, updateUser } = require("../controllers/user.controller");

// Define the route
router.post("/createUser", createUser);
router.get("/getAllUsers", getAllUsers);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);

// Export the router
module.exports = router;
