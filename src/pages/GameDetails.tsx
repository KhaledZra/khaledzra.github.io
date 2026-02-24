import { useParams } from "react-router-dom";

// TODO: Create a "database" of games using a JSON object.
// The data can be collected both in here and on the homepage.
// Use the JSON like we would a dictionary and have each page be an entry with the slug as the key.
// Then we could do something like const gameInfo = gamesDb[slug]

export default function GameDetails() {
	const { slug } = useParams();

	return (
		<div>
			<h1>{slug?.replaceAll("-", " ")}</h1>
			<p>Now showing details for Game with slug: {slug}</p>
		</div>
	);
}
