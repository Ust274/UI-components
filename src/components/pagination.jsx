import { useState } from "react";

const Pagination = ({totalPosts,postsPerPage,setCurrentPage}) => {
    const [active , setActive] = useState(0);
    let pages = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }
// className="bg-blue-700 hover:bg-blue-500 text-white font-semibold px-3 py-1 m-1 rounded-full"
  return (
    <>
    <div>
        {pages.map((page,index) => (
            <button key={index} onClick={()=> {
                setCurrentPage(page)
                setActive(index)}
            } 
            className={active === index ? "bg-blue-900 text-white font-semibold px-3 py-1 m-1 rounded-full" : 
                "bg-blue-700 hover:bg-blue-500 text-white font-semibold px-3 py-1 m-1 rounded-full"}>
                {page}
            </button>
        ))}
    
    </div>

    </>
  )
}

export default Pagination