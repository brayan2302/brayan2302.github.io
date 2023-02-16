import React from 'react'
import './TypingEffect.css'

const TypingEffect = () => {
  return (
    <div className='wrapper'>
      {/* <div className='static-txt'>I'm a</div> */}
      <ul className='dynamic-txts'>
        <li><span>Web Development</span></li>
        <li><span>Mobile Apps</span></li>
        <li><span>Freelancer</span></li>
        <li><span>Design UI / UX</span></li>
      </ul>
    </div>
  )
}

export default TypingEffect
