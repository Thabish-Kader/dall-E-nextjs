"use client";
import axios from "axios";
import React, { useState } from "react";

export const UserInputs = () => {
	const [title, setTitle] = useState("");
	const [hashTag, setHashTag] = useState("");
	const [description, setDescription] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (title === "" || hashTag === "" || description === "")
			return alert("Enter all inputs");
		setIsLoading(true);
		try {
			// function to send open ai
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_URL}/api/openai`,
				{
					title,
					hashTag,
					description,
				},
				{
					headers: { "Content-Type": "application/json" },
				}
			);
			console.log(data);
		} catch (error) {
			let message = "Unkown error";
			if (error instanceof Error) message = error.message;
			alert(message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="mt-40 ">
			<form
				onSubmit={handleSubmit}
				className="bg-openAI_Primary p-6 flex flex-col space-y-3 rounded-lg"
			>
				<div className="flex items-center space-x-3">
					<input
						type="text"
						className="input"
						placeholder="Enter tilte...."
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<input
						type="text"
						className="input"
						placeholder="#AI #OPENAI "
						value={hashTag}
						onChange={(e) => setHashTag(e.target.value)}
					/>
				</div>

				<input
					type="text"
					className="input"
					placeholder="Describe what image you want"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button className="btn flex-1">Generate</button>
			</form>
		</div>
	);
};
