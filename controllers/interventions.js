const db = require('./db');
const config = require('../config');

const intFields = 'id, employee_id, elevator_id, column_id, battery_id, customer_id, interventionStart, interventionEnd, result, status'
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

const New = async function (interventions) {
  const result = await db.query(
    `INSERT INTO interventions 
    (employee_id, elevator_id, column_id, battery_id, building_id, customer_id, interventionStart, interventionEnd, result, status) 
    VALUES 
    ("${interventions.employee_id}", "${interventions.elevator_id}", "${interventions.column_id}", "${interventions.battery_id}", "${interventions.building_id}", "${interventions.customer_id}",  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "${interventions.result}", "${interventions.status}")`
  );

  let message = 'Error in creating intervention';

  if (result.affectedRows) {
    message = 'interventions created successfully';
  }

  return {message};
}

const UpdateStatus = async function (id, interventions) {
  const rows = await db.query(
    `UPDATE interventions 
    SET status =
      CASE 
        WHEN status = 'Pending' THEN 'Complete'
        ELSE 'Pending'
      END
      WHERE id=${id}`
  );
  message = `Updated Status`
  return {message} 
  }

  const Delete = async function (id) {
    const result = await db.query(
      `DELETE FROM interventions 
      WHERE id = ${id} `
    );
    let message = 'error deleting'
    if (result.affectedRows) {
      message = `Deleted Record`
    }
    
    return {message} 
}

module.exports = {
    getSingle, 
    getAll,
    New,
    UpdateStatus,
    Delete,
    
}