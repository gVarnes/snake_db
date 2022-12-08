import { DataTypes } from "sequelize";
import sequelize from "../db";

export const Player = sequelize.define("player", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
  },
});
