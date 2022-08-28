import React, { useState, useEffect } from "react";
import DragNDrop from "./DragNDrop";

const defaultData = [
  { title: "To Do", items: ["Task 1", "Frontend Engineering", "3"] },
  { title: "In Progress", items: ["4", "5"] },
  { title: "Done", items: ["Something", "sometinh"] },
];
function Board() {
  const [data, setData] = useState();
  useEffect(() => {
    setData(defaultData);
  }, []);
  return <DragNDrop data={data} />;
}

export default Board;
