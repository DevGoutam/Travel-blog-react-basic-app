import Card from "./Card";
import React from "react";

function Tours({tours, removeTour}) {
  return (
    <div className="flex items-center justify-center  flex-col">
      <div>
        <h2 className="text-[3rem] m-[6vh] border-[7px] border-dashed border-blue-800 rounded-[20px] py-[1vh] px-[5vw] font-bold">Plan with Kush</h2>
      </div>
      <div  className="flex items-center justify-center flex-wrap mx-auto max-w-[1300px]" >{
        tours.map((tour)=>{
       return <Card {...tour} removeTour= {removeTour} ></Card>
      })

      }
      </div>
    </div>
  );
}

export default Tours;
