const db = require('./db');
const config = require('../config');

const colFields = 'id, battery_id, type, NumOfFloorsServed, Status, Information, Notes '
const eleFields = 'id, column_id, Model, Type, Status, Information, Notes'

const getSingle = async function (id) {
    const rows = await db.query(
      `SELECT ${colFields}
      FROM columns WHERE id=${id} `
    );
    return rows[0]
}

const getAll = async function () {
  const rows = await db.query(
    `SELECT ${colFields}
    FROM columns `
  );
  return rows
}

const getElevators = async function (id) {
  const rows = await db.query(
    `SELECT ${eleFields}
    FROM elevators 
    Where column_id = ${id}`
  );
  return rows
}

module.exports = {
    getSingle, 
    getAll,
    getElevators,
    
}