import PropTypes from 'prop-types';
import Bkmark from '../bkmark/bkmark';




const Bookmark = ({ bookMarks, markAsRead }) => {

    return (
        
        <div className="bg-gray-100 ml-3 p-2 h-[600px]">

            <div className='text-center mb-3 border-b-2 bg-sky-200 rounded-lg'>
                <h1 className='text-2xl'>Spent Time on Read-{markAsRead}</h1>
            </div>
            <h1 className="text-3xl mb-6">Bookmarked Blogs: {bookMarks.length}</h1>
            {
                bookMarks.map((bookmark, id) => <Bkmark
                    key={id}
                    bookmark={bookmark}
                ></Bkmark>)
            }
        </div>
    );
};

Bookmark.propTypes = {
    bookMarks: PropTypes.object.isRequired,
    markAsRead:PropTypes.object.isRequired

}

export default Bookmark;