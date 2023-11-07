import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { username_or_email, password } = await req.json();

    const response = await axios.post("https://tripcode.onrender.com/auth/login", {
      username_or_email,
      password,
    });

    const token = response.data.token;

    if (token) {
      const detailsUser = await axios.post(
        "https://tripcode.onrender.com/auth/verify/token",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return NextResponse.json({ token, detailsUser: detailsUser.data });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error al conectar login" });
  }
}
