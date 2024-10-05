import axiosInstance from "../axios";
import { EpisodeApiType } from "../types/api";

export const getEpisodeById = (episodeId: number | string | undefined) =>
  axiosInstance.get<EpisodeApiType>(`/episode/${episodeId}`).then(res => res.data)
