// ** Import Pages
import Home from "../pages/Home";
import DetailChannel from "../pages/DetailChannel";
import Auth from "../pages/Auth";

export const routeAuth = {
  path: "/",
  element: Auth,
};

export const routeUser = [
  { path: "/home", element: Home },
  { path: "/channel/:key", element: DetailChannel },
];
