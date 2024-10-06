import { SiteLayout } from "../core/layouts";
import { Characters } from "../core/components/character-grid";
import { useAnonReroute } from "../utils/hooks/useReroute";
import { useEpisodeQuery } from "../utils/hooks/useEpisodeQuery";

export const EpisodePage = () => {
	useAnonReroute();

	const { status, data, episodeId } = useEpisodeQuery();

	return (
		<SiteLayout status={status}>
			<div>
				<h2>{data?.name}</h2>
				<p><b>Episode:</b> {data?.episode}</p>
				<p><b>Air date:</b> {data?.air_date}</p>
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
