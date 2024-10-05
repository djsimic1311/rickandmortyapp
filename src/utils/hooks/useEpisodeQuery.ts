import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getEpisodeById } from "../api/episodes";

export const useEpisodeQuery = () => {
	const { episodeId } = useParams();

	const { status, data } = useQuery(["episode", episodeId], () =>
		getEpisodeById(episodeId)
	);

	return { status, data, episodeId };
};
