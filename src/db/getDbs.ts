import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

// For dynamic routes
export const getDb = (env: Cloudflare.Env) => {
return drizzle(env.DB, { schema });
};

// For static routes
export const getDbAsync = async (env: Cloudflare.Env) => {
return drizzle(env.DB, { schema });
};
