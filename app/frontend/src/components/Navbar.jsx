import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  const { page } = props;

  const navItems = [
    { to: "/", label: "Overall", icon: "/icons/home_icon.svg", key: "index" },
    { to: "/Processes", label: "Processes", icon: "/icons/processes_icon.svg", key: "processes" },
    { to: "/Apps", label: "Apps", icon: "/icons/apps_icon.svg", key: "apps" },
    { to: "/Hardware", label: "Hardware", icon: "/icons/cpu_icon.svg", key: "hardware" },
    { to: "/Discs", label: "Discs", icon: "/icons/disc_icon.svg", key: "discs" },
    { to: "/Internet", label: "Internet", icon: "/icons/network_icon.svg", key: "internet" },
  ];

  return (
    <div className='py-4 px-2 h-full'>
      <nav className='bg-gray-200 rounded h-full py-2'>
        <div className='flex justify-center p-2 mb-2'>
          <img src="/oversees_cyan.png" alt="" className='w-4 h-4 mr-1'/>
          <p className='text-xs font-segoe text-cyan-600'>oversees</p>
        </div>

        <ul>

          {navItems.map(item => (
            <li
              key={item.key}
              className={`py-2 px-4 my-1.5 mx-2 rounded-lg ${
                page === item.key ? 'bg-gray-200' : 'bg-gray-300'
              }`}
            >
              <Link to={item.to}>
                <div className='flex items-center justify-start'>
                  <img src={item.icon} alt="" className='w-5 h-5'/>
                  <p className='my-1 mx-2 text-sm font-segoe'>{item.label}</p>
                </div>
              </Link>
            </li>
          ))}

        </ul>
      </nav>
    </div>
  )
}

export default Navbar