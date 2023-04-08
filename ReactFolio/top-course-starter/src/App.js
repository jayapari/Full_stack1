import React from "react";
import {apiUrl,filterData} from './data'
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import { Spinner } from "./components/Spinner";

const App = () => {

const [courses, setCourses]= useState(null);
// const [courses, setCourses]= useState([]);
const [loading, setloading] = useState(true);
const [category, setCategory]= useState(filterData[0].title);

async function fetchData() {
  setloading(true);
    try{
       const res = await fetch(apiUrl);
       const output = await res.json();
       //save data into a variable
       console.groupCollapsed(output);
       setCourses(output.data);
       console.log("App js : ");
       console.log(courses); 
    }
    catch(error)
    {
       toast.error("something went wrong");
    }
    setloading(false);
  }
  useEffect( ()=>{
     fetchData();
    },[])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark bg-opacity-70">
      <div> <Navbar/></div>
      <div>
      <Filter
         filterData = {filterData}
         category={category}
         setCategory={setCategory}
      />
      </div>
      <div className=" w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center">
        {
          loading ? (<Spinner/>):(<Cards courses ={courses}category={category} / >)
        }
      </div>
     
    </div>
  );
};

export default App;
