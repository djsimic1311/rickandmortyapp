import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./styles";
import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { CharactersPage } from "./pages/characters";
import { RegisterPage } from "./pages/register";
import { QueryClient, QueryClientProvider } from "react-query";
import { CharacterPage } from "./pages/character-single";
import { EpisodePage } from "./pages/episode";
import { LocationPage } from "./pages/location";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
	{
		path: "/characters",
		element: <CharactersPage />,
	},
	{
		path: "/characters/:characterId",
		element: <CharacterPage />,
	},
	{
		path: "/location/:locationId",
		element: <LocationPage />,
	},
	{
		path: "/episode/:episodeId",
		element: <EpisodePage />,
	},
]);

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<GlobalStyles></GlobalStyles>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={routes}></RouterProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
