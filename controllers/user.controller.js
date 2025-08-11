const { User } = require("../models");

// Create User
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role, JoinDate, Status, phone } = req.body;

    console.log("Received user:", req.body);

    const newUser = await User.create({ name, email, password, role, JoinDate, Status , phone});

    res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
