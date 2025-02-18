import Header from "./components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Bookmark from "./components/Bookmark/Bookmark"
import { useState } from "react"

function App() {

  const [bookMarks, setBookmarks] = useState([]);

  const handleBookMark = (blog) => {
    // console.log(blog)
    const newBookMarks=[...bookMarks, blog];
    setBookmarks(newBookMarks); 
  }

  return (
    <>

      <div className="max-w-6xl mx-auto">

        <Header></Header>
        
        <div className=" md:flex ">
          <Blogs handleBookMark={handleBookMark}></Blogs>
          <Bookmark bookMarks={bookMarks}></Bookmark>
        </div>

      </div>



    </>
  )
}

export default App
