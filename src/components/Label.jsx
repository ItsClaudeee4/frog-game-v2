import { useContext, useEffect } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { useSnackbar } from "../contexts/SnackbarContext";
import { useNavigate } from "react-router-dom";

export default function Label({ p, name, setName, color, setColor }) {
  const { player, setPlayer } = useContext(PlayerContext);

  const { handleSnackbarOpen } = useSnackbar();

  const colors = ["red", "green", "blue", "purple"];

  function handleNameChange(e) {
    let id = e.target.id;
    if (id == "player_1_input") {
      setName((prev) => [e.target.value, prev[1]]);
      /*
        setName(
          name.map((n, i) => {
            if (i == 0) {
              return e.target.value;
            } else {
              return n;
            }
          })
        )
      */
    } else if (id == "player_2_input") {
      setName((prev) => [prev[0], e.target.value]);
    }
  }

  function handleColorChange(e) {
    let id = e.target.id;
    let color = id.split(" ")[1];
    if (id.split(" ")[0] == "player_1_color") {
      // console.log(1);
      setColor((prev) => [color, prev[1]]);
    } else if (id.split(" ")[0] == "player_2_color") {
      setColor((prev) => [prev[0], color]);
    }
  }

  function handleReady(e) {
    let id = e.target.id;

    if (name[0].trim() == "" || name[1].trim() == "") {
      return handleSnackbarOpen("Names are required!");
    } else if (name[0] == name[1]) {
      return handleSnackbarOpen("Names must be different!");
    } else if (color[0] == color[1]) {
      return handleSnackbarOpen("Colors must be different!");
    }

    const button = document.getElementById(id);
    button.style.backgroundColor = "oklch(52.7% 0.154 150.069)";

    button.innerHTML = "✓  Ready";
    if (id == "player_1_ready") {
      setPlayer((prev) => [
        { name: name[0], color: color[0], ready: true, position: "11" },
        prev[1],
      ]);
    } else if (id == "player_2_ready") {
      setPlayer((prev) => [
        prev[0],
        { name: name[1], color: color[1], ready: true, position: "55" },
      ]);
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    // console.log(0);
    if (player[0].ready == true && player[1].ready) {
      navigate("/game");
    }
  }, [player]);

  return (
    <>
      <div
        id="label"
        className="w-[25rem] p-[2rem] flex flex-col gap-[2rem] rounded-lg shadow-xl/20"
      >
        <h1 className="text-3xl text-gray-500 text-center">
          Player {p == "player_1" ? 1 : 2}
        </h1>

        <div>
          <label
            htmlFor={p + "_input"}
            className="text-3xl text-gray-500 font-semibold "
          >
            Name:
          </label>
          <input
            type="text"
            id={p + "_input"}
            style={{
              boxShadow: "4px 4px #272727",
            }}
            className="text-gray-300 w-full rounded-md p-[1rem] ease-in duration-300 focus:outline-0 mt-2 border-2 border-[#272727]"
            value={p == "player_1" ? name[0] : name[1]}
            onChange={handleNameChange}
            placeholder="Enter a name"
            required
          />
        </div>

        <div>
          <label htmlFor="" className="text-3xl text-gray-500 font-semibold ">
            Color:
          </label>
          <div className="flex justify-evenly mt-2">
            {colors.map((c) => {
              return (
                <div
                  key={c}
                  id={p + "_color " + c}
                  style={{
                    boxShadow: "4px 4px #272727",
                  }}
                  className={`w-12 h-12 cursor-pointer rounded-xl border-2 border-[#272727]
          duration-300 hover:-translate-y-1 hover:scale-105
          ${
            (p === "player_1" && c === color[0]) ||
            (p === "player_2" && c === color[1])
              ? `bg-${c}-500`
              : `bg-${c}-400/50`
          }`}
                  onClick={handleColorChange}
                ></div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            id={p + "_ready"}
            style={{
              border: "1px solid #272727",
              boxShadow: "0 3px #272727",
            }}
            className="bg-[#624A35]/90 cursor-pointer text-md p-[1rem] rounded-md duration-300 hover:scale-105 self-center"
            onClick={handleReady}
          >
            Ready
          </button>
        </div>
      </div>
    </>
  );
}
