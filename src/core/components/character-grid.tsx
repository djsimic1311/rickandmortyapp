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
		<SiteLayout status={status}>
			<GridContainer>
				{data?.map((baki: any) => {
					return (
						<CharacterCard key={baki.id} to={`/characters/${baki.id}`}>
							<h2>{baki.name}</h2>
							<img src={baki.image} alt="" />
						</CharacterCard>
					);
				})}
			</GridContainer>
		</SiteLayout>
	);
};
