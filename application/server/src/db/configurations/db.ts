import 'dotenv/config';
import {Options} from 'sequelize';

const configurations: Options = {
    username: process.env.USER_DB || 'root',
    password: process.env.PASS_DB || 'password',
    database: 'DIGITALWALLET',
    host: process.env.HOST_DB || 'localhost',
    dialect: 'postgres',
    port: Number(process.env.PORT_DB) || 5432,
    logging: false,
}

module.exports = configurations;