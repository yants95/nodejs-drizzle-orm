import dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config();

export default {
  schema: ["./src/db/schemas/user-schema.ts"],
  out: "./src/db/migrations",
  dbCredentials: {
    connectionString: String(process.env.DB_URL),
  },
  driver: "pg",
} satisfies Config;
