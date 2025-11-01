import { FaXmark } from "react-icons/fa6";
export default function RulePopup({ handleRule }) {
  return (
    <div
      id="rule"
      className="absolute z-40 p-[2rem] rounded-lg shadow-xl/20 w-[35%] flex flex-col items-center"
    >
      <div
        onClick={handleRule}
        className="absolute z-50 text-2xl right-[2rem] border border-black rounded-2xl p-[.5rem] shadow-xl/30 inset-shadow-sm cursor-pointer duration-300 hover:bg-[#5d3d1fe6]"
      >
        <FaXmark />
      </div>
      <h1
        style={{
          textShadow: "2px 2px #000",
        }}
        className="text-[2.5rem] text-[#757875e6] mb-8"
      >
        Rules
      </h1>
      <div className="flex flex-col gap-4">
        <div className="rounded-xl border border-[#000]/60 text-xl text-white p-[1rem] shadow-xl">
          <p>The game is played on a 5x5 grid of lilypads</p>
        </div>
        <div className="rounded-xl border border-[#000]/60 text-xl text-white p-[1rem] shadow-xl">
          <p>Each player starts at opposite corners of the swamp.</p>
        </div>
        <div className="rounded-xl border border-[#000]/60 text-xl text-white p-[1rem] shadow-xl">
          <p>
            On your turn, move your frog to any adjacent lilypad (up , down,
            left, right, or diagonal)
          </p>
        </div>
        <div className="rounded-xl border border-[#000]/60 text-xl text-white p-[1rem] shadow-xl">
          <p>
            After moving , the lilypad you just left sinks and becomes
            unavailable
          </p>
        </div>
        <div className="rounded-xl border border-[#000]/60 text-xl text-white p-[1rem] shadow-xl">
          <p>
            The game ends when a player has no valid moves left. The last frog
            standing wins!
          </p>
        </div>
      </div>
    </div>
  );
}
