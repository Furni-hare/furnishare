"use server";

import { query } from "@/lib/db";
import bcrypt from "bcrypt";

export async function handleSignUp(data: FormData): Promise<void> {
  // Extract form data
  const fullName = data.get("fullName") as string;
  const username = data.get("username") as string;
  const password = data.get("password") as string;
  const city = data.get("location") as string;
  const venmo = data.get("venmo") as string | null;
  const cashapp = data.get("cashapp") as string | null;

  // Validate input
  if (!fullName || !username || !password || !city) {
    throw new Error("All required fields must be filled.");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert into the database
  await query(
    `INSERT INTO users (full_name, username, password, city, venmo, cashapp)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [fullName, username, hashedPassword, city, venmo, cashapp]
  );
}
