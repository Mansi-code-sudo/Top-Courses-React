import { toast } from "react-toastify";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";


function Card({course,likedCourses,setLikedCourses}){

    let para=course.description;

    if(para.length>100){
        para=para.substring(0, 100)+"...";
    }

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //pehle se like hai, ab unlike krenge
            setLikedCourses( (prev)=>prev.filter ((cid)=>(cid!==course.id)));
            toast.warning("Like Removed");
        }
        else{
            if(likedCourses.length==0){
                //yato ye pehle element hum like kr rhe hai
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=> [...prev],[course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    
    return(
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url}></img>
                
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id)?(<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
                    }
                </button>
                </div>

            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">{para}</p>
            </div>
        </div>
    )
}

export default Card;