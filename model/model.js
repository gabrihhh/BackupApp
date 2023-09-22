// userModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Importe a instância do Sequelize configurada

const registro = sequelize.define('BackupApp', {
  // Defina os campos da tabela 'User'
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique:true,
    autoIncrement:true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  comentario: {
    type:DataTypes.STRING,
    allowNull:false
  },
  horario:{
    type:DataTypes.STRING,
    allowNull:false
  }
  
});

module.exports = registro; // Exporte o modelo para uso em outros lugares do seu código
