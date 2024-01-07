import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DB_URL,
});

client.connect();

export const drizzleDb = drizzle(client);
