import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export default function Return({ prev }) {
  const { player, setPlayer } = useContext(PlayerContext);

  function handleReturn(e, prev) {
    if (prev != "lobby") return;
    console.log(0);
    setPlayer([
      { name: player[0].name, color: player[0].color, ready: false },
      { name: player[1].name, color: player[1].color, ready: false },
    ]);
  }

  return (
    <Link
      to={`/${prev}`}
      onClick={(e) => {
        handleReturn(e, prev);
      }}
    >
      <button
        style={{
          borderWidth: "1px",
        }}
        className="bg-[#624A35]/90 py-[.5rem] px-[1rem] rounded-lg flex justify-center items-center cursor-pointer duration-300 hover:bg-[#563F2D]/90"
      >
        <ArrowBackIcon />
      </button>
    </Link>
  );
}
