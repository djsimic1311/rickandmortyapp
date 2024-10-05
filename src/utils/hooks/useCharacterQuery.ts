import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { getAllCharacters } from "../api/characters";
import { useDebounce } from "./useDebounce";
import { useInView } from "react-intersection-observer";

export const useCharacterQuery = () => {
  const { ref, inView } = useInView({
		initialInView: true
	});
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

  return { data, status, searchQueryRef, handleSearch, ref }
}