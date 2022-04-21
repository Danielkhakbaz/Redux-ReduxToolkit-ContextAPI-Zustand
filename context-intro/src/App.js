import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CountProvider from "./providers/count/count-provider";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import NotFound from "./pages/not-found/not-found";

const App = () => {
  return (
    <>
      <CountProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </BrowserRouter>
      </CountProvider>
    </>
  );
};

export default App;
