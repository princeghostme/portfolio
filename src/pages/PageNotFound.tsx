import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="relative">
          <div className="absolute -inset-4">
            <div 
              className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
              style={{
                background: 'linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)'
              }}
            ></div>
          </div>
          <h1 className="relative text-9xl font-bold text-gray-900">
            404
          </h1>
        </div>
        
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Oops! Page not found
        </h2>
        
        <p className="mt-4 text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="mt-10">
          <button
            onClick={() => navigate(-1)}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200 transform hover:scale-105"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg 
                className="h-5 w-5 text-teal-300 group-hover:text-teal-200 transition-colors duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </span>
            Go back
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="mt-4 group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-teal-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 shadow-sm transition-all duration-200 transform hover:scale-105"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg 
                className="h-5 w-5 text-teal-500 group-hover:text-teal-600 transition-colors duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </span>
            Return home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
