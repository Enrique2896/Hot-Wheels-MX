import Head from 'next/head'
import Card3 from "src/components/card3"
import Footer from 'src/components/footer'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HW Mx Zamac</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <body background="https://i.postimg.cc/jjX7p5jJ/fondo-negro.png"></body>

        <h1 className="title">
        Exusivos Zamac
        </h1>

        <p className="description">
        </p>

        <div id="navegador">
        <ul>
        <li><a href="http://localhost:3000">Inicio</a></li>
        <li><a href="http://localhost:3000/anos">Años</a></li>
        <li><a href="http://localhost:3000/serie">Series</a></li>
        <li><a href="http://localhost:3000/STH">STH</a></li>
        </ul>
        </div>

        <p className="separar">
        Año 2020
        </p>

        <div class="flex justify-start ...">
        <Card3 title={"Porsche 917 LH"} description={"Serie: Porsche"}imgn={"https://static.wikia.nocookie.net/hotwheels/images/a/a1/Porsche_917_LH.jpg/revision/latest/scale-to-width-down/549?cb=20191104023505"} />
        <Card3 title={"68 Chevy Nova"} description={"Serie: Rood Squad"}imgn={"https://static.wikia.nocookie.net/hotwheels/images/3/39/News660005.jpg/revision/latest/scale-to-width-down/551?cb=20191103135028"} />
        <Card3 title={"16 Bugatti Chiron"} description={"Serie: Factory Fresh"}imgn={"https://i.postimg.cc/DzZhsqgk/chiron.pngs"} />
        <Card3 title={"98 Subaru Impreza 22B STI-Version"} description={"Serie: Turbo"}imgn={"https://static.wikia.nocookie.net/hotwheels/images/c/ca/IMG_E4116.JPG/revision/latest/scale-to-width-down/1000?cb=20200723121921"} />
        </div>
        <div class="flex justify-start ...">
        <Card3 title={"85 Honda City Turbo II"} description={"Serie: Honda"}imgn={"https://www.hotwheelsapp.com/img/modelos/2288.webp"} />
        <Card3 title={"Land Rover Series III Pickup"} description={"Serie: Speed Blur"}imgn={"https://www.hotwheelsapp.com/img/modelos/2279.webp"} />
        <Card3 title={"'64 Chevy Impala"} description={"Serie: 	Tooned"}imgn={"https://i.ebayimg.com/images/g/JCMAAOSwFdRepwgV/s-l400.jpg"} />
        </div>

        <p className="separar">
        Año 2019
        </p>
      </main>

      <Footer />

  
    </div>
  )
}