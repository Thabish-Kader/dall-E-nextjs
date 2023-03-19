import { Gallery } from "@/components/Gallery";

// async function getData() {
// 	const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
// 		next: { revalidate: 120 },
// 	});

// 	if (!res.ok) {
// 		throw new Error("Failed to fetch data");
// 	}

// 	return res.json();
// }

const Share = async () => {
	// const { posts } = await getData();
	// DUMMY DATA
	const posts = [
		{
			postId: "1",
			title: "night",
			imageUrl:
				"https://images.nightcafe.studio/jobs/nuha3SGmXAZQKkZt6QwJ/nuha3SGmXAZQKkZt6QwJ.jpg?tr=w-1600,c-at_max",
			tags: ["#night", "#ai"],
		},
		{
			postId: "2",
			title: "greenLantern",
			imageUrl:
				"https://davidwaltonfiction.files.wordpress.com/2022/10/2979412993_young_handsome_asian_man_dinosaur_bones_in_green_smoke__head_and_shoulders_portrait__8k_resolution_concept_art_portrait_by_greg_rutkowski__artgerm__wlop__alphonse_mucha_dynami.png",
			tags: ["#green", "#lantern"],
		},
	];

	return (
		<main className="max-w-5xl mx-auto">
			{/*  */}
			<Gallery posts={posts} />
		</main>
	);
};

export default Share;
