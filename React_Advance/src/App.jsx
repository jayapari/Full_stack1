import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden item-center ">
      <h1 className=" bg-white rounded-lg w-11/12 text-center mt-[20px] mx-auto py-[10px] text-3xl font-bold">RANDOM GIFS...</h1>
      <div className="flex flex-col w-full justify-center items-center gap-y-10 mt-[30px]">
      <Random/>
      <Tag/>
      </div>
    </div>
  );
  
}
