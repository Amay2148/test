module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "task",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dueDate: {
        type: DataTypes.DATE,
      },
      attachment: {
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
      timestamps: false,
    }
  );

  return Task;
};
