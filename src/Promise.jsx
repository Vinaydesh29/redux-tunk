import { useEffect, useState } from "react";

function Promise() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      return setData(data);
    };
    fetchData();
  }, []);
  return (
    <ul>
      {data.map((items, index) => {
        return <li key={index}>{items.title}</li>;
      })}
    </ul>
  );
}

export default Promise;
