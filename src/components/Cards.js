import { useState } from "react";
import Card from "./Card";

function Cards(props){

    let courses=props.courses;
    let category=props.category;

    const[likedCourses,setLikedCourses]=useState([]);

    const allCourse=[];

    const getThemAll =()=>{

        if(category==="All"){
            Object.values(courses).forEach( (courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourse.push(course);
                })
            })
            return allCourse;
        }
        else{
            //sirf specific category ka data pass krna hai
            return courses[category];
        }

    }



    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
        
            {
                getThemAll().map((course)=>{
                    return (<Card key={course.id} 
                        course={course} 
                        likedCourses={likedCourses} 
                        setLikedCourses={setLikedCourses}/>)
                })
            }
        </div>
    )
}

export default Cards;