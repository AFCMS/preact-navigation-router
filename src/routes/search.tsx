import { useLocation } from "preact-iso/router/navigation-api";
import { useEffect, useState } from "preact/hooks";

export function Search() {
  const { query } = useLocation();

  const q = query["q"] || "";

  const data = [
    { id: 1, title: "AAAA" },
    { id: 2, title: "BBBB" },
    { id: 3, title: "CCCC" },
    { id: 4, title: "DDDD" },
    { id: 5, title: "EEEE" },
    { id: 6, title: "FFFF" },
    { id: 7, title: "GGGG" },
  ];

  const [filteredData, setFilteredData] = useState<{ id: number; title: string }[]>([]);

  useEffect(()=> {
    setFilteredData(data.filter(item => item.title.toLowerCase().includes(q.toLowerCase())))
  }, [q])

  return (
    <div>
      <div>Search: {q}</div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
