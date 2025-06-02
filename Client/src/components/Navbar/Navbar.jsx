import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLeaf, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { AuthContext } from '../../context/AuthProvider';

function Navbar() {
  const {user, logOut} = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log('User logged out');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink
              to="/"
              className="flex-shrink-0 flex items-center group"
            >
              <FaLeaf className="h-6 w-6 text-emerald-600 transition duration-300 group-hover:text-emerald-500" />
              <span className="ml-2 text-xl font-semibold text-gray-800 group-hover:text-emerald-600 transition duration-300">
                PlantCare
              </span>
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-1 py-2 border-b-2 text-sm font-medium transition-colors duration-200 ${isActive
                  ? 'border-emerald-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/allplant"
              className={({ isActive }) =>
                `px-1 py-2 border-b-2 text-sm font-medium transition-colors duration-200 ${isActive
                  ? 'border-emerald-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`
              }
            >
              All Plants
            </NavLink>

            <NavLink
              to="/addplant"
              className={({ isActive }) =>
                `px-1 py-2 border-b-2 text-sm font-medium transition-colors duration-200 ${isActive
                  ? 'border-emerald-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`
              }
            >
              Add Plant
            </NavLink>

            <NavLink
              to="/myplants"
              className={({ isActive }) =>
                `px-1 py-2 border-b-2 text-sm font-medium transition-colors duration-200 ${isActive
                  ? 'border-emerald-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`
              }
            >
              My Plants
            </NavLink>
           {
          user ? <button onClick={handleLogout} className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors duration-200">
            Signout 
          </button>
            : <button >
              <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-600 border border-transparent hover:border-gray-200'
                }`
              }
            >
              <FaSignInAlt className="mr-2 text-emerald-500" />
              Login
            </NavLink>

            </button>
        }


            {/* Register Button */}
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm hover:shadow-md'
                }`
              }
            >
              <FaUserPlus className="mr-2" />
              Register
            </NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={toggleMenu}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
           <div className='flex justify-center items-center md:ml-4 gap-5'>
            <ThemeToggle />
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL } />
        </div>
      </div>
           </div>
        </div>
      </div>

      {
        isOpen && (
          <div className="md:hidden">

            <div className="flex flex-col items-center space-y-2 mt-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive
                    ? 'text-gray-900 border-b-2 border-emerald-500'
                    : 'text-gray-500 hover:text-gray-700'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/allplant"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive
                    ? 'text-gray-900 border-b-2 border-emerald-500'
                    : 'text-gray-500 hover:text-gray-700'
                  }`
                }
              >
                All Plants
              </NavLink>
              <NavLink
                to="/addplant"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive
                    ? 'text-gray-900 border-b-2 border-emerald-500'
                    : 'text-gray-500 hover:text-gray-700'
                  }`
                }
              >
                Add Plant
              </NavLink>
              <NavLink
                to="/myplants"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive
                    ? 'text-gray-900 border-b-2 border-emerald-500'
                    : 'text-gray-500 hover:text-gray-700'
                  }`
                }
              >
                My Plants
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-600 border border-transparent hover:border-gray-200'
                  }`
                }
              >
                <FaSignInAlt className="mr-2 text-emerald-500" />
                Login
              </NavLink>

              {/* Register Button */}
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm hover:shadow-md'
                  }`
                }
              >
                <FaUserPlus className="mr-2" />
                Register
              </NavLink>
            </div>
          </div>
        )
      }
    </nav>
  );
}

export default Navbar;