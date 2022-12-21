const db = require('./db');
const config = require('../config');


const colFields = 'id, battery_id, type, NumOfFloorsServed, Status, Information, Notes '
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

const getColumns = async function (id) {
  const rows = await db.query(
    `SELECT ${colFields}
    FROM columns 
    Where battery_id = ${id}`
  );
  return rows
}

module.exports = {
    getSingle, 
    getAll,
    getColumns,
    
}