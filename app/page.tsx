import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { UserInputs } from "@/components/UserInputs";

export default function Home() {
	return (
		<main className="max-w-5xl mx-auto">
			<UserInputs />
		</main>
	);
}
