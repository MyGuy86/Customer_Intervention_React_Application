const db = require('./db');
const config = require('../config');

const eleFields = 'id, column_id, Model, Type, Status, Information, Notes'
const getSingle = async function (id) {
    const rows = await db.query(
      `SELECT ${eleFields}
      FROM elevators WHERE id=${id} `
    );
    return rows[0]
}

const getAll = async function () {
  const rows = await db.query(
    `SELECT ${eleFields}
    FROM elevators `
  );
  return rows
}

module.exports = {
    getSingle, 
    getAll,
    
}