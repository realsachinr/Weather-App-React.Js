import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <div className=" bg-cover  h-screen w-screen bg-[url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg')]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
