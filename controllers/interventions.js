const db = require('./db');
const config = require('../config');

const intFields = 'id, author_id,employee_id, elevator_id, column_id, battery_id, customer_id, interventionStart, interventionEnd, result, status'
const getSingle = async function (id) {
    const rows = await db.query(
      `SELECT ${intFields}
      FROM interventions WHERE id=${id} `
    );
    return rows[0]
}

const getAll = async function () {
  const rows = await db.query(
    `SELECT ${intFields}
    FROM interventions `
  );
  return rows
}

module.exports = {
    getSingle, 
    getAll,
    
}