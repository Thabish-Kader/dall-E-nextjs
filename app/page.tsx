import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { InputPanel } from "@/components/InputPanel";

export default function Home() {
	return (
		<main className="max-w-5xl mx-auto">
			<InputPanel />
		</main>
	);
}
