import React from "react";
import reviews from "./data"
import Testimonal from "./Testimonal"

const App = () => {
  
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center item-center bg-gray-200">
      <div className=" text-center">
      <h1  className="text-4xl font-bold ">Our Testimonial</h1>
      <div  className="bg-violet-400 h-[4px] w-[150px] mt-1 mx-auto"></div>
      <Testimonal reviews ={reviews}/>
      </div>
    </div>
  );
};

export default App;
