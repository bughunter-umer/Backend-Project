const db = require("../models");
const Order = db.Order;
const OrderItem = db.OrderItem;
const Product = db.Product;
const User = db.User;

// Create a new order with items
exports.create = async (req, res) => {
  try {
    const { userId, total_amount, items } = req.body;

    const order = await Order.create(
      {
        userId,
        total_amount,
        OrderItems: items, // expects [{ productId, quantity, price }]
      },
      {
        include: [OrderItem],
      }
    );

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all orders with associated User and OrderItems
exports.findAll = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: OrderItem,
          include: [Product],
        },
        {
          model: User,
          attributes: ["id", "name", "email"],
        },
      ],
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get one order by ID
exports.findOne = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [
        {
          model: OrderItem,
          include: [Product],
        },
        {
          model: User,
          attributes: ["id", "name", "email"],
        },
      ],
    });

    order
      ? res.json(order)
      : res.status(404).json({ error: "Order not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update order by ID (excluding items)
exports.update = async (req, res) => {
  try {
    const updated = await Order.update(req.body, {
      where: { id: req.params.id },
    });

    updated[0] === 1
      ? res.json({ message: "Order updated" })
      : res.status(404).json({ error: "Order not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete order and its items
exports.delete = async (req, res) => {
  try {
    // First, delete related OrderItems
    await OrderItem.destroy({ where: { orderId: req.params.id } });

    const deleted = await Order.destroy({
      where: { id: req.params.id },
    });

    deleted
      ? res.json({ message: "Order deleted" })
      : res.status(404).json({ error: "Order not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
