import { useState } from 'react'
export default function Box(props) {

     const [on, setOn] = useState(props.on)
     function toggle() {
          setOn(prevOn => !prevOn)
     }
     const style = {
          backgroundColor: on ? 'red' : 'transparent',
          color: on ? 'white': '#222222'
     }
     return (
          <div className='main'>
          <div style={style} className="box" onClick={toggle}>STATE CHANGE</div>
          </div>
     )
}