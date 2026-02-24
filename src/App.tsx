import { createHashRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";

const router = createHashRouter([
	{
		path: "/",
		element: <RootLayout />, // Wrapper with Navbar/Footer
		errorElement: <NotFound />, // Catch-all for 404s

		// Renders inside Layout's <Outlet />
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "games/:slug",
				element: <GameDetails />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
