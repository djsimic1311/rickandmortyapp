import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { SiteLayout } from "../core/layouts";
import { Characters } from "../core/components/character-grid";
import { getLocationById } from "../utils/api/locations";
import { useAnonReroute } from "../utils/hooks/useReroute";

export const LocationPage = () => {
	useAnonReroute();

	const { locationId } = useParams();

	const { status, data } = useQuery(["location", locationId], () =>
		getLocationById(locationId)
	);

	return (
		<SiteLayout status={status}>
			<div>
				<h2>{data?.name}</h2>
				<p>Type: {data?.type}</p>
				<p>Dimension: {data?.dimension}</p>
				<h3>Residents</h3>
				{data?.residents && (
					<Characters
						characterUrls={data?.residents}
						cacheId={locationId}
					/>
				)}
			</div>
		</SiteLayout>
	);
};
