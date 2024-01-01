// Definition and initialization of the database model for individual accounts utilizing sequelize.

import database from "./Index";
import * as Sequelize from "sequelize";

interface Accounts {
  id: number;
  balance: number;
}

type AccountCreation = Omit<Accounts, "id">;
type AccountReturned = Accounts;

class Account extends Sequelize.Model<Accounts, AccountCreation> {
  declare id: number;
  declare balance: number;
}

Account.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    balance: Sequelize.FLOAT,
  },
  {
    sequelize: database,
    tableName: "Existing Accounts",
    timestamps: false,
    underscored: false,
  }
);

export default Account;
export { Accounts, AccountCreation, AccountReturned };
