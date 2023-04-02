import React, { useEffect, useRef } from 'react'

type Props = {}

const Event = (props: Props) => {
  const first = useRef<HTMLDivElement>(null)

  useEffect(() => {

    first.current?.addEventListener('mouseenter', (e) => {
      console.log('mouseenter native')
    })

  }, [first.current])


  return (
    <div
      onClick={() => {
        console.log('div')
      }}
      ref={first}
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