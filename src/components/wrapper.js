import React from 'react';

const Wrapper = ({children}) => {
  return (
    <div className='wrapper'>
       <p style={{backgroundColor:'red'}}> new test for wrapper</p>
       {children}
    </div>
  )
}

export default Wrapper;