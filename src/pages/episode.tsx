import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getEpisodeById } from "../utils/api/episodes";
import { SiteLayout } from "../core/layouts";
import { Characters } from "../core/components/character-grid";
import { useAnonReroute } from "../utils/hooks/useReroute";

export const EpisodePage = () => {
	useAnonReroute();

	const { episodeId } = useParams();

	const { status, data } = useQuery(["episode", episodeId], () =>
		getEpisodeById(episodeId)
	);

	return (
		<SiteLayout status={status}>
			<div>
				<h2>{data?.name}</h2>
				<p>Episode: {data?.episode}</p>
				<p>Air date: {data?.air_date}</p>
				<h3>Characters in this episode</h3>
				{data?.characters && (
					<Characters
						characterUrls={data?.characters}
						cacheId={episodeId}
					/>
				)}
			</div>
		</SiteLayout>
	);
};
