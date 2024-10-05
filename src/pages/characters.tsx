import { SiteLayout } from "../core/layouts";
import { Fragment, useEffect, useRef } from "react";
import { CharacterCard, GridContainer } from "../styles/site";
import { getAllCharacters } from "../utils/api/characters";
import { useInfiniteQuery } from "react-query";
import { useDebounce } from "../utils/hooks/useDebounce";
import { useInView } from "react-intersection-observer";
import { useAnonReroute } from "../utils/hooks/useReroute";

export const CharactersPage = () => {
	useAnonReroute();
	const { ref, inView } = useInView();
	const searchQueryRef = useRef<HTMLInputElement>(null);

	const debounce = useDebounce();

	const { status, data, refetch, fetchNextPage, hasNextPage } =
		useInfiniteQuery(
			"characters",
			({ pageParam }) =>
				getAllCharacters(searchQueryRef.current?.value, pageParam),
			{
				keepPreviousData: true,
				getNextPageParam: (lastPage) =>
					lastPage.info.next
						? lastPage.info.next.split("=")[1]
						: null,
			}
		);

	const handleSearch = () => {
		debounce(() => {
			refetch();
		});
	};

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage();
		}
	}, [fetchNextPage, inView]);

	return (
		<SiteLayout status={status}>
			<header>
				<h2>Characters</h2>
				<input type="text" ref={searchQueryRef} onChange={handleSearch} />
			</header>

			<GridContainer>
				{data?.pages.map((group, i) => (
					<Fragment key={i}>
						{group?.results.map((character: any) => {
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
