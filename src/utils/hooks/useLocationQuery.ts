import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getLocationById } from "../api/locations";

export const useLocationQuery = () => {
	const { locationId } = useParams();

	const { status, data } = useQuery(["location", locationId], () =>
		getLocationById(locationId)
	);

	return { status, data, locationId };
};