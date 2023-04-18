// ** Import Pages
import Home from "../pages/home/Home";
import DetailChannel from "../pages/detail-channel/DetailChannel";
import Auth from "../pages/auth/Auth";
import Profile from "../pages/profile/Profile";

export const routeAuth = {
  path: "/",
  element: Auth,
};

export const routeUser = [
  { path: "/home", element: Home },
  { path: "/channel/:key", element: DetailChannel },
  { path: "/profile", element: Profile },
];
