import "dotenv/config";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { z } from "zod";

const url = z
  .string({ message: "No Turso Database Url" })
  .trim()
  .parse(import.meta.env.VITE_DATABASE_URL);

const authToken = z
  .string()
  .trim()
  .parse(import.meta.env.VITE_DATABASE_TOKEN);

const client = createClient({
  url,
  authToken,
});

export const db = drizzle(client);
