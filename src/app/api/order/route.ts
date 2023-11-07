import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      type_project,
      fullname,
      email,
      phone,
      token,
      user,
      meeting_day,
      meeting,
      developer,
    } = await req.json();

    const response = await axios.post(
      "https://tripcode.onrender.com/order/create",
      {
        type_project,
        fullname,
        email,
        phone,
        meeting,
        meeting_day,
        developer,
        user,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return NextResponse.json(response.data.message);
  } catch (error) {
    console.error(error);
  }
}
