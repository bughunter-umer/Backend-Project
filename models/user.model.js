module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    JoinDate: {
      type: DataTypes.STRING, // could use DataTypes.DATE if you want actual date type
      allowNull: false,
    },
    Status: {
      type: DataTypes.STRING, // could use DataTypes.DATE if you want actual date type
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING, // could use DataTypes.DATE if you want actual date type
      allowNull: false,
    }
  });

  return User;
};
