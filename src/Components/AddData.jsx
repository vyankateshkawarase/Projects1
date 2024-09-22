import { Button, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";

const AddData = () => {
  const [inputValue, setinputValue] = useState("");
  const [dataList, setdataList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleAddData = () => {
    if (
      inputValue.trim() &&
      name.trim() &&
      email.trim() &&
      password.trim() &&
      number.trim()
    ) {
      setdataList([...dataList, { inputValue, name, email, password, number }]);
      setinputValue("");
      setName("");
      setEmail("");
      setPassword("");
      setNumber("");
    }
  };

  return (
    <div className="flex justify-center flex-col m-10">
      <Typography className="font-semibold text-lg">
        User Information
      </Typography>
      <div className="flex gap-4 justify-center mb-4">
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Enter your name"
        />
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Enter your email"
        />
      </div>
      <div className="flex gap-4 justify-center mb-4">
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Enter your password"
        />
        <Input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          label="Enter your number"
        />
      </div>
      <div className="flex gap-4 justify-center">
        <Input
          type="text"
          value={inputValue}
          label="Enter some data"
          onChange={handleChange}
        />
        <Button color="green" onClick={handleAddData}>
          Add Data
        </Button>
      </div>

      <div>
        {dataList.length > 0 ? (
            <table className="table-auto border-collapse w-full">
                <thead>
                    <tr>
                        <th className="border px-4 py-2 text-center">Sr. No.</th>
                        <th className="border px-4 py-2 text-center">Name</th>
                        <th className="border px-4 py-2 text-center">Email</th>
                        <th className="border px-4 py-2 text-center">Password</th>
                        <th className="border px-4 py-2 text-center">Number</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((data, index) => (
                        <tr key={index} className="bg-gray-100">
                            <td className="border px-4 py-2 text-center">{index + 1}</td>
                            <td className="border px-4 py-2 text-center">{data.name}</td>
                            <td className="border px-4 py-2 text-center">{data.email}</td>
                            <td className="border px-4 py-2 text-center">{data.password}</td>
                            <td className="border px-4 py-2 text-center">{data.number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : (
            <Typography>No Data Available</Typography>
        )}
      </div>
    </div>
  );
};

export default AddData;
