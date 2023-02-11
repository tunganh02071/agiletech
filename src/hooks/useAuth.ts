/* eslint-disable @typescript-eslint/no-unused-vars */
// library
import { useCookies } from "react-cookie";
import _ from "lodash";

// type
import { AuthData } from "src/types";

const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "accessToken",
    "refreshToken",
  ]);

  const setAuth = (data: AuthData) => {
    setCookie("accessToken", data.accessToken);
    setCookie("refreshToken", data.refreshToken);
  };
  const authData = {
    accessToken: cookies.accessToken,
    refreshToken: cookies.refreshToken,
  };

  const isLoggedIn = !_.isNil(authData.accessToken);
  const clearAuth = () => {
    removeCookie("accessToken");
    removeCookie("refreshToken");
  };

  return {
    isLoggedIn,
    authData,
    setAuth,
    clearAuth,
  };
};

export default useAuth;
