import Header from "./components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Bookmark from "./components/Bookmark/Bookmark"
import { useState } from "react"

function App() {

  const [bookMark, setBookmark] = useState();

  const handleBookMark = (blog) => {
    console.log('book mark coming soon')
  }

  return (
    <>

      <div className="max-w-6xl mx-auto">

        <Header></Header>
        
        <div className=" md:flex ">
          <Blogs handleBookMark={handleBookMark}></Blogs>
          <Bookmark></Bookmark>
        </div>
        
      </div>



    </>
  )
}

export default App
