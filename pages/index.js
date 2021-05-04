import Head from 'next/head'
import Image from 'next/image'





export default function Home() {



  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="headerStyle">
       <p className="logo-first-letter"></p>
       {/* <div className="logo-group-letters">
       <p className="logo-second-letter"></p>
       <p className="logo-third-letter"></p>
       <p className="logo-fourth-letter"></p>
       </div> */}
       <p className="p-works">How it works</p>
       <p className="p-about">About Us</p>
       <button className="btn-get-started">Get Started</button>
      </header>






        <div className="grid">
        <div className="shape-left-1"></div>
        <div className="shape-left-2"></div>
        <div className="shape-left-3"></div>

        <div className="dotted-detail">

        <div className="vector-row-1">
        <div className="vector-1-1"></div>
        <div className="vector-1-2"></div>
        <div className="vector-1-3"></div>
        <div className="vector-1-4"></div>
        <div className="vector-1-5"></div>
        <div className="vector-1-6"></div>
        </div><br />


        <div className="vector-row-2">
        <div className="vector-2-1"></div>
        <div className="vector-2-2"></div>
        <div className="vector-2-3"></div>
        <div className="vector-2-4"></div>
        <div className="vector-2-5"></div>
        <div className="vector-2-6"></div>
        </div><br />
        <div className="vector-row-3">
        <div className="vector-3-1"></div>
        <div className="vector-3-2"></div>
        <div className="vector-3-3"></div>
        <div className="vector-3-4"></div>
        <div className="vector-3-5"></div>
        <div className="vector-3-6"></div>
        </div><br />
        <div className="vector-row-4">
        <div className="vector-4-1"></div>
        <div className="vector-4-2"></div>
        <div className="vector-4-3"></div>
        <div className="vector-4-4"></div>
        <div className="vector-4-5"></div>
        <div className="vector-4-6"></div>
        </div>
        </div>


        <img src="/images/student.jpg"/>



          <div className="card">
            <p className="p-find-teacher">Find your </p>
            <p >best teacher</p><br />
            <text>Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying to find great students for your customised private lessons!</text>
          </div>
          <input type="search" placeholder="Type here what you are looking for" className="input-search"></input>
          <button className="btn-student"><input type="checkbox"/>I'm a student</button>
          <button className="btn-teacher"><input type="checkbox"/>I'm a teacher</button>
          <button className="btn-search">Search</button>

          <div className="shape-right-1"></div>
        <div className="shape-right-2"></div>
        </div>




    </div>
  )
}
