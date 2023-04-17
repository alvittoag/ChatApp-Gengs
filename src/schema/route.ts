// ** Import Pages
import Home from "../pages/home/Home";
import DetailChannel from "../pages/detail-channel/DetailChannel";
import Auth from "../pages/auth/Auth";

export const routeAuth = {
  path: "/",
  element: Auth,
};

export const routeUser = [
  { path: "/home", element: Home },
  { path: "/channel/:key", element: DetailChannel },
];
