import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Stores from "./pages/Stores";
import Amenities from "./pages/Amenities";
import Events from "./pages/Events";
import MapContact from "./pages/MapContact";
import NotFound from "./pages/NotFound";
import { categories } from "./data/site";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lojas" element={<Stores />} />
        {categories.map((c) => (
          <Route key={c.slug} path={c.slug} element={<Stores key={c.slug} category={c.name} />} />
        ))}
        <Route path="/comodidades" element={<Amenities />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/mapa-contato" element={<MapContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
