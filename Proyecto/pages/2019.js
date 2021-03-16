import Head from 'next/head'
import Card3 from "src/components/card3"
import Footer from 'src/components/footer'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HW Mx 2019</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <body background="https://i.postimg.cc/jjX7p5jJ/fondo-negro.png"></body>

        <h1 className="title">
        Año 2019
        </h1>

        <p className="description">
        </p>

        <div id="navegador">
        <ul>
        <li><a href="http://localhost:3000">Inicio</a></li>
        <li><a href="http://localhost:3000/anos">Años</a></li>
        <li><a href="http://localhost:3000/serie">Series</a></li>
        <li><a href="http://localhost:3000/STH">STH</a></li>
        <li><a href="http://localhost:3000/Zamac">Zamac</a></li>
        </ul>
        </div>

        <p className="description">
        </p>

        <img src="https://i.postimg.cc/gj8BKLfK/construccion.jpg"></img>
      </main>
    </div>
  )
}