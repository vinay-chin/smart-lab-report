// models/labTest.js
const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const LabTest = db.define('LabTest', {
  _id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  booking_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  collection_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  booking_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  lead_id: DataTypes.INTEGER,
  uhid: DataTypes.INTEGER,
  useruuid: DataTypes.STRING,
  test_id: DataTypes.INTEGER,
  test_code: DataTypes.STRING,
  test_name: DataTypes.STRING,
  test_values: DataTypes.JSON,
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  __hevo_id: DataTypes.STRING,
  __hevo__ingested_at: DataTypes.BIGINT,
  __hevo__loaded_at: DataTypes.BIGINT,
  __hevo__marked_deleted: DataTypes.BOOLEAN,
  __hevo__source_modified_at: DataTypes.BIGINT,
  barcode: DataTypes.STRING
});

module.exports = LabTest;
