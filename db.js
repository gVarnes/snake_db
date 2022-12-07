import { Sequelize } from "sequelize";
import { config } from "./config/index";
import * as dotenv from "dotenv";

dotenv.config();

const env = config[process.env.NODE_ENV || "development"];
const sequelize = new Sequelize(env.database, env.username, env.password, env);

export default sequelize;
