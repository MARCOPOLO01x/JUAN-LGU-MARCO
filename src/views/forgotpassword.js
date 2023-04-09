import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './forgotpassword.css'

const FORGOTPASSWORD = (props) => {
  return (
    <div className="forgotpassword-container">
      <Helmet>
        <title>FORGOTPASSWORD - exported project</title>
        <meta property="og:title" content="FORGOTPASSWORD - exported project" />
      </Helmet>
      <div className="forgotpassword-forgot-password--uper-admin">
        <img
          alt="IMAGE3597612956"
          src="/playground_assets/image3597612956-wc7h-800h.png"
          className="forgotpassword-image359761"
        />
        <div className="forgotpassword-rectangle11">
          <img
            alt="JuanLGUcopy22956"
            src="/playground_assets/juanlgucopy22956-f10q-400w.png"
            className="forgotpassword-juan-l-ucopy2"
          />
          <span className="forgotpassword-text">
            <span>FORGOT PASSWORD?</span>
          </span>
          <span className="forgotpassword-text2">
            <span>PLEASE ENTER YOUR USER NAME</span>
          </span>
          <div className="forgotpassword-group8986">
            <img
              alt="usersvgrepocom2957"
              src="/playground_assets/usersvgrepocom2957-2sa.svg"
              className="forgotpassword-usersvgrepocom"
            />
          </div>
          <div className="forgotpassword-group8987">
            <span className="forgotpassword-text4">
              <span>RESET PASSWORD</span>
            </span>
          </div>
          <Link to="/" className="forgotpassword-navlink">
            <img
              alt="exitfullscreensvgrepocom2958"
              src="/playground_assets/exitfullscreensvgrepocom2958-5ww2.svg"
              className="forgotpassword-exitfullscreensvgrepocom"
            />
          </Link>
          <input
            type="text"
            placeholder="EMAIL ADDRESS"
            className="forgotpassword-textinput input"
          />
        </div>
        <img
          alt="Rectangle111272"
          src="/playground_assets/rectangle111272-k29b-200h.png"
          className="forgotpassword-header"
        />
      </div>
    </div>
  )
}

export default FORGOTPASSWORD
