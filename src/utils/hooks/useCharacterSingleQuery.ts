import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getSingleCharacterById } from "../api/characters";

export const useCharacterSingleQuery = () => {
	const { characterId } = useParams();

	const { status, data } = useQuery("character", () =>
		getSingleCharacterById(characterId)
	);

	return { status, data };
};
