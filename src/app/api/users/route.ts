import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db/getDbs";
import { usersTable } from "@/db/schema";

type UserInput = {
name: string;
age: number;
email: string;
};

export async function POST(request: NextRequest) {
const db = getDb(process.env as any);
const { name, age, email }: UserInput = await request.json();
try {
    const newUser = await db
    .insert(usersTable)
    .values({ name, age, email })
    .returning();
    return NextResponse.json(newUser[0], { status: 201 });
} catch (error) {
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
}
}

export async function GET(request: NextRequest) {
    const db = getDb(process.env as any);
    try {
      const users = await db.select().from(usersTable);
      return NextResponse.json(users, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to fetch users" },
        { status: 500 }
      );
    }
  }
  
