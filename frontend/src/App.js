import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MoviesItems from "../src/components/MoviesItems/MoviesItems";
import Footer from "./components/Footer/Footer";
import Title from "./components/Title/Title";
import SeriesItems from "./components/SeriesItem/SeriesItems";

function App() {
  return (
    <Router>
      <Header />
      <Title title="Title" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<MoviesItems />}></Route>
        <Route path="/series" element={<SeriesItems />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
