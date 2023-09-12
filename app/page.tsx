"use client";
import { useState } from "react";

export default function Home() {
  const [boxColor, setBoxColor] = useState<any>("green");

  return (
    <div className="page">
      <div className="container">
        <div className="box-container">
          <ColorBoxComponent color={boxColor} />
        </div>

        <div className="btn-container">
          <button className="green-btn" onClick={() => setBoxColor("green")}>
            Green
          </button>
          <button className="blue-btn" onClick={() => setBoxColor("blue")}>
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

const ColorBoxComponent = ({ color }: any) => {
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        border: "1px solid #989898",
        borderRadius: "5px",
        backgroundColor: color,
        color: "white",
      }}
    ></div>
  );
};
