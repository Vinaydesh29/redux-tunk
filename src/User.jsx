import { useContext } from "react";
import { NameContext } from "./App";

function User() {
  const { val, theme } = useContext(NameContext);
  const style = {
    backgroundColor: theme ? "white" : "black",
    color: theme ? "black" : "white",
  };
  return (
    <div style={style}>
      <h1>name is {val}</h1>
    </div>
  );
}

export default User;
