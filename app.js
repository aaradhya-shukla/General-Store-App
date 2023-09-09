const express = require('express');

const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const manager = require('./routes/manager');

var cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/user',manager);

sequelize.sync().
then(()=>{
    app.listen(3000);
}).catch(err=>console.log(err))