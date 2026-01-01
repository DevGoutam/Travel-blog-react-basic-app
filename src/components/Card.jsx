import { useState } from "react";
import React from "react";

function Card({id,image,info,price,name, removeTour}) {

const [readmore , setReadmore] = useState(false);
const description = readmore ?info  : info.substring(0,200) + "...." ;
 
function readmoreHandler(){
  setReadmore(!readmore); 
}



  return(
    <div className="card w-[400px] h-max m-4 p-4 flex flex-col  rounded-[10px] shadow-lg ">
   <img src={image}  className="w-[380px] aspect-square object-cover"/>
    <div className="tour-info my-[20px] mx-[5px]  ">

   <div className="tour-details  ">
    <h4 className="tour-price font-bold text-xl text-green-600" >₹ {price}</h4>
    <h4 className="tour-name font-bold text-2xl">{name}</h4>
   </div>
   <div className="description leading-6.8">
    {description}
    <span className="read-more  font-bold text-blue-400 cursor-pointer" onClick={readmoreHandler}>
      { readmore ? `Show less`  : `Read more`} 
    </span>
   </div>
    </div>

<button className="btn-red w-[60%] mx-auto border-red-500 border-1 py-1 flex items-center justify-center rounded-xl font-bold bg-red-100 hover:bg-white hover:text-red-500 cursor-pointer transition-all duration-200" onClick={() =>removeTour(id)}> Not Interested</button>
    </div>
  );


}

export default Card;