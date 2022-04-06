
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tatuadores = sequelize.define('Tatuadores', {
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    endereco: DataTypes.STRING,
    bairro: DataTypes.STRING,
    valor_min: DataTypes.STRING
  }, {});
  Tatuadores.associate = function(models) {
    
  };
  return Tatuadores;
};