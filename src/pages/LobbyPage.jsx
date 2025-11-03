import { useState } from "react";
import Label from "../components/Label";
import Return from "../components/Return";

export default function LobbyPage() {
  const [name, setName] = useState(["", ""]);

  const [color, setColor] = useState(["red", "green"]);
  return (
    <div id="lobby">
      <div
        style={{
          zIndex: "99",
          position: "absolute",
          top: "2rem",
          left: "2rem",
        }}
        className="shadow-xl/20"
      >
        <Return prev="" />
      </div>
      <div className="absolute flex justify-evenly items-center h-full w-full ">
        <Label
          p={"player_1"}
          name={name}
          setName={setName}
          color={color}
          setColor={setColor}
        />
        <Label
          p={"player_2"}
          name={name}
          setName={setName}
          color={color}
          setColor={setColor}
        />
      </div>
    </div>
  );
}
