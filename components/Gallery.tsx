import { Post } from "@prisma/client";
import Image from "next/image";
import React, { FC } from "react";

const CommunityPost: FC<Post> = ({
	title,
	author,
	authorImage,
	imageUrl,
	tag,
}) => {
	return (
		<article className="bg-openAI_Primary flex flex-col p-5 rounded-lg text-white">
			<div className="relative h-[512px] w-auto rounded-lg">
				<Image
					src={imageUrl}
					alt={title}
					fill
					className="object-contain "
				/>
			</div>
			<h1 className="text-2xl text-white uppercase font-bold tracking-widest sm:mt-2">
				{title}
			</h1>
			{/* user profile/name */}
			<div className="flex items-center space-x-3">
				<div className="relative h-12 w-12 ">
					<Image
						src={authorImage}
						alt={title}
						fill
						className="object-cover rounded-full"
					/>
				</div>
				<p>{author}</p>
			</div>
			<p className="text-yellow-500 mt-2">
				# Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Repellat error vero cumque, sed tempora suscipit facilis. Dolore
				quo saepe aut laboriosam, veritatis officia. Neque doloribus
				nostrum aliquam error eos perspiciatis!
			</p>
		</article>
	);
};

export const Gallery: FC<GalleryProps> = ({ posts }) => {
	return (
		<section className="mt-40">
			<h1 className="text-white text-5xl my-4 underline">
				Community Showcase
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
				{posts.map((post) => (
					<CommunityPost key={post.id} {...post} />
				))}
			</div>
		</section>
	);
};
