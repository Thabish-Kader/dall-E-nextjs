async function getData() {
	const res = await fetch("https://rickandmortyapi.com/api/character/12", {
		next: { revalidate: 60 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

const Share = async () => {
	const data = await getData();
	console.log(data);
	return <div>Share</div>;
};

export default Share;
