import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Mail } from "./apps";
import ComingSoon from "./components/ComingSoon";
import HomeScreen from "./components/HomeScreen";
import Navigation from "./components/Navigation";
import StatusBar from "./components/StatusBar";

const App = () => {
  return (
    <>
      <StatusBar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact" element={<ComingSoon />} />
          <Route path="/projects" element={<ComingSoon />} />
          <Route path="/profile" element={<ComingSoon />} />
          <Route path="/files" element={<ComingSoon />} />
          <Route path="/mail" element={<Mail />} />
        </Routes>
        <Navigation />
      </HashRouter>
    </>
  );
};

export default App;
