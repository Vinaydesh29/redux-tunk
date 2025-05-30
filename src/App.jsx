import { createContext, useState } from "react";
import Context from "./Context";
import UseCall from "./UseCall";
import TestAxios from "./TestAxios";
export const NameContext = createContext();

function App() {
  const [name, setName] = useState("");
  const [val, setVal] = useState("");
  const [theme, setTheme] = useState(true);
  const HandleClick = () => {
    setVal(name);
  };
  return (
    <NameContext.Provider value={{ val, theme }}>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={HandleClick}>submit</button>
      <button onClick={() => setTheme((prev) => !prev)}>ChangeTheme</button>
      <Context />
    </NameContext.Provider>
  );
}
export default App;
