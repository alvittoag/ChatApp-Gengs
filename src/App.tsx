// ** Import Layout
import Layout from "./layout/Layout";

// ** Import Pages
import Home from "./pages/Home";
import DetailChannel from "./pages/DetailChannel";

// ** Import 3rd Party
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel/:key" element={<DetailChannel />} />
      </Routes>
    </Layout>
  );
};

export default App;
