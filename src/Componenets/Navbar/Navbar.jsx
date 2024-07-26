import React from 'react'

function Navbar() {
  return (
    <div className='fixed top-0 w-full h-20 p-8 flex justify-between bg-black'>
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" className='fixed left-10 w-28' />
     <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt=""  className='fixed right-10 w-8 '/>

    </div>
  )
}

export default Navbar