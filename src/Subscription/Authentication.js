const accessTokenKey = 'accessToken';

export function getAccessToken() {
  return localStorage.getItem(accessTokenKey);
}

export function setAccessToken(access_token) {
  console.log("New token", access_token);
  localStorage.setItem(accessTokenKey, access_token);
}

