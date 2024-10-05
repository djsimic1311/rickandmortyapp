import { Link, useNavigate, useParams } from "react-router-dom";
import { SiteLayout } from "../core/layouts";
import { Fragment, useEffect } from "react";
import { formatUrlFromData, getEpisodeIdFromDataUrl, getToken } from "../utils/helpers";
import { useQuery } from "react-query";
import { getSingleCharacterById } from "../utils/api/characters";
import { CharacterCard, GridContainer } from "../styles/site";
import { getEpisodesByIds } from "../utils/api/episodes";

export const CharacterPage = () => {
	const navigate = useNavigate();

	const { characterId } = useParams();

	useEffect(() => {
		const accessToken = getToken();

		if (!accessToken) {
			navigate("/login");
		}
	}, []);

	const { status, data } = useQuery("character", () =>
		getSingleCharacterById(characterId)
	);

	return (
		<SiteLayout>
			{status === "loading" ? (
				<div>Im Pickle Rick!</div>
			) : status === "error" ? (
				<div>...</div>
			) : (
				<>
					<div>
						<h2>{data?.data.name}</h2>
						<img src={data?.data.image} alt="" />
						<p>Status: {data?.data.status}</p>
						<p>Species: {data?.data.species}</p>
						<p>Gender: {data?.data.gender}</p>
						<p>
							Origin:{" "}
							<Link to={formatUrlFromData(data?.data.origin.url)}>
								{data?.data.origin.name}
							</Link>
						</p>
						<p>
							Location:{" "}
							<Link to={formatUrlFromData(data?.data.location.url)}>
								{data?.data.location.name}
							</Link>
						</p>
            <p>
              Episodes:{" "}
              {data?.data.episode.map((episode: string) => (
                <Fragment key={getEpisodeIdFromDataUrl(episode)}>
                  <Link to={formatUrlFromData(episode)}>Episode {getEpisodeIdFromDataUrl(episode)}</Link> ,
                </Fragment>
              ))}
            </p>
					</div>
				</>
			)}
		</SiteLayout>
	);
};
