import { NextResponse } from "next/server";
import axios from "axios";

export default async function POST(req: Request) {
    try {
        const { username_or_email, password } = await req.json();

        const response = await axios.post("https://tripcode.onrender.com/auth/login", {
            username_or_email,
            password,
        })

        return NextResponse.json(response.data)
    } catch (error) {
        console.log(error)
        return NextResponse.json({"message": "Error al conectar login"})
    }
}