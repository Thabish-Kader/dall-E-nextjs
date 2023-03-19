"use client";

import FileSaver from "file-saver";

export const Button = ({ imageUrl }: { imageUrl: string }) => {
	return (
		<button
			className="btn mt-2"
			onClick={() => FileSaver.saveAs(imageUrl, imageUrl)}
		>
			Download
		</button>
	);
};
