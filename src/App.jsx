import React from "react";
import { Background } from "./Components/Background";
import { Forground } from "./Components/Forground";

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-800 relative">
        <Background />
        <Forground />
      </div>
    </>
  );
};
export default App;
