import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./providers/count/count-store";
import Home from "./pages/home/home";
import About from "./pages/about/about";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
