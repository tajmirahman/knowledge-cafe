import PropTypes from 'prop-types';
import profile_pic from '../../assets/images/boy1.png'
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark }) => {
    const { cover, title, author, posted_date, reading_time, hashtag } = blog;
    return (
        <div className=' '>
            <img className='w-[845px] h-[450px]' src={cover} alt="title cover photo" />

            <div className='flex justify-between mt-7'>
                <div className='flex gap-4 '>
                    <img className='w-[40px]' src={profile_pic} alt="" />
                    <div >
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <div className='flex gap-2'>
                        <span>{reading_time} min red </span>

                        <button onClick={handleBookMark} className='text-red-400 text-2xl'>
                            <FaBookmark />
                        </button>
                    </div>

                </div>

            </div>

            <div>
                <h1 className='text-[40px] font-bold'>{title}</h1>
                <p>{hashtag}</p>
            </div>
            <hr className='my-4' />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;