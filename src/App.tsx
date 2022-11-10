import { HashRouter, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import StatusBar from "./components/StatusBar";
import Apps from "./routes";

const App = () => {
  return (
    <>
      <StatusBar />
      <HashRouter>
          <Apps />
        <Navigation />
      </HashRouter>
    </>
  );
};

export default App;
