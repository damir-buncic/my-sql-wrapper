Simple MySql Wrapper demo inspired by [vercel-postgres](https://vercel.com/docs/storage/vercel-postgres/sdk)

Wrapper is using tagged templates to build and execute the query

Example:

```
const role = "ADMIN";
const res = await sql`SELECT id, username FROM users WHERE role = ${role}`;
```
becomes

```
mySqlConnection.execute("SELECT id, username FROM users WHERE role = ?", ["ADMIN]);
```