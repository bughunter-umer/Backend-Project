let orders = [
  { id: 101, customer: "Umer Daud", total: 250.0, status: "Completed", date: "2025-08-01", items: 3 },
  { id: 102, customer: "Umair Ejaz", total: 120.5, status: "Delivered", date: "2025-07-31", items: 2 },
  { id: 103, customer: "Raza Sherazi", total: 89.99, status: "Shipped", date: "2025-07-16", items: 1 },
  { id: 104, customer: "Aqib Chohan", total: 320.75, status: "Processing", date: "2025-07-17", items: 5 },
];

// Generate new ID helper
const getNextId = () => {
  return orders.length ? Math.max(...orders.map(o => o.id)) + 1 : 1;
};

exports.getAllOrders = (req, res) => {
  res.json(orders);
};

exports.getOrderById = (req, res) => {
  const id = parseInt(req.params.id);
  const order = orders.find(o => o.id === id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
};

exports.createOrder = (req, res) => {
  const { customer, total, status, date, items } = req.body;
  if (!customer || total === undefined || !status || !date || items === undefined) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const newOrder = {
    id: getNextId(),
    customer,
    total,
    status,
    date,
    items,
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
};

exports.updateOrder = (req, res) => {
  const id = parseInt(req.params.id);
  const orderIndex = orders.findIndex(o => o.id === id);
  if (orderIndex === -1) return res.status(404).json({ message: "Order not found" });

  const { customer, total, status, date, items } = req.body;
  if (!customer || total === undefined || !status || !date || items === undefined) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  orders[orderIndex] = {
    id,
    customer,
    total,
    status,
    date,
    items,
  };

  res.json(orders[orderIndex]);
};

exports.deleteOrder = (req, res) => {
  const id = parseInt(req.params.id);
  const orderIndex = orders.findIndex(o => o.id === id);
  if (orderIndex === -1) return res.status(404).json({ message: "Order not found" });

  orders.splice(orderIndex, 1);
  res.json({ message: "Order deleted successfully" });
};
