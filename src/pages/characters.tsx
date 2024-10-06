import { SiteLayout } from "../core/layouts";
import { Fragment } from "react";
import { CharacterCard, GridContainer, SearchInput } from "../styles/site";
import { useAnonReroute } from "../utils/hooks/useReroute";
import { useCharacterQuery } from "../utils/hooks/useCharacterQuery";
import { CharacterApiType } from "../utils/types/api";

export const CharactersPage = () => {
	useAnonReroute();

	const { data, status, searchQueryRef, handleSearch, ref, isError } =
		useCharacterQuery();

	return (
		<SiteLayout status={status}>
			<header>
				<SearchInput
					placeholder="Search Characters..."
					type="text"
					ref={searchQueryRef}
					onChange={handleSearch}
				/>
			</header>

			{!isError ? (
				<GridContainer>
					{data?.pages.map((group, i) => (
						<Fragment key={i}>
							{group?.results.map((character: CharacterApiType) => {
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
			) : (
				<>Nothing Here!</>
			)}
			<div className="dot" ref={ref}></div>
		</SiteLayout>
	);
};
