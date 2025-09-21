
import React,{useState} from "react";
import './../styles/App.css';

const SumCalculator = () => {
  const [sum, setSum] = useState(0);     
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value === "" ? "" : Number(e.target.value);

    if (newValue !== "") {
      setSum((prev) => prev + newValue);
    } else {
      setInput("");
    }

    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={input}
        onChange={handleChange}
        // placeholder="Enter a number"
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <SumCalculator />
    </div>
  )
}

export default App
