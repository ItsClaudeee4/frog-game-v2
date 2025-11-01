import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import RulePopup from "../components/RulePopup";
import { useState } from "react";

export default function MainGame() {
  const [opened, setOpened] = useState(false);

  function handleRule() {
    setOpened(!opened);
  }

  return (
    <div
      id="main"
      className="absolute flex flex-col items-center justify-center h-full w-full "
    >
      {opened && (
        <div id="blured" className="duration-300" style={{ zIndex: "10" }}>
          <RulePopup handleRule={handleRule} />
        </div>
      )}
      <div
        id="content"
        className="w-[56rem] p-[2rem] flex flex-col gap-[2rem] rounded-lg shadow-xl/20 items-center mb-[3rem]"
      >
        <h1
          style={{
            textShadow: "10px 10px #000",
          }}
          className="text-[5.5rem] text-[#757875e6] lowercase"
        >
          Frog War
        </h1>
        <p className="text-center text-gray-300 text-[2rem]">
          Frog war is a fast and stategic 2 players game on a 5x5 lilypad board
          where each move counts trap your opponent and be the last able to move
          to win.
        </p>
      </div>
      <div id="button" className="w-[66rem] flex justify-between mb-[7rem]">
        <button
          onClick={handleRule}
          style={{
            border: "1px solid #000",
            boxShadow: "0 3px #000",
          }}
          className="text-[#757875e6] bg-[#624A35]/85 cursor-pointer text-2xl p-[1.5rem] rounded-md duration-300 hover:-translate-y-2 self-center"
        >
          Rules
        </button>
        <Link to={"/lobby"}>
          <button
            style={{
              border: "1px solid #000",
              boxShadow: "0 3px #000",
            }}
            className="text-[#757875e6] bg-[#624A35]/85 cursor-pointer text-2xl p-[1.5rem] rounded-md duration-300 hover:-translate-y-2 self-center"
          >
            Start
          </button>
        </Link>
      </div>
      <button
        id="github"
        style={{
          border: "1px solid #000",
          boxShadow: "0 3px #000",
        }}
        className="text-black bg-[#624A35]/85 cursor-pointer text-xl p-[1rem] rounded-md duration-300 self-center hover:bg-[#563F2D]/85"
      >
        <FaGithub />
      </button>
      <div
        className="bgBlack"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          background: "black",
          filter: "blur(100px)",
          opacity: "0.5",
          zIndex: "5",
          display: opened ? "block" : "none",
        }}
      ></div>
    </div>
  );
}
