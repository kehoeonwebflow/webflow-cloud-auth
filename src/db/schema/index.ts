// Import the necessary Drizzle ORM functions
import { sqliteTable, text, int } from "drizzle-orm/sqlite-core";

// Define the users table with the following fields:
// - id: The primary key of the table
// - name: The name of the user
// - age: The age of the user
// - email: The email of the user

export const usersTable = sqliteTable("users_table", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    age: int().notNull(),
    email: text().notNull().unique(),
});
