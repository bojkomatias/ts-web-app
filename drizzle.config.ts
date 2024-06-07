import { defineConfig } from "drizzle-kit";
import { z } from "zod";

const url = z
  .string({ message: "No Turso Database Url" })
  .trim()
  .parse(import.meta.env.VITE_DATABASE_URL);

const authToken = z
  .string()
  .trim()
  .parse(import.meta.env.VITE_DATABASE_TOKEN);

export default defineConfig({
  dialect: "sqlite",
  driver: "turso",
  schema: "./src/db/**/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url,
    authToken,
  },
});
