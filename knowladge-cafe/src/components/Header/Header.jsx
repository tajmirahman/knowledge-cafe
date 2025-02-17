import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between my-4 py-4 border-b-2 border-gray-400'>
            <h1 className='text-4xl font-bold'>Knowladge Kafe</h1>
            <img src={profile} alt="" />
        </div>
        
    );
};

export default Header;