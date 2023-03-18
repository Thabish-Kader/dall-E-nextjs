import Image from "next/image";
import logo from "../public/assets/logo.png";

export const Header = () => {
	return (
		<header className="bg-openAI_Primary p-8 text-openAI_Text">
			<div className="flex justify-between items-center">
				{/* logo */}
				<div className="flex items-center space-x-2">
					<div className="relative h-16 w-16">
						<Image
							src={logo}
							alt="logo"
							fill
							className="object-contain rounded-full"
						/>
					</div>
					<h1 className="font-bold text-2xl">DALL-E</h1>
				</div>
				{/* Tag Line */}
				<h1 className="text-2xl tracking-wider uppercase font-bold hidden lg:block">
					Bringing Your Imagination to Life with AI Images
				</h1>

				{/* button */}
				<button className="p-2 text-xl hover:bg-openAI_Hover rounded-lg border border-1 border-white transition-colors duration-300">
					Sign Up
				</button>
			</div>
		</header>
	);
};
