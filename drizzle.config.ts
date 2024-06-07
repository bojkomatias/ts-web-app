import { defineConfig } from "drizzle-kit";
import { z } from "zod";

export default defineConfig({
  dialect: "sqlite",
  driver: "turso",
  schema: "./src/db/**/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: z.string().parse(process.env.DATABASE_URL),
    authToken: z.string().parse(process.env.DATABASE_TOKEN),
  },
});
