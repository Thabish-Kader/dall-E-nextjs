import React, { FC } from "react";
import Image from "next/image";
import preview from "../public/assets/defImage.png";
import { Loader } from "./Loader";
import FileSaver from "file-saver";

export const ImagePreview: FC<ImagePreviewProps> = ({
	imageUrl,
	isLoading,
}) => {
	const handleDownloadImage = () => {
		FileSaver.saveAs(imageUrl, imageUrl);
	};

	return (
		<div className="mt-4">
			<div className="relative w-full flex items-center justify-center">
				{imageUrl === "" ? (
					<div className="relative h-[512px] w-[512px]">
						<Image
							src={preview}
							alt=""
							fill
							className=" object-contain"
						/>
					</div>
				) : (
					<div className="relative h-[512px] w-[512px]">
						<Image
							src={imageUrl}
							alt=""
							fill
							className=" object-contain "
						/>
					</div>
				)}
				{isLoading && (
					<div className="absolute inset-0 flex items-center justify-center bg-black/30">
						<Loader />
					</div>
				)}
			</div>
			{imageUrl !== "" && (
				<div className="flex gap-2 mt-2">
					<button
						className="btn flex-1  disabled:cursor-not-allowed"
						disabled={imageUrl === ""}
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
