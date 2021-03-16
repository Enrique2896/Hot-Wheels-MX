import Head from 'next/head'
import Card from "src/components/card"
import Footer from 'src/components/footer'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HW Mx Años</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <body background="https://i.postimg.cc/jjX7p5jJ/fondo-negro.png"></body>

      <h1 className="title">
            Organización por Años
        </h1>

        <p className="description">
        Aquí encontraras todos los castings ordenados por su año de lanzamiento
        </p>



        <div id="navegador">
        <ul>
        <li><a href="http://localhost:3000">Inicio</a></li>
        <li><a href="http://localhost:3000/serie">Series</a></li>
        <li><a href="http://localhost:3000/STH">STH</a></li>
        <li><a href="http://localhost:3000/Zamac">Zamac</a></li>
        </ul>
        </div>






        <div className="grid pb-6">
          <Card link={"http://localhost:3000/2021"} title={"Colección 2021"} imgn={"https://i.postimg.cc/fWtC8yKk/2021.jpg"} />
          <Card link={"http://localhost:3000/2020"} title={"Colección 2020"} imgn={"https://i.postimg.cc/jSWS76XM/2020.jpg"} />
          <Card link={"http://localhost:3000/2019"} title={"Colección 2019"} imgn={"https://i.postimg.cc/d3KfkhJV/2019-Mini-Collection-Category-tcm1014-153480.jpg"} />
          <Card link={"http://localhost:3000/2018"} title={"Colección 2018"} imgn={"https://i.postimg.cc/XvmmW2hF/2018-year-tile-LAM-tcm1014-152283.jpg"}/>
        </div>
      </main>

      <Footer />

  
    </div>
  )
}