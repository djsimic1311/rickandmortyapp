import { SiteLayout } from "../core/layouts";
import { Fragment } from "react";
import { CharacterCard, GridContainer } from "../styles/site";
import { useAnonReroute } from "../utils/hooks/useReroute";
import { useCharacterQuery } from "../utils/hooks/useCharacterQuery";

export const CharactersPage = () => {
	useAnonReroute();

	const { data, status, searchQueryRef, handleSearch, ref } =
		useCharacterQuery();

	return (
		<SiteLayout status={status}>
			<header>
				<h2>Characters</h2>
				<input type="text" ref={searchQueryRef} onChange={handleSearch} />
			</header>

			<GridContainer>
				{data?.pages.map((group, i) => (
					<Fragment key={i}>
						{group?.results.map((character) => {
							return (
								<CharacterCard
									key={character.id}
									to={`/characters/${character.id}`}
								>
									<h2>{character.name}</h2>
									<img src={character.image} alt="" />
								</CharacterCard>
							);
						})}
					</Fragment>
				))}
			</GridContainer>
			<div className="dot" ref={ref}></div>
		</SiteLayout>
	);
};
