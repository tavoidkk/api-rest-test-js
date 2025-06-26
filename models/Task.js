const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User'); 

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
});

Task.belongsTo(User); // Crea UserId en Task
User.hasMany(Task);

module.exports = Task;
