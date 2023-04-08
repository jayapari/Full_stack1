import React from 'react'
import { Card } from './Card';
import { useState } from "react";

 const Cards = (props) => {
    let courses= props.courses;
    let category = props.category;
    const [likedCourses, setlikedCourses]= useState([]);

//returns you a list of all courses received from the api response
  function getCourses(){
    
    if(category === "All")
    {
      let allCourses =[];
      console.log(courses);
      Object.values(courses).forEach( (courseCategory) =>{
        courseCategory.forEach((course) => {
            allCourses.push(course);
        })
    })
    return allCourses;
    }
    else{
      //fetch only specific category data
      return courses[category];
    }
  }
  
    return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        
        { 
        getCourses().map((course) => {
        return <Card  key={course.id} course={course} 
        likedCourses={likedCourses}
        setlikedCourses={setlikedCourses}/>
       })
       }
    </div>
  )
}
export default Cards;
