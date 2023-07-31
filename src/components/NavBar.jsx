import React from 'react'


export const NavBar = () => {
  

//?-------------------------------------------------------------------------
  return (
<nav className="bg-cyan-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start  flex-shrink-0">
          <h1 className="text-white text-xl font-bold">columbus bakery wholesale</h1>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <p type="text" className="relative p-1 text-gray-200 ">
          <span>Ana Maria</span>
          <br/>
          <span className=''>POS</span>
        </p>

        <div className="relative ml-3 ">
            <img src='src\assets\images\perfil.png' className="h-8 w-8  "/>
        </div>
      </div>
    </div>

  </div>

</nav>

  )
}
