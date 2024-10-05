import { FunctionComponent } from "react";
import { useQuery } from "react-query";
import { getMultipleCharactersByIds } from "../../utils/api/characters";
import { getCharacterIdFromDataUrl } from "../../utils/helpers";
import { GridContainer, CharacterCard } from "../../styles/site";

export const Characters: FunctionComponent<{
	characterUrls: string[];
  cacheId?: string
}> = ({ characterUrls, cacheId = 0 }) => {

	const characterIds = 
		characterUrls.map((url) => getCharacterIdFromDataUrl(url))
	;

	const { status, data } = useQuery(
		["characters", cacheId],
		() => getMultipleCharactersByIds(characterIds),
		{
			enabled: !!characterIds,
		}
	);

	return status === "loading" ? (
		<div></div>
	) : status === "error" ? (
		<div></div>
	) : (
		<GridContainer>
			{data?.data.map((baki: any) => {
				return (
					<CharacterCard key={baki.id} to={`/characters/${baki.id}`}>
						<h2>{baki.name}</h2>
						<img src={baki.image} alt="" />
					</CharacterCard>
				);
			})}
		</GridContainer>
	);
};
