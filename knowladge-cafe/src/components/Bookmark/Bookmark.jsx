import PropTypes from 'prop-types';
import Bkmark from '../bkmark/bkmark';




const Bookmark = ({ bookMarks }) => {

    return (
        <div className="bg-gray-100 ml-3 p-2 h-[600px]">
            <h1 className="text-3xl">Bookmarked Blogs: {bookMarks.length}</h1>
            {
                bookMarks.map(bookmark => <Bkmark
                    key={bookmark.id}
                    bookmark={bookmark}
                ></Bkmark>)
            }
        </div>
    );
};

Bookmark.propTypes = {
    bookMarks: PropTypes.object.isRequired,

}

export default Bookmark;