import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GameBoard({ player, setPlayer }) {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [takenLilypads, setTakenLilypads] = useState(["11", "55"]);

  // security check
  // let navigate = useNavigate();
  // useEffect(() => {
  //   if (player[0].ready == false || player[1].ready == false)
  //     return navigate("/lobby");
  // }, []);

  function handleMove(e) {
    let newPosition = e.target.id;
    let playerNum = Number(playerTurn) - Number(1);
    let oldPosition = player[playerNum].position;

    // console.log("Available moves: \n");
    const m = availableMoves(oldPosition);
    // console.log(m);

    if (
      !m.moves.find((move) => {
        return move == newPosition;
      })
    )
      return console.warn("Invalid position!");

    // handle Move
    setTakenLilypads([...takenLilypads, newPosition]);
    if (playerTurn == 1) {
      setPlayerTurn(2);
      setPlayer((prev) => [
        {
          name: player[0].name,
          color: player[0].color,
          ready: true,
          position: newPosition,
        },
        prev[1],
      ]);

      // win check
      let opponentPosition = player[Number(2) - Number(1)].position;
      const oppm = availableMoves(opponentPosition);

      if (oppm.moves.length == 1 && oppm.moves[0] == newPosition)
        return console.log(player[1].name + " lost the game!");
    } else {
      setPlayerTurn(1);
      setPlayer((prev) => [
        prev[0],
        {
          name: player[1].name,
          color: player[1].color,
          ready: true,
          position: newPosition,
        },
      ]);

      // win check
      let opponentPosition = player[Number(1) - Number(1)].position;
      const oppm = availableMoves(opponentPosition);

      if (oppm.moves.length == 1 && oppm.moves[0] == newPosition)
        return console.log(player[0].name + " lost the game!");
    }
  }

  function availableMoves(oldPosition) {
    const x = Number(oldPosition[0]);
    const y = Number(oldPosition[1]);

    let moves = [];

    x + 1 !== 0 &&
      y + 1 !== 0 &&
      x + 1 !== 6 &&
      y + 1 !== 6 &&
      isValid(`${x + 1}${y + 1}`) &&
      moves.push(`${x + 1}${y + 1}`);
    x - 1 !== 0 &&
      y - 1 !== 0 &&
      x - 1 !== 6 &&
      y - 1 !== 6 &&
      isValid(`${x - 1}${y - 1}`) &&
      moves.push(`${x - 1}${y - 1}`);
    x + 1 !== 0 &&
      y - 1 !== 0 &&
      x + 1 !== 6 &&
      y - 1 !== 6 &&
      isValid(`${x + 1}${y - 1}`) &&
      moves.push(`${x + 1}${y - 1}`);
    x - 1 !== 0 &&
      y + 1 !== 0 &&
      x - 1 !== 6 &&
      y + 1 !== 6 &&
      isValid(`${x - 1}${y + 1}`) &&
      moves.push(`${x - 1}${y + 1}`);
    y + 1 !== 0 &&
      y + 1 !== 6 &&
      isValid(`${x}${y + 1}`) &&
      moves.push(`${x}${y + 1}`);
    y - 1 !== 0 &&
      y - 1 !== 6 &&
      isValid(`${x}${y - 1}`) &&
      moves.push(`${x}${y - 1}`);
    x + 1 !== 0 &&
      x + 1 !== 6 &&
      isValid(`${x + 1}${y}`) &&
      moves.push(`${x + 1}${y}`);
    x - 1 !== 0 &&
      x - 1 !== 6 &&
      isValid(`${x - 1}${y}`) &&
      moves.push(`${x - 1}${y}`);

    return { moves };
  }

  function isValid(newPosition) {
    if (takenLilypads.includes(newPosition)) {
      return false;
    } else {
      return true;
    }
  }

  const rows = [];
  for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 6; j++) {
      let color = "emerald-400";
      let emoji = "🪷";

      if (`${i}${j}` == player[0].position) {
        color = `${player[0].color}-400`;
        emoji = "🐸";
      } else if (`${i}${j}` == player[1].position) {
        color = `${player[1].color}-400`;
        emoji = "🐸";
      }

      if (
        `${i}${j}` != player[0].position &&
        `${i}${j}` != player[1].position &&
        takenLilypads.includes(`${i}${j}`)
      ) {
        color = "sky-500";
        emoji = "💧";
      }

      rows.push(
        <div
          key={`${i}${j}`}
          id={`${i}${j}`}
          onClick={handleMove}
          className={`w-20 h-20 rounded-xl border-[#272727] border flex justify-center items-center text-[2rem] cursor-pointer duration-300 bg-${color}/60 shadow-lg hover:scale-105`}
        >
          {emoji}
        </div>
      );
    }
  }

  return (
    <div id="board" className="relative p-[2rem] rounded-lg shadow-xl/20">
      <div className="grid grid-cols-5 grid-rows-5 w-max gap-[.5rem]">
        {rows}
      </div>
    </div>
  );
}
