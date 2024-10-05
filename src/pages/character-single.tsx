import { Link } from "react-router-dom";
import { SiteLayout } from "../core/layouts";
import { Fragment } from "react";
import { formatUrlFromData, getEpisodeIdFromDataUrl } from "../utils/helpers";
import { useAnonReroute } from "../utils/hooks/useReroute";
import { useCharacterSingleQuery } from "../utils/hooks/useCharacterSingleQuery";

export const CharacterPage = () => {
	useAnonReroute();

	const { status, data } = useCharacterSingleQuery();

	return (
		<SiteLayout status={status}>
			<div>
				<h2>{data?.name}</h2>
				<img src={data?.image} alt="" />
				<p>Status: {data?.status}</p>
				<p>Species: {data?.species}</p>
				<p>Gender: {data?.gender}</p>
				<p>
					Origin:{" "}
					<Link to={formatUrlFromData(data?.origin.url)}>
						{data?.origin.name}
					</Link>
				</p>
				<p>
					Location:{" "}
					<Link to={formatUrlFromData(data?.location.url)}>
						{data?.location.name}
					</Link>
				</p>
				<p>
					Episodes:{" "}
					{data?.episode.map((episode: string) => (
						<Fragment key={getEpisodeIdFromDataUrl(episode)}>
							<Link to={formatUrlFromData(episode)}>
								Episode {getEpisodeIdFromDataUrl(episode)}
							</Link>{" "}
							,
						</Fragment>
					))}
				</p>
			</div>
		</SiteLayout>
	);
};
