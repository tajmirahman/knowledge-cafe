import Header from "./components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Bookmark from "./components/Bookmark/Bookmark"

function App() {


  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Header></Header>
        {/* <hr className="mb-4 bg-red-200 "/> */}
        <div className=" md:flex ">
          <Blogs></Blogs>
          <Bookmark></Bookmark>
        </div>
      </div>



    </>
  )
}

export default App
