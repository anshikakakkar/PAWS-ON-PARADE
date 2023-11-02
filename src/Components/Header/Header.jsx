import React from 'react'
import {Link , NavLink} from 'react-router-dom'
import weblogo from '../../assets/weblogo.jpg'

const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0">
    <nav className=" bg-sky-950 border-gray-200 px-4 lg:px-6 py-2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        
            <Link to="/" className="flex items-center">
                <img
                    src={weblogo}
                    className="mr-3 h-28"
                    alt="Logo"
                />
            </Link>
            
            <div
                className="hidden justify-between w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
                <ul className="flex flex-col mt-4 font-small lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink to="/"
                            className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white text-xl font-semibold  font-family:Agbalumo  border-white border-4 border-dotted rounded-full" : "text-white text-2xl font-semibold border-4 border-double rounded-full border-white "}  hover:text-white hover:translate-y-1 hover:border-2 hover:border-double hover:cursor-pointer`
                            }
                        >
                            HOME
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/Whatwedo"
                            className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white text-xl text font-semibold  border-white border-4 border-dotted rounded-full  " : "text-white text-2xl font-semibold border-4 border-double rounded-full border-white"}  hover:text-white hover:translate-y-1 hover:border-2 hover:border-double hover:cursor-pointer `
                            }
                        >
                            WHAT WE DO
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/Whoweare"
                            className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white text-xl text font-semibold  border-white border-4 border-dotted rounded-full  " : "text-white text-2xl font-semibold border-4 border-double rounded-full border-white"}  hover:text-white hover:translate-y-1 hover:border-2 hover:border-double hover:cursor-pointer`
                            }
                        >
                            WHO WE ARE
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/Waystohelp"
                            className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white text-xl text font-semibold   border-white border-4 border-dotted rounded-full  " : "text-white text-2xl font-semibold border-4 border-double rounded-full border-white"}  hover:text-white hover:translate-y-1 hover:border-2 hover:border-double hover:cursor-pointer`
                            }
                        >
                            WAYS TO HELP
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/Waystohelp"
                            className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white text-xl text font-semibold   border-white border-4 border-dotted rounded-full  " : "text-white text-2xl font-semibold border-4 border-double rounded-full border-white"}  hover:text-white hover:translate-y-1 hover:border-2 hover:border-double hover:cursor-pointer`
                            }
                        >
                            LOG IN
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
</header>
  )
}

export default Header
