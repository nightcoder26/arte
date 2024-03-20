import {useEffect, useState,} from 'react'
import logo from '../../public/vite.svg'
import {
    FaFacebookF,
    FaGoogle
} from 'react-icons/fa';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormData = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
    console.log(formData);
  }

  const handleCreateSession = async (e) => {
  }



  return (
    <div className='flex justify-center items-center h-[100vh]  gap-5 p-3'>

    <div className="min-h-screen flex flex-col items-center justify-center  h-[100%] w-[100%]">
      
      <div className="bg-white  rounded-lg px-2 py-2 w-full max-w-md sm:px-8 sm:py-8">
        <img src={logo} alt='logo' className='h-[50px] w-[50px] '/>
        <h1 className="text-2xl   mb-4 font-light ">Welcome to Arte!</h1>
        <p className="text-gray-700  mb-8">
          Please sign-in to your account and start the adventure
        </p>

        <div className='bg-[rgb(232,231,253)]  rounded-lg  my-4 text-xs p-3 text-purple-500 font-light sm:text-sm' >
            <p>Username: <span className='font-semibold'>demo_123</span> / Pass: <span className='font-semibold'>demo@123</span></p>
        </div>


        <form onSubmit={(e)=> handleCreateSession(e)}>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name='username'
              autoComplete='off'
              onChange={(e)=> handleFormData(e)}
              className="w-full px-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:px-3 sm:py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name='password'
              autoComplete='off'
              onChange={(e)=> handleFormData(e)}
              className="w-full px-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:px-3 sm:py-2"
            />
          </div>


          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <input type="checkbox" className="mr-2 rounded" />
              Remember me
            </label>
            <a  className="text-sm text-[rgb(115,102,240)] hover:underline cursor-not-allowed">
              Forgot Password?
            </a>
          </div>

          <button type='submit' className={`w-full py-1.5 px-3 bg-[rgb(115,102,240)] hover:bg-[rgb(103,90,215)] text-white rounded-lg font-medium focus:outline-none  sm:px-4 ${loading ? 'cursor-not-allowed' : 'null'}`}>
          {loading ? (
            <>Loading ...</>
          ):
          (
            <>Sign In</>
          )}
          
          </button>

          {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
        
        </form>

        <div className="flex items-center justify-center mt-6">
          <p className="text-sm text-gray-700 mr-2">New on our platform?</p>
          <span className="text-sm text-[rgb(115,102,240)] hover:underline font-semibold cursor-pointer" onClick={()=>navigate('/sign-up')}>
            Create an account
          </span>
        </div>

        <span className="text-sm text-gray-700 mr-2 flex justify-center items-center gap-5 p-3"> <hr className='border border-grey-400 flex-1'/> <span>or</span> <hr className='border border-grey-500 flex-1'/></span>

        <div className="flex items-center justify-center mt-4">
        
           <a href="#" className="text-sm text-blue-500 hover:underline ml-2 p-3 bg-red-200 m-2 rounded-lg hover:bg-red-300 cursor-not-allowed">
            <FaGoogle className='text-red-400' />
          </a>

          <a href="#" className="text-sm text-blue-500 hover:underline p-3 bg-blue-200 m-2 rounded-lg hover:bg-blue-300 cursor-not-allowed">
            <FaFacebookF/>
          </a>
          
        </div>

      </div>

    </div>
    </div>
  )
}
