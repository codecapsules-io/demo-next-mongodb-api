import Head from 'next/head'
import React, {useState} from 'react';
import axios from 'axios';

const Index = () => {

    const [name, setName] = useState("")
  const [nameId, setNameId] = useState(null)
  const [retrievedName, setRetrievedName] = useState("")

  const postWithAxios = (e) => {
    e.preventDefault()
    const data = { name: name}
    axios.post('/api/person', data)
        .then(response => {
          console.log(response)
          setNameId(response.data.id)
        })
  }

  const getWithAxios = (e) => {
    e.preventDefault()
    const data = { id: nameId}
    axios.post('/api/getperson', data)
      .then(response => {
        console.log(response)
        setRetrievedName(response.data.name)
      })
  }

  return(
<div className="container">
    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
    <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js</a> + <a href="https://www.mongodb.com/">MongoDB</a>
    </h1>

    <p className="description">
        <code>This app performs simple read and writes for user's names using the Next API routing system.</code>
    </p>

    <p className="description">
        <code>Submit your name in the form below.</code>
    </p>

    <div className="displayFormContainer">
      <p><code>Hey there {retrievedName ? retrievedName : null}</code></p>
      <form onSubmit={postWithAxios}>
        <input type="text" placeholder="Name..." value={name} 
          onChange={e => setName(e.target.value)} name="name" />
        <button type="submit">Submit</button>
      </form>
      <button onClick={getWithAxios}>View Personal Message</button>
    </div>

    </main>

    <footer>
    <a
        href="https://codecapsules.io/"
        target="_blank"
        rel="noopener noreferrer"
    >
        A Code Capsules Example Application
    </a>
    </footer>

    <style jsx>{`
    .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    footer img {
        margin-left: 0.5rem;
    }
    footer a {
        color: #0070f3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    .title a {
        color: #0070f3;
        text-decoration: none;
    }
    .title a:hover,
    .title a:focus,
    .title a:active {
        text-decoration: underline;
    }
    .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
    }
    .title,
    .description {
        text-align: center;
    }
    .description {
        line-height: 1.5;
        font-size: 1.5rem;
    }
    code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    }
    .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 800px;
        margin-top: 3rem;
    }
    .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
    }
    .card:hover,
    .card:focus,
    .card:active {
        color: #0070f3;
        border-color: #0070f3;
    }
    .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    }
    .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
    }
    .logo {
        height: 1em;
    }
    @media (max-width: 600px) {
        .grid {
        width: 100%;
        flex-direction: column;
        }
    }
    `}</style>

    <style jsx global>{`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    `}</style>
    </div>
  )

    
}
export default Index