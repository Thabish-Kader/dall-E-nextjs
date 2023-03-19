import Image from "next/image";
import logo from "../public/assets/logo.png";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="absolute top-0 w-full bg-openAI_Primary p-8 text-white">
			<div className="flex justify-between items-center">
				{/* logo */}
				<Link href="/">
					<div className="flex items-center space-x-2">
						<Image
							src={logo}
							alt="logo"
							className="object-contain rounded-full h-16 w-16"
						/>

						<h1 className="font-bold text-2xl">DALL-E</h1>
					</div>
				</Link>
				{/* Tag Line */}

				<p className="text-gray-500 text-md hidden xl:block mt-2">
					&quot; I tried drawing a perfect circle, but it ended up
					looking like a potato, so I decided to let the AI do the
					artwork instead. &quot;
				</p>

				{/* button */}
				<Link className="btn" href="/share">
					Gallery
				</Link>
			</div>
		</header>
	);
};
