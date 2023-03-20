import { Gallery } from "@/components/Gallery";
import { prisma } from "@/prisma/prisma";

async function getPosts() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	const posts = res.json();
	// const posts = await prisma.post.findMany();

	return posts;
}

const Share = async () => {
	const { posts } = await getPosts();

	return (
		<main className="max-w-5xl mx-auto">
			<Gallery posts={posts} />
		</main>
	);
};

export default Share;
