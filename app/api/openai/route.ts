import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function GET(request: Request) {
	const posts = await prisma.post.findMany();

	return NextResponse.json({ posts }, { status: 200 });
}

export async function POST(request: Request) {
	const { description } = await request.json();

	const openAiResponse = await openai.createImage({
		prompt: description,
		n: 1,
		size: "512x512",
	});

	const imageUrl = openAiResponse.data.data[0].url;

	return NextResponse.json(
		{
			imageUrl,
		},
		{ status: 200 }
	);
}
