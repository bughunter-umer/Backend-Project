module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    customername: { type: DataTypes.INTEGER, allowNull: false },
    Customeremail: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    CustomerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders', // This references the table name for Category model
        key: 'id', // This references the id column of the Category model
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products', // This references the table name for Category model
        key: 'id', // This references the id column of the Category model
      },
    },

  });
  return Customer;
};
