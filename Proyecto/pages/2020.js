import Head from 'next/head'
import Card3 from "src/components/card3"
import Footer from 'src/components/footer'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HW Mx 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <body background="https://i.postimg.cc/jjX7p5jJ/fondo-negro.png"></body>

        <h1 className="title">
        Año 2020
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

        <div class="flex justify-start ...">
        <Card3 title={"2 Jet Z"} description={"Serie: HW Dream Garage (01)"}imgn={"https://static.wikia.nocookie.net/hotwheels/images/c/c8/CaseB0005.jpg/revision/latest/scale-to-width-down/572?cb=20191102163129"} />
        <Card3 title={"Nissan Skyline GT-R (BNR32)"} description={"Serie: HW Turbo (01)"}imgn={"https://static.wikia.nocookie.net/hotwheels/images/a/a7/CaseA200002.jpg/revision/latest/scale-to-width-down/611?cb=20191102020659"} />
        <Card3 title={"Land Rover Series III Pickup"} description={"Serie: Baja Blazers (10)"}imgn={"https://static.wikia.nocookie.net/hotwheels/images/8/87/S-l300-1581412686.jpg/revision/latest/scale-to-width-down/300?cb=20200211091806"} />
        <Card3 title={"Tooligan"} description={"Serie: 	Experimotors (01)"}imgn={"https://http2.mlstatic.com/D_NQ_NP_963366-MLM40575247426_012020-O.jpg"} />
        </div>
        <div class="flex justify-start ...">
        <Card3 title={"	Gotta Go"} description={"Serie: Experimotors (02)"}imgn={"https://i.postimg.cc/c1kmfJgn/5.jpg"} />
        <Card3 title={"	Bubble Matic"} description={"Serie: Experimotors (03)"}imgn={"https://i.postimg.cc/SKZB8hWN/6.jpg"} />
        <Card3 title={"Road Bandit"} description={"Serie: HW Metro (01)"}imgn={"https://i.postimg.cc/cHrVBbm7/7.jpg"} />
        <Card3 title={"	Diaper Dragger"} description={"Serie: HW Metro (02)"}imgn={"https://i.postimg.cc/MGKkvTfF/8.jpg"} />
        </div>
      </main>

      <Footer />

  
    </div>
  )
}