import { NextResponse } from "next/server";
import axios from "axios";

const FEAPI = '/page/getopensection'

export async function POST(request) {
  try {
    const origin = request.headers.get("origin");

    const allowedOrigin = process.env.ALLOWED_ORIGINS;

    if (origin !== allowedOrigin && allowedOrigin !== '*') {
      return NextResponse.json(
        { error: "Forbidden: Requests from this origin are not allowed." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const response = await axios.post(process.env.API_ENDPOINT + FEAPI, body);

    if (response?.data) {
      return NextResponse.json(response.data);
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
