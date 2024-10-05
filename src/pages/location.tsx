import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getToken } from "../utils/helpers";
import { useQuery } from "react-query";
import { SiteLayout } from "../core/layouts";
import { Characters } from "../core/components/character-grid";
import { getLocationById } from "../utils/api/locations";

export const LocationPage = () => {

  const navigate = useNavigate();

	const { locationId } = useParams();

	useEffect(() => {
		const accessToken = getToken();

		if (!accessToken) {
			navigate("/login");
		}
	}, []);

	const { status, data } = useQuery(["location", locationId], () =>
		getLocationById(locationId)
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
          <p>Type: {data?.data.type}</p>
          <p>Dimension: {data?.data.dimension}</p>
          <h3>Residents</h3>
          {data?.data.residents && (<Characters characterUrls={data?.data.residents} cacheId={locationId}/>)}
        </div>
      </>
    )}
  </SiteLayout>
  )

}