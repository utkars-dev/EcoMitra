import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/quiz";
import Games from "./components/games";
import Dash from "./components/dashboard";
import Login from "./components/login";
import Aboutus from "./components/About-us";
import Game1 from "./components/game1";
import Game2 from "./components/game2";
import Game3 from "./components/game3";
import Game4 from "./components/game4";
import Game5 from "./components/game5";

// Define all routes in one place
const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/game", element: <Games /> },
  { path: "/dashboard", element: <Dash /> },
  { path: "/aboutus", element: <Aboutus /> },

  // Game routes (not in navbar)
  { path: "/game1", element: <Game1 /> },
  { path: "/game2", element: <Game2 /> },
  { path: "/game3", element: <Game3 /> },
  { path: "/game4", element: <Game4 /> },
  { path: "/game5", element: <Game5 /> },
];

function App() {
  return (
    <div>
      {/* Route Definitions */}
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
