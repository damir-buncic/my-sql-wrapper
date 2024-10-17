import { connectToDb, sql, disconnect } from "./wrapper.js";

async function getUsersByRole(role) {
  await connectToDb();

  const res = await sql`SELECT id, username FROM users WHERE role = ${role}`;
  console.log(res);

  await disconnect();
}

getUsersByRole("ADMIN");
