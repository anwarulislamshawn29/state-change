import { useState } from 'react'
export default function Box(props) {

     const styles = {
          backgroundColor: props.on ? 'red' : 'transparent',
          color: props.on ? 'white': '#222222'
     }
 
     return (
          <div className='main'>
               <div style={styles} 
                    className="box" 
                    onClick={()=>props.toggle(props.id)}
                    >STATE CHANGE
               </div>
          </div>
     )
}