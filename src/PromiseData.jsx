import { useEffect, useState } from "react";

function PromiseData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => setData(res));
  }, []);
  return (
    <ul>
      {data.map((items, index) => {
        return <li key={index}>{items.title}</li>;
      })}
    </ul>
  );
}
export default PromiseData;
