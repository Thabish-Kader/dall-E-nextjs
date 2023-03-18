import React, { FC } from "react";
import Image from "next/image";
import preview from "../public/assets/defImage.png";
import { Loader } from "./Loader";
export const ImagePreview: FC<ImagePreviewProps> = ({
	imageUrl,
	isLoading,
}) => {
	return (
		<div className="mt-4">
			<div className="relative w-full flex items-center justify-center">
				{imageUrl === "" ? (
					<>
						<Image
							src="https://miro.medium.com/v2/resize:fit:1024/0*vLXNKuhovez0FFj2.png"
							alt=""
							// TODO: Change thist to taileind
							height={500}
							width={1024}
							className="h-[500px] w-[1024px] object-contain "
						/>
					</>
				) : (
					<>
						<Image
							src={imageUrl}
							alt=""
							className="h-[500px] w-[1024px] object-contain "
						/>
					</>
				)}
				{isLoading && (
					<div className="absolute inset-0 flex items-center justify-center bg-black/30">
						<Loader />
					</div>
				)}
			</div>
		</div>
	);
};
