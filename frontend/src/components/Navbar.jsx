import {Link} from 'react-router-dom';
export default function Navbar() {
  const currentUser = null;


  return (
    <header className='shadow-md  bg-gray-800'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>

          <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex-wrap'>
              <span className='text-white'>Arte</span>
          </h1>
          </Link>

          <ul className='flex gap-4 '>
              <Link to='/home'>
              <li className=' text-white hover:underline'>Home</li>
              </Link>
              <Link to='/about'>
              <li className=' text-white hover:underline'>About</li>
              </Link>
              <Link to='/myprofile'>
              {currentUser  ? (
                <li className=' text-white hover:underline'>{currentUser.name}</li>
              ):
              (
                <Link to ='/login'>
                <li className=' text-white hover:underline'>Sign in</li>
                </Link>
              )}
              </Link>
              
          </ul>

        </div>
        <hr />
      
      </header>
  ) 
}
