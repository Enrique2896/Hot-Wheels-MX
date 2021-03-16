import Head from 'next/head'
import Card3 from "src/components/card3"
import Footer from 'src/components/footer'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HW Mx Porsche</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <body background="https://i.postimg.cc/jjX7p5jJ/fondo-negro.png"></body>

        <h1 className="title">
        Porsche
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
        <Card3 title={"01 - 89 Porsche 944 Turbo"} imgn={"https://static.wikia.nocookie.net/hotwheels/images/e/ef/2020_Porsche_-_01.05_-_%2784_Porsche_944_Turbo_01.jpg/revision/latest/scale-to-width-down/1000?cb=20200826200020"} />
        <Card3 title={"01 - 89 Porsche 944 Turbo"} imgn={"https://static.wikia.nocookie.net/hotwheels/images/4/45/2020_Porsche_-_01.05_-_%2784_Porsche_944_Turbo_09.jpg/revision/latest/scale-to-width-down/1000?cb=20200826201432"} />
        <Card3 title={"02 - 96 Porsche Carrera"} imgn={"https://static.wikia.nocookie.net/hotwheels/images/7/7d/996CARR.jpg/revision/latest/scale-to-width-down/466?cb=20200719205209"} />
        <Card3 title={"02 - 96 Porsche Carrera"} imgn={"https://static.wikia.nocookie.net/hotwheels/images/a/ad/News660004.jpg/revision/latest/scale-to-width-down/548?cb=20191103134815"}/>
        </div>
        <div class="flex justify-start ...">
        <Card3 title={"02 - 96 Porsche Carrera"} imgn={"https://static.wikia.nocookie.net/hotwheels/images/9/9e/2020_Porsche_-_02.05_-_%2796_Porsche_Carrera_01.jpg/revision/latest/scale-to-width-down/1000?cb=20200826185659"} />
        <Card3 title={"03 - Porsche Panamera Turbo S E-Hybrid Sport Turismo"} imgn={"https://static.wikia.nocookie.net/hotwheels/images/3/3a/GHF19_-_Porsche_Panamera_Turbo_S_E-Hybrid_Sport_Turismo_Carded-1.jpg/revision/latest/scale-to-width-down/1000?cb=20210115183408"} />
        <Card3 title={"03 - Porsche Panamera Turbo S E-Hybrid Sport Turismo"} imgn={"https://static.wikia.nocookie.net/hotwheels/images/c/c9/2205.JPG/revision/latest/scale-to-width-down/1000?cb=20191109071245"} />
        <Card3 title={"04 - Porsche 917 LH"} imgn={"https://static.wikia.nocookie.net/hotwheels/images/6/6a/2203.JPG/revision/latest/scale-to-width-down/1000?cb=20191109065537"} />
        </div>
        <div class="flex justify-start ...">
        <Card3 title={"04 - Porsche 917 LH (Zamac)"} imgn={"https://static.wikia.nocookie.net/hotwheels/images/a/a1/Porsche_917_LH.jpg/revision/latest/scale-to-width-down/549?cb=20191104023505"} />
        <Card3 title={"05 - Porsche 918 Spyder"} imgn={"https://static.wikia.nocookie.net/hotwheels/images/1/1c/2020_Porsche_-_05.05_-_Porsche_918_Spyder_01.jpg/revision/latest/scale-to-width-down/1000?cb=20200826202013"} />
        <Card3 title={"05 - Porsche 918 Spyder (STH)"} imgn={"https://i.postimg.cc/x8FrvPvN/Porsche-918.jpg"} />
        </div>
      </main>

      <Footer />

  
    </div>
  )
}