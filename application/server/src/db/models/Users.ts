import * as Sequelize from 'sequelize';
import database from './Index';
import { DevBundlerService } from 'next/dist/server/lib/dev-bundler-service';

interface MyAccount {
    id: number;
    balance: number;
}

type AccountCreation = Omit<MyAccount, 'id'>;

type AccountReturned = AccountCreation; 

class CreatedAccount extends Sequelize.Model<MyAccount, AccountCreation> {
    declare id: number;
    declare balance: number;
}

CreatedAccount.init (
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        balance: Sequelize.FLOAT,
    },
    {
        sequelize: database,
        tableName: 'CreatedAccounts',
        timestamps: false,
        underscored: true,
    }
);

export default CreatedAccount;
export {MyAccount, AccountCreation, AccountReturned};