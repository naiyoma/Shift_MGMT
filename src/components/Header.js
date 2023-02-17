import React from 'react';
import './homepage.css';

function Header() {
    return (
    <div className="container-home">
      <nav className="bg-purple-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </a>
                  <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </a>
                  <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:ml-6 flex items-center justify-start">
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Log In
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-2 gap-1">
        <div className="columns-home-01 ">
            <h2 className='banner-title'>
            <h2>The shift management software </h2>
            <h2>that makes scheduling super easy.</h2>
            <h2>Save on Time.</h2>
            </h2>
          <div className='container-email bg-white w-4 rounded-lg'>
            container
          </div>
        </div>
        <div className='columns-home-02'>
            <img src="https://desklog.io/wp-content/uploads/2022/09/banner-bg-img.png" alt="Girl in a jacket" className="banner-image font-black" />
        </div>

    </div>
        <div>
            footer
        </div>
    </div>
    );
  }
  
export default Header;
