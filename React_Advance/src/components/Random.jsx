import { useState } from "react";

export default function Random() {

const [gif,setGif]= useState('');
function clickHandler()
{

}

  return (
      <div className="flex flex-col items-center gap-y-5 mt-[15px] w-1/2 h-[450px] border-black rounded-lg bg-green-500">
        <h1 className="font-bold text-3xl underline touch-pan-up">A Random Gif</h1>
        <img src={gif} width="450"></img>

        <button onClick={clickHandler} className="w-10/12 bg-white opacity-40 rounded-md py-2 text-lg">
          Generate
        </button>
      </div>
      );
}
