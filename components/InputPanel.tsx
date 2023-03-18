"use client";
import axios from "axios";
import React, { useState } from "react";
import { UserInputs } from "./UserInputs";
import { ImagePreview } from "./ImagePreview";

export const InputPanel = () => {
	const [userInputs, setUserInputs] = useState<TUserInput>({
		title: "",
		hashTag: "",
		description: "",
	});
	const [imageUrl, setImageUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (
			userInputs.title === "" ||
			userInputs.hashTag === "" ||
			userInputs.description === ""
		)
			return alert("Enter all inputs");
		setIsLoading(true);
		try {
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_URL}/api/openai`,
				{
					title: userInputs.title,
					hashTag: userInputs.hashTag,
					description: userInputs.description,
				},
				{
					headers: { "Content-Type": "application/json" },
				}
			);
			setImageUrl(data);
		} catch (error) {
			let message = "Unkown error";
			if (error instanceof Error) message = error.message;
			alert(message);
		} finally {
			setIsLoading(false);
		}
		setUserInputs({
			title: "",
			hashTag: "",
			description: "",
		});
	};

	return (
		<div className="mt-40 ">
			<UserInputs
				handleSubmit={handleSubmit}
				userInputs={userInputs}
				setUserInputs={setUserInputs}
				isLoading={isLoading}
			/>

			<ImagePreview imageUrl={imageUrl} isLoading={isLoading} />
		</div>
	);
};
