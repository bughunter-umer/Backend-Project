module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    order_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    total_amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', // This references the table name for Category model
        key: 'id', // This references the id column of the Category model
      },
    },
  });
  return Order;
};
