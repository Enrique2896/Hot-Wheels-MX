import Head from 'next/head'
import Card3 from "src/components/card3"
import Footer from 'src/components/footer'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HW Mx Factory Fresh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <body background="https://i.postimg.cc/jjX7p5jJ/fondo-negro.png"></body>

        <h1 className="title">
        Factory Fresh
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
        <Card3 title={"01 - 2019 Audi R8 Spyder"} imgn={"https://i.postimg.cc/RVf3F61r/FF1.jpg"} />
        <Card3 title={"01 - 2019 Audi R8 Spyder"} imgn={"https://i.postimg.cc/CxRfgPvN/FF1-5.jpg"} />
        <Card3 title={"02 - 19 Corvette ZR1 Convertible"} imgn={"https://i.postimg.cc/WzrS4pb2/FF2.jpg"} />
        <Card3 title={"02 - 19 Corvette ZR1 Convertible"} imgn={"https://i.postimg.cc/vBC3Mxyq/FF2-5.jpg"}/>
        </div>
        <div class="flex justify-start ...">
        <Card3 title={"03 - 2019 Kia Stinger GT"} imgn={"https://i.postimg.cc/G2nPWpVt/kia2.jpg"} />
        <Card3 title={"03 - 2019 Kia Stinger GT"} imgn={"https://i.postimg.cc/yxVmNbVz/Kia.jpg"} />
        <Card3 title={"04 - Land Rover Defender 90"} imgn={"https://i.postimg.cc/52ctqFCX/rover.jpg"} />
        <Card3 title={"05 - Corvette C7 Z06"} imgn={"https://i.postimg.cc/prCdBPgp/corvette2.jpg"} />
        </div>
        <div class="flex justify-start ...">
        <Card3 title={"05 - Corvette C7 Z06"} imgn={"https://i.postimg.cc/Zn4R3WsG/corvette.jpg"} />
        <Card3 title={"06 - Aston Martin Vulcan"} imgn={"https://i.postimg.cc/nLq9DfcQ/vulcan.jpg"} />
        <Card3 title={"07 - 16 Bugatti Chiron"} imgn={"https://i.postimg.cc/0N2kng94/chiron2.jpg"} />
        <Card3 title={"07 - 16 Bugatti Chiron (Zamac)"} imgn={"https://i.postimg.cc/DzZhsqgk/chiron.png"} />
        </div>
        <div class="flex justify-start ...">
        <Card3 title={"08 - BMW K 1300 R (Negro)"} imgn={"https://i.postimg.cc/VNGYH76k/bmw2.jpg"} />
        <Card3 title={"08 - BMW K 1300 R (Verde)"} imgn={"https://i.postimg.cc/mgTBZx1r/bmw.jpg"} />
        <Card3 title={"09 - Tesla Model 3 (Azul)"} imgn={"https://i.postimg.cc/T1Lb7LJp/tesla2.jpg"} />
        <Card3 title={"09 - Tesla Model 3 (Negro)"} imgn={"https://i.postimg.cc/nryD6F3T/tesla.jpg"} />
        </div>
        <div class="flex justify-start ...">
        <Card3 title={"10 - 84 Audi Sport Quattro"} imgn={"https://i.postimg.cc/qBSytwpn/audi.jpg"} />
        <Card3 title={"10 - 84 Audi Sport Quattro (STH)"} imgn={"https://i.postimg.cc/tTmPNtPK/audi2.jpg"} />
        </div>

      </main>

      <Footer />

  
    </div>
  )
}