import { Sequelize } from "sequelize";

const env = config[process.env.NODE_ENV || "development"];
const sequelize = new Sequelize(env.username, env.database, env.password, env);

export default sequelize;
