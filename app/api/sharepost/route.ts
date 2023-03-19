import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { title, imageUrl, tag } = await request.json();

	const data = await prisma.post.create({
		data: {
			title,
			imageUrl,
			tag,
		},
	});

	return NextResponse.json({ data }, { status: 200 });
}
