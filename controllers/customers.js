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

const New = async function (customers) {
  const result = await db.query(
    `INSERT INTO customers 
    (user_id, address_id, CompanyName, FullNameOfCompanyContact, CompanyContactPhone, CompanyContactEMail, FullNameServiceTechAuth, TechAuthPhoneService, TechManagerEmailService, created_at, updated_at) 
    VALUES 
    (${customers.user_id}, ${customers.address_id}, "${customers.CompanyName}", "${customers.FullNameOfCompanyContact}", "${customers.CompanyContactPhone}", "${customers.CompanyContactEMail}", "${customers.FullNameServiceTechAuth}", "${customers.TechAuthPhoneService}", "${customers.TechManagerEmailService}", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`
  );
  

  let message = 'Error in creating customers';

  if (result.affectedRows) {
    message = 'customers created successfully';
  }

  return {message};
}



module.exports = {
    getSingle, 
    getAll,
    New,
    
}