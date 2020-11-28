import * as React from 'react'
import '../styles/styles.scss'
import MainLayout from "../layouts/MainLayout"
// @ts-ignore
import me from '../assets/img/me.webp'

export default () => {
  return <MainLayout>
        <section className="intro-hero is-flex-wrap-wrap is-flex is-justify-content-space-around is-align-items-center">
          <div className="mt-6 mb-6">
            <h1 className="title">
              Hi, I am Prince Billy Grham
            </h1>
            <h2 className="subtitle">
              I am a Professional Software Engineer
            </h2>
            <p>
              <button className="button is-success is-bordered is-light is-medium">
                Wanna Hire Me?
              </button>
            </p>
          </div>
          <div>
            <div className="my-photo-container">
              <img src={me} alt="Prince Billy Graham Karmoker"/>
            </div>
          </div>
    </section>
  </MainLayout>
}

