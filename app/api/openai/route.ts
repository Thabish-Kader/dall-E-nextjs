import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
	// const { title, description, hashtag } = request.body;

	return NextResponse.json({ title: "this is a post request" });
}

export async function POST(request: Request) {
	const { title, hashtag, description } = await request.json();

	return NextResponse.json({ description });
}
