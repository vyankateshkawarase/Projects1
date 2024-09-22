import { Textarea, Button } from "@material-tailwind/react";
import { useState } from "react";

const StateManage2 = () => {
  const [Text, setText] = useState("Enter text here . . . . . .");

  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };

  const handleLwClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center w-80 ml-[38rem] m-6">
        <Textarea value={Text} onChange={handleChange} />
      </div>
      <div className="flex justify-center gap-4">
        <Button onClick={handleUpClick} color="green">
          UpperCase
        </Button>
        <Button onClick={handleLwClick} color="blue">
          LowerCase
        </Button>
      </div>
    </div>
  );
};

export default StateManage2;
