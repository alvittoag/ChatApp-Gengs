// ** Import Layout
import LayoutUsers from "./layouts/LayoutUsers";
import LayoutAuth from "./layouts/LayoutAuth";

// ** Import Components
import PrivateRoute from "./components/PrivateRoute";

// ** Import Schema
import { routeAuth, routeUser } from "./schema/route";

// ** Import Other
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route element={<LayoutAuth />}>
        <Route path={routeAuth.path} element={<routeAuth.element />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route element={<LayoutUsers />}>
          {routeUser.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              element={<route.element />}
            />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
