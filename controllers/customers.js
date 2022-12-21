const db = require('./db');
const config = require('../config');

const custFields = 'id, user_id, address_id, CompanyName, FullNameOfCompanyContact, CompanyContactPhone, CompanyContactEMail, FullNameServiceTechAuth, TechAuthPhoneService, TechManagerEmailService'
const getSingle = async function (id) {
    const rows = await db.query(
      `SELECT ${battFields}
      FROM customers WHERE id=${id} `
    );
    return rows[0]
}

const getAll = async function () {
  const rows = await db.query(
    `SELECT ${custFields}
    FROM customers `
  );
  return rows
}

module.exports = {
    getSingle, 
    getAll,
    
}