import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../helpers";

export const useAnonReroute = () => {
  const navigate = useNavigate();

	useEffect(() => {
		const accessToken = getToken();

		if (!accessToken) {
			navigate("/login");
		}
	}, []);
}

export const useAuthReroute = () => {
  const navigate = useNavigate();

	useEffect(() => {
		const accessToken = getToken();

		if (!!accessToken) {
			navigate("/characters");
		}
	}, []);
}