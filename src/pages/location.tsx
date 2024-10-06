import { SiteLayout } from "../core/layouts";
import { Characters } from "../core/components/character-grid";
import { useAnonReroute } from "../utils/hooks/useReroute";
import { useLocationQuery } from "../utils/hooks/useLocationQuery";

export const LocationPage = () => {
	useAnonReroute();

	const { status, data, locationId } = useLocationQuery();

	return (
		<SiteLayout status={status}>
			<div>
				<h2>{data?.name}</h2>
				<p><b>Type:</b> {data?.type}</p>
				<p><b>Dimension</b>: {data?.dimension}</p>
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
