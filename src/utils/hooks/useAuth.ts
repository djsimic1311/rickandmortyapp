import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthFormData } from "../types/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseAuth } from "../firebase";
import { deleteToken, setToken } from "../helpers";

export const useAuth = () => {
  const navigate = useNavigate();
  
  const login: SubmitHandler<AuthFormData> = ({ email, password }) => {
		signInWithEmailAndPassword(firebaseAuth, email, password)
			.then(({ user }) => {
				user.getIdToken().then((token) => {
					setToken(token);
          navigate('/characters');
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};

  const register: SubmitHandler<AuthFormData> = ({email, password}) => {
		createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then(({user}) => {
      user.getIdToken().then((token) => {
        setToken(token);
        navigate('/characters');
      });
    })
    .catch((error) => {
      console.log(error);
    })
	};

  const logout = () => {               
    signOut(firebaseAuth).then(() => {
      deleteToken();
      navigate("/");
    }).catch((error) => {
      console.error(error)
    });
}

  return { login, register, logout }
}