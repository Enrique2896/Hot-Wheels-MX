import Head from 'next/head'
import Card2 from "src/components/card2"
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
            Organización por Series
        </h1>

        <p className="description">
        Aquí encontraras todos los castings ordenados de acuerdo a su linea.
        </p>


        <div id="navegador">
        <ul>
        <li><a href="http://localhost:3000">Inicio</a></li>
        <li><a href="http://localhost:3000/anos">Años</a></li>
        <li><a href="http://localhost:3000/STH">STH</a></li>
        <li><a href="http://localhost:3000/Zamac">Zamac</a></li>
        </ul>
        </div>


        <div className="grid pb-6">
          <Card2 link={"http://localhost:3000/FF"} title={"Factory Fresh"} icn={"https://i.postimg.cc/pd2kzcRs/factory-fresh-tcm985-127496.png"} />
          <Card2 link={"http://localhost:3000/Porsche"} title={"Porsche"} icn={"https://static.wikia.nocookie.net/hotwheels/images/5/5e/Porsche-collection_tcm985-154413.png/revision/latest?cb=20191215184617"} />
          <Card2 link={"https://nextjs.org/learn"} title={"HW Flames"} icn={"https://i.postimg.cc/x1V6TT7D/HW-Flames-330px-tcm985-130361.png"} />
          <Card2 link={"https://nextjs.org/learn"} title={"HW Speed Graphics"} icn={"https://i.postimg.cc/KzjNsKKL/HW-Speed-Graphics-330px-tcm985-130393.png"}/>
          <Card2 link={"https://nextjs.org/learn"} title={"Muscle Mania"} icn={"https://i.postimg.cc/8Ct4HdCN/Muscle-Mania-330px-tcm985-130362.png"}/>
          <Card2 link={"https://nextjs.org/learn"} title={"Night Burnerz"} icn={"https://i.postimg.cc/c6yBHXFM/Night-Burnerz-330px-tcm985-130439.png"}/>
        </div>
      </main> 

      <Footer />

  
    </div>
  )
}