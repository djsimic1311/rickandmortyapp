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
				<p><b>Status:</b> {data?.status}</p>
				<p><b>Species:</b> {data?.species}</p>
				<p><b>Gender:</b> {data?.gender}</p>
				<p>
					<b>Origin:</b>{" "}
					<Link to={formatUrlFromData(data?.origin.url)}>
						{data?.origin.name}
					</Link>
				</p>
				<p>
					<b>Location:</b>{" "}
					<Link to={formatUrlFromData(data?.location.url)}>
						{data?.location.name}
					</Link>
				</p>
				<p>
					<b>Episodes:</b>{" "}
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
