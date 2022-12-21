const db = require('./db');
const config = require('../config');

const battFields = 'id, employee_id, building_id, Type, Status, CommissionDate, LastInspectionDate, Information, Notes'
const getSingle = async function (id) {
    const rows = await db.query(
      `SELECT ${battFields}
      FROM batteries WHERE id=${id} `
    );
    return rows[0]
}

const getAll = async function () {
  const rows = await db.query(
    `SELECT ${battFields}
    FROM batteries `
  );
  return rows
}

module.exports = {
    getSingle, 
    getAll,
    
}