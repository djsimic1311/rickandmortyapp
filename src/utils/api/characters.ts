import axiosInstance from "../axios";
import { ApiResponseDataWrapper, CharacterApiType } from "../types/api";

export const getAllCharacters = (name: string | null = null, page: number = 0) =>
	axiosInstance.get<ApiResponseDataWrapper<CharacterApiType>>(
		`/character/` +
			(name !== null ? `?name=${name}&page=${page}` : `?page=${page}`)
	).then((res) => res.data);

export const getSingleCharacterById = (characterId: string | undefined) =>
	axiosInstance.get<CharacterApiType>(`/character/${characterId}`).then(res => res.data);

export const getMultipleCharactersByIds = (characterIds: string[]) =>
	axiosInstance.get<CharacterApiType[]>(`/character/${characterIds.toString()}`).then(res => res.data);
