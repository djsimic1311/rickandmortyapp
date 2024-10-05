import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getToken } from "../utils/helpers";
import { useQuery } from "react-query";
import { getEpisodeById } from "../utils/api/episodes";
import { SiteLayout } from "../core/layouts";
import { Characters } from "../core/components/character-grid";

export const EpisodePage = () => {

  const navigate = useNavigate();

	const { episodeId } = useParams();

	useEffect(() => {
		const accessToken = getToken();

		if (!accessToken) {
			navigate("/login");
		}
	}, []);

	const { status, data } = useQuery(["episode", episodeId], () =>
		getEpisodeById(episodeId)
	);

  return(
    <SiteLayout>
    {status === "loading" ? (
      <div>Im Pickle Rick!</div>
    ) : status === "error" ? (
      <div>...</div>
    ) : (
      <>
        <div>
          <h2>{data?.data.name}</h2>
          <p>Episode: {data?.data.episode}</p>
          <p>Air date: {data?.data.air_date}</p>
          <h3>Characters in this episode</h3>
          {data?.data.characters && (<Characters characterUrls={data?.data.characters} cacheId={episodeId}/>)}
        </div>
      </>
    )}
  </SiteLayout>
  )

}