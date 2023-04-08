import React from 'react'

export const Filter = (props) => {
   let filterData = props.filterData;
   let category= props.category;
   let setCategory = props.setCategory;

   function filterhandler(title)
   {
     setCategory(title);
   }

  return (
    <div  className=" w-11/12 flex flex-wrap space-x-5 gap-y-4 max-auto py-4 justify-center">
      {filterData.map((data) =>(

         <button
          key={data.id}  className={`text-white text-lg px-2 py-1 rounded-md font-medium
         bg-black hover:bg-opacity-50 border-2 
              transition-all duration-300
              
              ${category === data.title ? "bg-opacity-60 border-white":
              "bg-opacity-40 border-transparent" }`}
              
              onClick={()=>filterhandler(data.title)}>

          {data.title}
          </button>
      ))
      }
    </div>
  )
}

export default Filter;
