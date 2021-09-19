import React, { useState, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import './Slider.css';

const slides = [
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2090&q=80',
  'https://images.unsplash.com/photo-1504474127570-b85e37972adc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1457&q=80',
  'https://images.unsplash.com/photo-1593786734178-9a377d389292?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1519684093736-61f49e250672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1562412783-042950e920aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=969&q=80'
  
]

export default function Slider() {
  const [index, set] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  })
  useEffect(() => {
    const t = setInterval(() => set(state => (state + 1) % slides.length), 6000)
    return () => clearTimeout(t)
  }, [])
  return (
       <div className="image-container">
            <div className="text-container">
                <div id="text-l3" >
                           LOOF!{"\n"}
                 </div>
                 
                 <div id="text-l1" >
                 &nbsp;&nbsp;&nbsp;&nbsp;GATHER  &nbsp;   TOGETHER
                 </div>
                
                 
            </div>
    <div className="image-animate">
      {transitions((style, i) => (
        <animated.div
          className="bg"
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
          }}
        />
      ))}
    </div>
    </div>
  )
}
