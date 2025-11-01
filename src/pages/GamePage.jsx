import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import Return from "../components/Return";
import GameBoard from "../components/GameBoard";

export default function GamePage() {
  const { player, setPlayer } = useContext(PlayerContext);
  return (
    <div className="flex ">
      <div
        style={{
          zIndex: "99",
          position: "absolute",
          top: "2rem",
          left: "2rem",
        }}
        className="shadow-xl/20"
      >
        <Return prev="lobby" />
      </div>
      <div className="absolute flex justify-evenly items-center h-full w-full ">
        <GameBoard player={player} setPlayer={setPlayer} />
      </div>
    </div>
  );
}
