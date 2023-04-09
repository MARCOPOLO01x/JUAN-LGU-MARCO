import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './index.css'

const INDEX = (props) => {
  return (
    <div className="index-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="index-super-admin-login">
        <img
          alt="IMAGE3597611269"
          src="/playground_assets/image3597611269-0z9-800h.png"
          className="index-bg"
        />
        <div className="index-main-box">
          <img
            alt="JuanLGUcopy21140"
            src="/playground_assets/juanlgucopy21140-wi5n-400w.png"
            className="index-juan-l-ucopy2"
          />
          <span className="index-text">
            <span>Hello!</span>
          </span>
          <span className="index-text2">
            <span>Sign-in to your account</span>
          </span>
          <img
            alt="Rectangle111143"
            src="/playground_assets/rectangle111143-n7ge-200h.png"
            className="index-pass"
          />
          <img
            alt="Rectangle121144"
            src="/playground_assets/rectangle121144-yb7i-200h.png"
            className="index-user"
          />
          <span className="index-text4">
            <span>Remember Me</span>
          </span>
          <Link to="/forgotpassword" className="index-text6">
            Forgot Password?
          </Link>
          <img
            alt="Vector1153"
            src="/playground_assets/vector1153-44y.svg"
            className="index-vector"
          />
          <img
            alt="usersvgrepocom1187"
            src="/playground_assets/usersvgrepocom1187-2ch9.svg"
            className="index-usersvgrepocom"
          />
          <input type="checkbox" className="index-checkbox" />
          <input
            type="text"
            placeholder="USERNAME"
            className="index-username input"
          />
          <input
            type="text"
            placeholder="PASSWORRD"
            className="index-password input"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-ixom-800h.png"
            className="index-pasted-image"
          />
        </div>
        <img
          alt="Rectangle111272"
          src="/playground_assets/rectangle111272-k29b-200h.png"
          className="index-header"
        />
      </div>
    </div>
  )
}

export default INDEX
