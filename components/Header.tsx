import Image from "next/image";
import logo from "../public/assets/logo.png";

export const Header = () => {
	return (
		<header className="absolute top-0 w-full bg-openAI_Primary p-8 text-white">
			<div className="flex justify-between items-center">
				{/* logo */}
				<div className="flex items-center space-x-2">
					<Image
						src={logo}
						alt="logo"
						className="object-contain rounded-full h-16 w-16"
					/>

					<h1 className="font-bold text-2xl">DALL-E</h1>
				</div>
				{/* Tag Line */}
				<h1 className="text-2xl tracking-wider uppercase font-bold hidden lg:block">
					Bringing Your Imagination to Life with AI Images
				</h1>

				{/* button */}
				<button className="btn">Sign Up</button>
			</div>
		</header>
	);
};
