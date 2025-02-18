import Header from "./components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Bookmark from "./components/Bookmark/Bookmark"
import { useState } from "react"

function App() {

  const [bookMarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead]= useState(0);

  const handleBookMark = (blog) => {
    // console.log(blog)
    const newBookMarks=[...bookMarks, blog];
    setBookmarks(newBookMarks); 
  }

  const handleMarkAsRead=(id, time)=>{
    setMarkAsRead(markAsRead + time);

    // remove bookmark
   
    const remaining = bookMarks.filter(bookmark=> bookmark.id !== id);
    setBookmarks(remaining);
  }



  return (
    <>

      <div className="max-w-6xl mx-auto">

        <Header></Header>
        
        <div className=" md:flex ">
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>

          <Bookmark bookMarks={bookMarks} markAsRead={markAsRead}></Bookmark>
        </div>

      </div>



    </>
  )
}

export default App
