import React from 'react'
import { NavLink } from 'react-router-dom'

const links=[
    {url:'/search', text:'🔍All'},
    {url:'/news', text:'📰News'},
    {url:'/images', text:'📷Images'},
    {url:'/videos', text:'🎥Videos'},
]

export default function Links() {
    let activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2";
  return (
    <div className="flex sm:justify-between justify-between items-center space-x-2 mt-4">
        {
            links.map(({url,text})=>(
                
                <NavLink to={url}  className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
                    {text}
                </NavLink>
                
                // {text}

            )
                
            )
        }
    </div>
  )
}
