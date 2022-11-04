import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
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
        </Routes>
        <Navigation />
      </HashRouter>
    </>
  );
};

export default App;
