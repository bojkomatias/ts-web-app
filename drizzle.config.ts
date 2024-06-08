import { defineConfig } from "drizzle-kit";
// import { z } from "zod";

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/db/**/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "sqlite.db",
  },
});

/* <-- check if connecting to Turso */
// const url = z
//   .string({ message: "No Turso Database Url" })
//   .trim()
//   .parse(import.meta.env.VITE_DATABASE_URL);

// const authToken = z
//   .string()
//   .trim()
//   .parse(import.meta.env.VITE_DATABASE_TOKEN);
