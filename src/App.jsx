import React from "react";
import data from "./data";
import { useState } from "react";
import Tours from "./components/Tours";



const App = () => {
  const [tours ,setTours] = useState(data);

  function removeTour(id)
  {
     const newTours = tours.filter(tour => tour.id !== id);
     setTours(newTours);

  }

  if(tours.length === 0){
    return(
      <div className="refresh flex flex-col space-y-4 items-center justify-center">
      <h2 className="font-bold text-2xl">No Tours Left</h2>
      <button className="font-bold text-xl py-1 px-3 border-2 border-gray-500  text-amber-800 rounded-xl cursor-pointer" onClick={() => setTours(data)}> Refresh</button>
      </div>
    )
  }

  return (
    <div>

      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
