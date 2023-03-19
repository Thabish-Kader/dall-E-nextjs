import { Post } from "@prisma/client";
import Image from "next/image";
import React, { FC } from "react";

const CommunityPost: FC<Post> = ({ title, imageUrl, tags }) => {
	return (
		<article className="bg-openAI_Primary flex flex-col p-5 rounded-lg">
			<div className="relative h-[512px] w-[512px]">
				<Image src={imageUrl} alt={title} fill />
			</div>
			<h1 className="text-2xl text-white uppercase font-bold tracking-widest">
				{title}
			</h1>
			<div className="flex items-center gap-2">
				{tags.map((tag, i) => (
					<span key={i}>{tag}</span>
				))}
			</div>
		</article>
	);
};

export const Gallery: FC<GalleryProps> = ({ posts }) => {
	return (
		<section className="mt-40">
			<h1 className="text-white">Community Showcase</h1>
			<div className="grid  gap-2">
				{posts.map((post) => (
					<CommunityPost key={post.id} {...post} />
				))}
			</div>
		</section>
	);
};
