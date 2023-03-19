"use client";
import axios from "axios";
import React, { useState } from "react";
import { UserInputs } from "./UserInputs";
import { ImagePreview } from "./ImagePreview";
import FileSaver from "file-saver";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export const InputPanel = () => {
	const router = useRouter();
	const [userInputs, setUserInputs] = useState<TUserInput>({
		title: "",
		tag: "",
		description: "",
	});
	const [userInputCache, setuserInputCache] = useState({
		title: "",
		tag: "",
		description: "",
	});
	const [imageUrl, setImageUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			userInputs.title === "" ||
			userInputs.tag === "" ||
			userInputs.description === ""
		)
			return alert("Enter all inputs");
		setIsLoading(true);
		try {
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_URL}/api/openai`,
				{
					description: userInputs.description,
				},
				{
					headers: { "Content-Type": "application/json" },
				}
			);
			setImageUrl(data.imageUrl);
		} catch (error) {
			let message = "Unkown error";
			if (error instanceof Error) message = error.message;
			alert(message);
		} finally {
			setIsLoading(false);
		}

		// store the user inputs before clearing the states
		setuserInputCache({ ...userInputs });
		setUserInputs({
			title: "",
			tag: "",
			description: "",
		});
	};

	const handleDownloadImage = () => {
		FileSaver.saveAs(imageUrl, imageUrl);
	};

	const handleShareImage = async () => {
		setIsLoading(true);
		try {
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_URL}/api/sharepost`,
				{
					title: userInputCache.title,
					imageUrl: imageUrl,
					tag: userInputCache.tag,
				}
			);
		} catch (error) {
			let message = "Unkown error";
			if (error instanceof Error) message = error.message;
			alert(message);
		} finally {
			setIsLoading(false);
		}
		router.push("/share");
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

			{imageUrl !== "" && (
				<div className="flex gap-2 mt-2">
					<button
						className="btn flex-1  disabled:cursor-not-allowed"
						disabled={imageUrl === ""}
						onClick={handleShareImage}
					>
						{isLoading ? "Sharing..." : "Share"}
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
