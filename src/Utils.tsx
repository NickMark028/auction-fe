import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BE_HOST,
  
  
  timeout: 5000,
  // headers: { 'X-Access-Token': 'accessToken' }
});
console.log(process.env.REACT_APP_BE_HOST);
export function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
