"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var config = {
  development: {
    username: "postgres",
    password: "gvarnes2304",
    database: "snake_game",
    host: "localhost",
    port: 5432,
    dialect: "postgres"
  },
  production: {
    username: "hsrjqskw",
    password: "UgmcEAOVGM_IafxqEVQ2uNypC3YdmlXm",
    database: "hsrjqskw",
    host: "balarama.db.elephantsql.com",
    dialect: "postgres"
  }
};
exports.config = config;