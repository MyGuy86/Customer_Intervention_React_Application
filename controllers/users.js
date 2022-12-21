const db = require('./db');
const config = require('../config');

const userFields = 'id, email'
const getSingle = async function (id) {
    const rows = await db.query(
      `SELECT ${userFields}
      FROM users WHERE id=${id} `
    );
    return rows[0]
}

const getAll = async function () {
  const rows = await db.query(
    `SELECT ${userFields}
    FROM users `
  );
  return rows
}

module.exports = {
    getSingle, 
    getAll,
    
}