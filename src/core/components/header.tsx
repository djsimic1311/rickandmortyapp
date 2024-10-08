import { Link } from "react-router-dom";
import { H1, HeaderContainer } from "../../styles";
import { FunctionComponent } from "react";
import { useAuth } from "../../utils/hooks/useAuth";

export const Header: FunctionComponent = () => {
	const { logout } = useAuth();

	return (
		<HeaderContainer>
			<Link to={'/characters'}><H1>Rick and Morty App</H1></Link>
			<nav>
				<Link to={"/characters"}>Characters</Link>
				<button onClick={logout}>Sign out</button>
			</nav>
		</HeaderContainer>
	);
};
