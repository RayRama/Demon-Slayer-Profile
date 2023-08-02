import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  function navigationHandler(destination: string) {
    navigate(destination);
  }

  return (
    <div className="w-full text-white min-h-screen">
      <div
        className="left-triangle items-start justify-center flex"
        onClick={() => navigationHandler("uppermoon")}
      >
        <h1 className="uppermoon-font text-5xl mt-10">DEMON</h1>
      </div>
      <div
        className="right-triangle items-end justify-center flex"
        onClick={() => navigationHandler("uppermoon")}
      >
        <h1 className="uppermoon-font text-5xl md:mb-10 mb-10">SLAYER</h1>
      </div>
    </div>
  );
};
