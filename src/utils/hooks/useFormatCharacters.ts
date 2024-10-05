import { useQuery } from "react-query";
import { getCharacterIdFromDataUrl } from "../helpers";
import { getMultipleCharactersByIds } from "../api/characters";

export const useCharacterFormat = (
	characterUrls: string[],
	cacheId: number | string
) => {
	const characterIds = characterUrls.map((url) =>
		getCharacterIdFromDataUrl(url)
	);
	const { status, data } = useQuery(
		["characters", cacheId],
		() => getMultipleCharactersByIds(characterIds),
		{
			enabled: !!characterIds,
		}
	);

	return { status, data };
};
