import { FunctionComponent } from "react";
import { GridContainer, CharacterCard } from "../../styles/site";
import { CharactersPropsType } from "../../utils/types/core/components/characters-grid";
import { useCharacterFormat } from "../../utils/hooks/useFormatCharacters";
import { SiteLayout } from "../layouts";

export const Characters: FunctionComponent<CharactersPropsType> = ({
	characterUrls,
	cacheId = 0,
}) => {
	const { status, data } = useCharacterFormat(characterUrls, cacheId);

	return (
		<SiteLayout status={status} wrap={false}>
			<GridContainer>
				{data?.map((character) => {
					return (
						<CharacterCard key={character.id} to={`/characters/${character.id}`}>
							<h2>{character.name}</h2>
							<img src={character.image} alt="" />
						</CharacterCard>
					);
				})}
			</GridContainer>
		</SiteLayout>
	);
};
