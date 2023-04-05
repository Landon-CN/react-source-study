import React, { useEffect, useRef, useState } from 'react'

type Props = {}

const Event = (props: Props) => {
  // const first = useRef<HTMLDivElement>(null)

  // useEffect(() => {

  //   first.current?.addEventListener('mouseenter', (e) => {
  //     console.log('mouseenter native')
  //   })

  // }, [first.current])
  const [first, setfirst] = useState(1)



  return (
    <div
      onClick={() => {
        console.log('div')
      }}

      onMouseEnter={(e) => {
        e.stopPropagation()
        console.log("onMouseEnter")
      }}>
      <button onClick={(e) => {
        e.stopPropagation()
        console.log('button')
      }}>测试</button>
    </div>
  )
}

export default Event
