import "./globals.css";

export const metadata = {
	title: "Dall-E",
	description: "DALL-E Clone built with Next js, prisma, tailwind css ",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
