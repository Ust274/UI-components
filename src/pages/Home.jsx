import { useState } from 'react';
import {items,List} from '../components/list'
import Pagination from '../components/pagination';


const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currPosts = items.slice(firstPost, lastPost);
  return (
    <>
    <div className='bg-gradient-to-br from-black to-gray-900 m-0'>
    <h1 className='flex flex-col place-items-center text-4xl font-semibold text-blue-700 mb-5 mt-2 '> List of Courses </h1>
    <div className='min-h-screen flex-1 flex-col place-items-center'>
      <List List={currPosts}/>
      <Pagination 
      totalPosts={items.length}
      postsPerPage={postsPerPage}
      setCurrentPage={setCurrentPage}
      />
    </div>
    </div>
    </>   
  )
}

export default Home