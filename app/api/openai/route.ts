import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function GET(request: Request) {
	// const { title, description, hashtag } = request.body;

	return NextResponse.json({ title: "this is a get request" });
}

export async function POST(request: Request) {
	const { title, hashtag, description } = await request.json();

	// const openAiResponse = await openai.createImage({
	//     prompt: description,
	//     n: 1,
	//     size: "1024x1024"
	// })

	// const imageUrl = openAiResponse.data.data[0].url

	return NextResponse.json(
		{
			imageUrl:
				"https://miro.medium.com/v2/resize:fit:1024/0*vLXNKuhovez0FFj2.png",
		},
		{ status: 200 }
	);
}
