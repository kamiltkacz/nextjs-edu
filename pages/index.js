import Head from "next/head";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export default function Home() {

  // Toggle functions for PopUp & Password visibility

  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }

  function toggleOff() {
    setShowMe(!showMe);
  }

  const [showPass, setShowPass] = useState(false);
  function togglePass() {
    setShowPass(!showPass);
  }

  return (
    <div className="container">
      <Head>
        <title>EDUICK</title>
      </Head>

      <div className="logo-first-letter"></div>
      <div className="logo-second-letter"></div>
      <div className="logo-third-letter"></div>
      <div className="logo-fourth-letter"></div>
      <div className="logo-fifth-letter"></div>
      <div className="logo-sixth-letter"></div>
      <div className="logo-seventh-letter"></div>

      <div className="text-works">How it works</div>
      <div className="text-about">About Us</div>

      <button className="btn-get-started" onClick={toggle}>
        Get Started
      </button>

      <div
        className="modal-content"
        style={{
          display: showMe ? "block" : "none",
        }}
      >
        <div className="modal">
          <button className="eclipse-close" onClick={toggleOff}>
            X
          </button>
          <div className="getStarted">Get Started</div>
          <div className="justLogin">just login</div>
          <p className="username-text">Username:</p>
          <input type="text" className="username"></input>
          <p className="password-text">Password:</p>
          <input
            type={showPass ? "text" : "password"}
            className="password"
          ></input>
          <i className="eye-icon" onClick={togglePass}>
            {eye}
          </i>
          <button className="btn-login">Login</button>
        </div>
      </div>

      <div className="shapes-grid">
        <div className="shape-left-1"></div>
        <div className="shape-left-2"></div>

        <img className="girl-student" src="/images/student.jpg" />

        {/* Vector 1(column)-1(row) */}

        <div className="vector-1-1"></div>
        <div className="vector-1-2"></div>
        <div className="vector-1-3"></div>
        <div className="vector-1-4"></div>
        <div className="vector-1-5"></div>
        <div className="vector-1-6"></div>

        <div className="vector-2-1"></div>
        <div className="vector-2-2"></div>
        <div className="vector-2-3"></div>
        <div className="vector-2-4"></div>
        <div className="vector-2-5"></div>
        <div className="vector-2-6"></div>

        <div className="vector-3-1"></div>
        <div className="vector-3-2"></div>
        <div className="vector-3-3"></div>
        <div className="vector-3-4"></div>
        <div className="vector-3-5"></div>
        <div className="vector-3-6"></div>

        <div className="vector-4-1"></div>
        <div className="vector-4-2"></div>
        <div className="vector-4-3"></div>
        <div className="vector-4-4"></div>
        <div className="vector-4-5"></div>
        <div className="vector-4-6"></div>

        <div className="shape-left-3"></div>

        <div className="card">
          <div className="text-find-your">Find your </div>
          <div className="text-best-teacher">best teacher</div>
          <br />
          <div className="long-paragraph">
            Whether you are a student trying to find your ideal private <br />{" "}
            language teachers/tutors or a teacher trying to find great students
            for your customised private lessons!
          </div>
        </div>
        <input
          type="search"
          placeholder="Type here what you are looking for"
          className="input-search"
        ></input>
        <button className="btn-teacher">
          <input type="checkbox" checked />
          I'm a teacher
        </button>
        <button className="btn-student">
          <input type="checkbox" />
          I'm a student
        </button>
        <button className="btn-search">Search</button>

        <div className="shape-right-1"></div>
        <div className="shape-right-2"></div>
      </div>
    </div>
  );
}
