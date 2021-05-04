import Head from 'next/head'


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
       <button className="get-started">Get Started</button>
      </header>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Find your best teacher &rarr;</h3>
            <p>Whether you are a student or a teacher...</p>
          </a>


        </div>




    </div>
  )
}
