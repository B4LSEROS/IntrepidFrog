'use strict'

module.exports = {
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    },

    up: async  (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },

            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: false,
            },
            accountId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                reference: {
                    model: 'Accounts',
                    key: 'id',
                }
            }
        })
    }
}

