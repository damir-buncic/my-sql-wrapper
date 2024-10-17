import mysql from "mysql2/promise";

let connection = null;

export async function connectToDb() {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
  });
}

export async function disconnect() {
  if (connection) {
    await connection.end();
  }
}

export async function sql(sqlArr, ...params) {
  try {
    const sql = sqlArr.join("?");
    const [results] = await connection.execute(sql, params);
    return results;
  } catch (err) {
    console.log(err);
  }
}
