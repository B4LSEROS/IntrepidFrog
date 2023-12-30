/*
    Documentation 📓:

    - dotenv: used to easily store and access our environment variables (e.g. passwords).

    - sequelize facilitates our relationship with the database through an ORM (objet-relational mapping): javaScript comes to play instead of directly writing SQL queries.
    
    - Options object gives us further access to many properties to configure our database.
*/

import 'dotenv/config';
import { Options } from 'sequelize';

const configurations: Options = {
    username: process.env.USER_DB || 'root',
    password: process.env.PASS_DB || 'password',
    database:  'BANKINGAPP',
    host: process.env.HOST_DB || 'localhost',
    dialect: 'postgres',
    port: Number(process.env.PORT_DB) || 5432,
    logging: false,
}

module.exports = configurations;