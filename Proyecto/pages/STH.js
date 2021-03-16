import Head from 'next/head'
import Card3 from "src/components/card3"
import Footer from 'src/components/footer'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HW Mx STH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <body background="https://i.postimg.cc/jjX7p5jJ/fondo-negro.png"></body>

        <h1 className="title">
        Super Treasure Hunts
        </h1>

        <p className="description">
        </p>

        <div id="navegador">
        <ul>
        <li><a href="http://localhost:3000">Inicio</a></li>
        <li><a href="http://localhost:3000/anos">Años</a></li>
        <li><a href="http://localhost:3000/serie">Series</a></li>
        <li><a href="#">Zamac</a></li>
        </ul>
        </div>

        <div class="flex justify-start ...">
        <Card3 title={"Nissan Skyline GT-R (BNR32)"} description={"Serie: Turbo"}imgn={"https://i.postimg.cc/9XxjHc6X/Skyline.jpg"} />
        <Card3 title={"Ford GT-40"} description={"Serie: Race Day"}imgn={"https://i.postimg.cc/Bbv9PzKG/Ford-GT.jpg"} />
        <Card3 title={"67 Jeepster Commando"} description={"Serie: Baja Blazers"}imgn={"https://i.postimg.cc/jSDxFDCr/Jeepster.jpg"} />
        <Card3 title={"Porsche 918 Spyder (2018)"} description={"Serie: Porsche"}imgn={"https://i.postimg.cc/x8FrvPvN/Porsche-918.jpg"} />
        </div>
        <div class="flex justify-start ...">
        <Card3 title={"88 Honda CR-X"} description={"Serie: Honda"}imgn={"https://i.postimg.cc/52D4dfFQ/Honda.jpg"} />
        <Card3 title={"Mazda RX-7"} description={"Serie: Speed Blur"}imgn={"https://i.postimg.cc/nzGpD7Sq/RX7.jpg"} />
        <Card3 title={"17 Nissan GT-R (R35)"} description={"Serie: 	HW Speed Graphics"}imgn={"https://i.postimg.cc/g0vPC8W1/GTR.jpg"} />
        <Card3 title={"84 Audi Sport Quattro"} description={"Serie: Factory Fresh"}imgn={"https://i.postimg.cc/9XxjHc6X/Skyline.jpg"} />
        </div>
        <div class="flex justify-start ...">
        <Card3 title={"Lamborghini Sesto Elemento"} description={"Serie: HW Exotics"}imgn={"https://i.postimg.cc/BvDqJRxY/Sesto.jpg"} />
        <Card3 title={"57 Chevy"} description={"Serie: Rod Squad"}imgn={"https://i.postimg.cc/9XxjHc6X/Skyline.jpg"} />
        <Card3 title={"69 Chevy Pickup"} description={"Serie: HW Hot Trucks"}imgn={"https://i.postimg.cc/zB818vDv/Chevy.jpg"} />
        <Card3 title={"65 Ford Galaxie"} description={"Serie: HW Flames"}imgn={"https://i.postimg.cc/HxgTn3zp/Galaxie.jpg"} />
        </div>
        <div class="flex justify-start ...">
        <Card3 title={"18 Dodge Challenger SRT Demon"} description={"Serie: Muscle Mania"}imgn={"https://i.postimg.cc/vT8MLBCk/Charger.jpg"} />
        <Card3 title={"17 Pagani Huayra Roadster"} description={"Serie: HW Roadsters"}imgn={"https://i.postimg.cc/Ssdbs4jr/Huayra.jpg"} />
        <Card3 title={"64 Chevy Chevelle SS"} description={"Serie: Nightburnerz"}imgn={"https://i.postimg.cc/ZYjJY8dS/Chevelle.jpg"} />
        </div>
      </main>

      <Footer />

  
    </div>
  )
}