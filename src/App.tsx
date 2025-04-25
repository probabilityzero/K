import { ThemeProvider } from "./hooks/useTheme";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, HomeFooter } from "./layout/Footer";
import Home from "./app/index";
import ArtPage from "./app/[artUrl]";
import AllCollections from "./app/collections"; 
import CollectionPage from "./app/collections/[collectionUrl]";
import Exhibitions from "./app/exhibitions";
import About from "./app/about";
import Miscellaneous from "./app/miscellaneous";
import GalleryScroll from "./app/gallery";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-dvh">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:artUrl" element={<ArtPage />} />
            <Route path="/collections" element={<AllCollections />} />
            <Route path="/collections/:collectionUrl" element={<CollectionPage />} />
            <Route path="/4d" element={<GalleryScroll />} />
            <Route path="/miscellaneous" element={<Miscellaneous />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        {location.pathname === "/" ? <HomeFooter /> : <Footer />}
      </div>
    </ThemeProvider>
  );
}

export default App;
