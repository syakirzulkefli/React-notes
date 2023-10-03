import { useState } from "react";

function App() {
  const [isVisible, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(true);
    console.log(isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;