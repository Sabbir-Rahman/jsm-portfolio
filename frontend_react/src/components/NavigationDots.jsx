import React from 'react'

const NavigationDots = ({active}) => {
  const navigationComponnets = ['home', 'about', 'work', 'skills', 'contact']

  return (
    <div className='app__navigation'>
      {navigationComponnets.map((item,index) => (
        <a 
          href={`#${item}`}
          key= { item+index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' }: {}}
        >
          
        </a>
      ))}
    </div>
  )
}

export default NavigationDots