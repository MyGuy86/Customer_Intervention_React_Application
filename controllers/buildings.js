const db = require('./db');
const config = require('../config');

const buildFields = 'id, customer_id, address_id, FullNameOfBuildingAdmin, EmailOfAdminOfBuilding, PhoneNumOfBuildingAdmin, FullNameOfTechContactForBuilding, TechContactEmailForBuilding, TechContactPhoneForBuilding'
const battFields = 'id, employee_id, building_id, Type, Status, CommissionDate, LastInspectionDate, Information, Notes'

const getSingle = async function (id) {
    const rows = await db.query(
      `SELECT ${buildFields}
      FROM buildings WHERE id=${id} `
    );
    return rows[0]
}

const getAll = async function () {
  const rows = await db.query(
    `SELECT ${buildFields}
    FROM buildings `
  );
  return rows
}

const getBatteries = async function (id) {
  const rows = await db.query(
    `SELECT ${battFields}
    FROM batteries
    Where building_id = ${id}`
  );
  return rows
}



module.exports = {
    getSingle, 
    getAll,
    getBatteries,
    
}