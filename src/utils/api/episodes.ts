import axiosInstance from "../axios";

export const getEpisodeById = (episodeId: number | string | undefined) =>
  axiosInstance.get(`/episode/${episodeId}`)

export const getEpisodesByIds = (episodeId: number[] | string[]) =>
  axiosInstance.get(`/episode/${episodeId.toString()}`)