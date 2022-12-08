"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = void 0;
var _sequelize = require("sequelize");
var _db = _interopRequireDefault(require("../db"));
var Player = _db["default"].define("player", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  score: {
    type: _sequelize.DataTypes.INTEGER
  }
});
exports.Player = Player;