import axiosInstance from "../axios";

export const getAllCharacters = (name: string | null = null, page: number = 0) => axiosInstance.get(`/character/` + ( name !== null ? `?name=${name}&page=${page}` : `?page=${page}`));

export const getSingleCharacterById = (characterId: string | undefined) =>
	axiosInstance.get(`/character/${characterId}`);

export const getMultipleCharactersByIds = (characterIds: string[]) =>
  axiosInstance.get(`/character/${characterIds.toString()}`);
