import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { user_id } = await req.json();
  const response = await axios.get(
    `https://tripcode.onrender.com/order/user_orders/${user_id}`
  );
  const data = response.data;
  return NextResponse.json(data);
}
