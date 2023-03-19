"use client";
import axios from "axios";
import React, { useState } from "react";
import { UserInputs } from "./UserInputs";
import { ImagePreview } from "./ImagePreview";
import FileSaver from "file-saver";

export const InputPanel = () => {
	const [userInputs, setUserInputs] = useState<TUserInput>({
		title: "",
		hashTag: "",
		description: "",
	});
	const [imageUrl, setImageUrl] = useState(
		"https://images.nightcafe.studio/jobs/nuha3SGmXAZQKkZt6QwJ/nuha3SGmXAZQKkZt6QwJ.jpg?tr=w-1600,c-at_max"
	);
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

	const handleDownloadImage = () => {
		FileSaver.saveAs(imageUrl, imageUrl);
	};

	const handleShareImage = () => {};

	return (
		<div className="mt-40 ">
			<UserInputs
				handleSubmit={handleSubmit}
				userInputs={userInputs}
				setUserInputs={setUserInputs}
				isLoading={isLoading}
			/>

			<ImagePreview imageUrl={imageUrl} isLoading={isLoading} />

			{imageUrl !== "" && (
				<div className="flex gap-2 mt-2">
					<button
						className="btn flex-1  disabled:cursor-not-allowed"
						disabled={imageUrl === ""}
						onClick={handleShareImage}
					>
						Share
					</button>
					<button
						className="btn flex-1 disabled:cursor-not-allowed"
						disabled={imageUrl === ""}
						onClick={handleDownloadImage}
					>
						Download
					</button>
				</div>
			)}
		</div>
	);
};
