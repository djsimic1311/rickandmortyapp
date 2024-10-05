export const getToken = () => {
  const token = window.localStorage.getItem('accessToken');
  if (token) {
    return window.atob(token);
  }
  else {
    return null
  }
}

export const setToken = (token: string) => {
  const encodedToken = window.btoa(token);

  window.localStorage.setItem('accessToken', encodedToken);
}

export const deleteToken = () => {
  window.localStorage.removeItem('accessToken')
}

export const formatUrlFromData = (url: string) => {
  return url.replace('https://rickandmortyapi.com/api', '');
}
export const getLocationIdFromDataUrl = (url: string) => {
  return url.replace('https://rickandmortyapi.com/api/location/', '');
}
export const getEpisodeIdFromDataUrl = (url: string) => {
  return url.replace('https://rickandmortyapi.com/api/episode/', '');
}
export const getCharacterIdFromDataUrl = (url: string) => {
  return url.replace('https://rickandmortyapi.com/api/character/', '');
}