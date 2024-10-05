import { Link, useNavigate } from "react-router-dom";
import { H1, HeaderContainer } from "../../styles";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase";
import { deleteToken } from "../../utils/helpers";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {               
      signOut(firebaseAuth).then(() => {
        deleteToken();
        navigate("/");
      }).catch((error) => {
        console.error(error)
      });
  }
	return (
		<HeaderContainer>
			<H1>Rick and Morty App</H1>

			<nav>
				<Link to={"/characters"}>Characters</Link>
				<button onClick={handleLogout}>Sign out</button>
			</nav>
		</HeaderContainer>
	);
};
