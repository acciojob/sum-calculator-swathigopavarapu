
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
      <h2>Sum Calculator</h2>
      <input
        type="number"
        value={input}
        onChange={handleChange}
        // placeholder="Enter a number"
      />
      <h3>Sum: {sum}</h3>
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
