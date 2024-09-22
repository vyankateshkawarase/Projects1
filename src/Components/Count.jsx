import { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
const Count = () => {
  const [Count, setCount] = useState(0);
  return (
    <div className="flex justify-center gap-4 m-6">
      <div>
        <Typography className="font-medium text-lg">
          Current Count is: {Count}
        </Typography>
      </div>
      <div className="flex justify-center gap-4">
        <Button onClick={() => setCount(Count + 1)} color="green">
          +
        </Button>
        <Button onClick={() => setCount(Count - 1)} color="blue">
          -
        </Button>
      </div>
    </div>
  );
};

export default Count;
