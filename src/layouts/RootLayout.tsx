import { Outlet } from "react-router-dom";

// We could implement a navbar inside the fractal element here, but we have no need for one.
// We will just ram in the raw page and a footer.
export default function RootLayout() {
	return (
		<>
			<Outlet />
			<footer>
				© 2025{" "}
				<a href="https://github.com/VonRiddarn" target="_blank" rel="noopener noreferrer">
					Timmy "VonRiddarn" Öhman
				</a>
			</footer>
		</>
	);
}
