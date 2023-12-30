import { Sequelize } from 'sequelize';
import * as configuration from '../configurations/db';

const database = new Sequelize(configuration);

export default database;