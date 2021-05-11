import Head from "next/head";
// import PopUp from "./PopUp";






export default function Home() {

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

      <div className="p-works">How it works</div>
      <div className="p-about">About Us</div>

      <button className="btn-get-started">Get Started</button>

      <div className="modal">
     <div className="modal_content">
     <span className="close"></span>
     <p>I'm A Pop Up!!!</p>
    </div>
   </div>




      <div className="grid">
        <div className="shape-left-1"></div>
        <div className="shape-left-2"></div>

        <img className="girl-student" src="/images/student.jpg" />





        {/* <div className="vector-row-1"> */}
        <div className="vector-1-1"></div>
        <div className="vector-1-2"></div>
        <div className="vector-1-3"></div>
        <div className="vector-1-4"></div>
        <div className="vector-1-5"></div>
        <div className="vector-1-6"></div>
        {/* </div><br /> */}

        {/* <div className="vector-row-2"> */}
        <div className="vector-2-1"></div>
        <div className="vector-2-2"></div>
        <div className="vector-2-3"></div>
        <div className="vector-2-4"></div>
        <div className="vector-2-5"></div>
        <div className="vector-2-6"></div>
        {/* </div><br /> */}
        {/* <div className="vector-row-3"> */}
        <div className="vector-3-1"></div>
        <div className="vector-3-2"></div>
        <div className="vector-3-3"></div>
        <div className="vector-3-4"></div>
        <div className="vector-3-5"></div>
        <div className="vector-3-6"></div>
        {/* </div><br /> */}
        {/* <div className="vector-row-4"> */}
        <div className="vector-4-1"></div>
        <div className="vector-4-2"></div>
        <div className="vector-4-3"></div>
        <div className="vector-4-4"></div>
        <div className="vector-4-5"></div>
        <div className="vector-4-6"></div>
        {/* </div> */}


        <div className="shape-left-3"></div>

        <div className="card">
          <div className="find-your">Find your </div>
          <div className="best-teacher">best teacher</div>
          <br />
          <div className="long-paragraph">
            Whether you are a student trying to find your ideal private <br /> language
            teachers/tutors or a teacher trying to find great students for your
            customised private lessons!
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
          <input type="checkbox"  />
          I'm a student
        </button>
        <button className="btn-search">Search</button>

        <div className="shape-right-1"></div>
        <div className="shape-right-2"></div>
      </div>
     </div>


  );
}


