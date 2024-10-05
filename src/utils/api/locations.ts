import axiosInstance from "../axios";
import { LocationApiType } from "../types/api";

export const getLocationById = (locationId: string | undefined) =>
  axiosInstance.get<LocationApiType>(`/location/${locationId}`).then(res => res.data)