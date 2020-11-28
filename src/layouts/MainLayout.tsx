
import * as React from 'react'
import '../styles/styles.scss'
import Header from '../components/Header'
import AnimatedLogo from "../components/AnimatedLogo"
import { useSpring } from "react-spring"
import { useCallback } from "react"


export default ({children}: {children: React.ReactNode}) => {
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])

  return (
    <div onMouseMove={onMove}>
      <Header/>
      <button className="contact-button">
        <AnimatedLogo className="animated-logo" st={st} xy={xy} />
      </button>
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}
