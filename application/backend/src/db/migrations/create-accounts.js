'use strict';

module.exports = {

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Accounts');
    },

    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Accounts', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primarykey: true,
                autoIncrement: true,
            },
            balance: {
                type: Sequelize.FLOAT,
                allowNull: false,
            }
        });
    }
};