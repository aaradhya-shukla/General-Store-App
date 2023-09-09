const {Sequelize} = require('sequelize');

const sequelize = require('../util/database');

const Item = sequelize.define('item',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:Sequelize.STRING,
    description:Sequelize.STRING,
    quantity:Sequelize.INTEGER,
    price:Sequelize.INTEGER,
})

module.exports=Item;