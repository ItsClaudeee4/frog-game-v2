import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LobbyPage from "./pages/LobbyPage";
import GamePage from "./pages/GamePage";
import { PlayerContext } from "./contexts/PlayerContext";
import { useState } from "react";
import { SnackbarProvider } from "./contexts/SnackbarContext";

function App() {
  const _ = `bg-red-500 bg-green-500 bg-blue-500 bg-purple-500
  bg-red-400/50 bg-green-400/50 bg-blue-400/50 bg-purple-400/50
  bg-emerald-400/60 bg-sky-500/60 bg-red-400/60 bg-green-400/60 bg-blue-400/60 bg-purple-400/60`; // preload the classes (for tailwind)

  const [player, setPlayer] = useState([
    { name: "", color: "red", ready: false, position: "11" },
    { name: "", color: "green", ready: false, position: "55" },
  ]);

  return (
    <SnackbarProvider>
      <PlayerContext.Provider
        value={{
          player,
          setPlayer,
        }}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/lobby" element={<LobbyPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </PlayerContext.Provider>
    </SnackbarProvider>
  );
}

export default App;
