import axiosInstance from "../axios";

export const getLocationById = (locationId: string | undefined) =>
  axiosInstance.get(`/location/${locationId}`)