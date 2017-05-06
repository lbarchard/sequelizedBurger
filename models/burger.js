module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,100]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Burger;
};
