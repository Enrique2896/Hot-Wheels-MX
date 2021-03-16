import Head from 'next/head'
import Card from "src/components/card"
import Footer from 'src/components/footer'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hot Wheels Mx</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <body background="https://i.postimg.cc/jjX7p5jJ/fondo-negro.png"></body>

      <h1 className="title">
        <img src="https://i.postimg.cc/XNTTTymm/Logo-1.png" width="600" height="300"></img>
        </h1>

      <div id="navegador">
      <ul>
      <li><a href="http://localhost:3000/anos">Años</a></li>
      <li><a href="http://localhost:3000/serie">Series</a></li>
      <li><a href="http://localhost:3000/STH">STH</a></li>
      <li><a href="http://localhost:3000/Zamac">Zamac</a></li>
      </ul>
      </div>


        <p className="description">
        <img src="https://i.postimg.cc/d393yTcs/Collection-Promo-LAM-tcm1014-127362.gif" width="1000"></img>
        </p>

        <div class="flex justify-start ...">
        <Card link={"http://localhost:3000/anos"} title={"Por Año"} description={"Todos los castings ordenados por año"} imgn={"https://i.postimg.cc/y8xWfqHP/A-os.jpg"} />
          <Card link={"http://localhost:3000/serie"} title={"Por Serie"} description={"Todos los castings ordenados por series"} imgn={"https://i.postimg.cc/jq153gMQ/series.jpg"} />
          <Card link={"http://localhost:3000/STH"} title={"Super Treasure Hunts"} description={"Todos los STH existentes de cada año"} imgn={"https://i.postimg.cc/prYbYdrd/Super.jpg"} />
          <Card link={"http://localhost:3000/Zamac"} title={"Zamac"} description={"Todos los castings Zamac de cada año"} imgn={"https://i.postimg.cc/3NsMTDq9/Zamac.jpg"}/>
        </div>

        <h1 className="title">
        Noticias sobre Hot Wheels
        </h1>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/PlpvJfhac6I?start=4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



      </main>

      <Footer />

  
    </div>
  )
}