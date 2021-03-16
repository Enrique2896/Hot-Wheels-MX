import Head from 'next/head'
import Card3 from "src/components/card3"
import Footer from 'src/components/footer'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HW Mx 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <body background="https://i.postimg.cc/jjX7p5jJ/fondo-negro.png"></body>

        <h1 className="title">
        Año 2021
        </h1>

        <p className="description">
        </p>

        <div id="navegador">
        <ul>
        <li><a href="http://localhost:3000">Inicio</a></li>
        <li><a href="http://localhost:3000/anos">Años</a></li>
        <li><a href="http://localhost:3000/serie">Series</a></li>
        <li><a href="http://localhost:3000/STH">STH</a></li>
        <li><a href="#">Zamac</a></li>
        </ul>
        </div>

        <div class="flex justify-start ...">
        <Card3 title={"The Nash"} description={"Serie: HW Dream Garage (01)"}imgn={"https://i.postimg.cc/mDXQ3dDs/1.jpg"} />
        <Card3 title={"Quad Rod"} description={"Serie: Baja Blazers (01)"}imgn={"https://i.postimg.cc/q7GcqBHg/2.jpg"} />
        <Card3 title={"70 Dodge Power Wagon"} description={"Serie: Baja Blazers (02)"}imgn={"https://i.postimg.cc/PrLMykYF/3.jpg"} />
        <Card3 title={"Toyota Off-Road Truck"} description={"Serie: Baja Blazers (03)"}imgn={"https://i.postimg.cc/RZKLrQP7/4.jpg"} />
        </div>
        <div class="flex justify-start ...">
        <Card3 title={"Tanknator"} description={"Serie: Experimotors (01)"}imgn={"https://i.postimg.cc/c1kmfJgn/5.jpg"} />
        <Card3 title={"	Carbonator"} description={"Serie: Experimotors (02)"}imgn={"https://i.postimg.cc/SKZB8hWN/6.jpg"} />
        <Card3 title={"Hot Wheels Ford Transit Connect"} description={"Serie: HW Metro (01)"}imgn={"https://i.postimg.cc/cHrVBbm7/7.jpg"} />
        <Card3 title={"	Batman: Arkham Knight Batmobile"} description={"Serie: Batman (01)"}imgn={"https://i.postimg.cc/MGKkvTfF/8.jpg"} />
        </div>
      </main>

      <Footer />

  
    </div>
  )
}