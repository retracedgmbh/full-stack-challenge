const db = require("../libs/postgres");

const sql = `
  SELECT id, name
  FROM suppliers;
`;

const list = async (ctx) => {
  const result = await db.query(sql);
  console.log("result", result);

  return result.rows;
};

module.exports = {
  list,
};
