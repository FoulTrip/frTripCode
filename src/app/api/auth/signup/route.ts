import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, password, email } = await req.json();

    const response = await axios.post("https://tripcode.onrender.com/auth/register", {
      username,
      password,
      email,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
  }
}
