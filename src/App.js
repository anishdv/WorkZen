import React from "react";
import ToDo from "./components/ToDo";
import Pomodoro from "./components/Pomodoro";
import LoFiMusic from "./components/LoFiMusic";
import MotivationalQuote from "./components/MotivationQuotes";

function App() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-slate-700 min-h-screen min-w-screen">
      <div className=" bg-gray-900 row-span-2 min-w-2 p-4 rounded-2xl">
        {/* <h2 className="text-2xl mb-4 text-white">ToDo</h2> */}
        <ToDo />
      </div>
      <div className=" bg-gray-900 row-span-2 min-w-md p-4 rounded-2xl">
        {/* <h2 className="text-2xl mb-4 text-white">Pomodoro</h2> */}
        <Pomodoro />
      </div>
      <div className=" bg-gray-900 row-span-2 min-w-md p-4 rounded-2xl">
        {/* <h2 className="text-2xl mb-4 text-white">Lo-Fi Music</h2> */}
        <LoFiMusic />
      </div>
      <div className="col-span-3  bg-gray-900 place-content-center rounded-2xl">
        <MotivationalQuote />
      </div>
    </div>
  );
}

export default App;
