import * as Sequelize from "sequelize";
import database from "./Index";
import Account from "./Account";

interface ITransfer {
  id: number;
  debitedAccountId: number;
  creditedAccountId: number;
  value: number;
  createdAt: Date;
}

type ITransferCreation = Omit<ITransfer, "id" | "createdAt">;

interface ITransferRegister {
  username: string;
  value: number;
}

type ITransferReturned = ITransfer;

class Transfer extends Sequelize.Model<ITransfer, ITransferCreation> {
  declare id: number;
  declare debitedAccountId: number;
  declare creditedAccountId: number;
  declare value: number;
  declare createdAt: Date;
}

Transfer.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    debitedAccountId: Sequelize.INTEGER,
    creditedAccountId: Sequelize.INTEGER,
    value: Sequelize.FLOAT,
    createdAt: Sequelize.DATE,
  },
  {
    sequelize: database,
    tableName: "Transfers",
    timestamps: true,
    updatedAt: false,
    underscored: false,
  }
);

Transfer.belongsTo(Account, {
  foreignKey: "debitedAccountId",
  as: "debitedAccount",
});

Transfer.belongsTo(Account, {
  foreignKey: "creditedAccountId",
  as: "creditedAccount",
});

Account.hasMany(Transfer, {
  sourceKey: "id",
  foreignKey: "debitedAccountId",
});

Account.hasMany(Transfer, {
  sourceKey: "id",
  foreignKey: "creditedAccountId",
});

export default Transfer;
export { ITransfer, ITransferCreation, ITransferRegister, ITransferReturned };
