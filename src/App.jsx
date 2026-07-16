import './App.css'
import CardRegione from "./components/CardRegione";
import italiaGif from './assets/italia.gif'
import lombardiaImg from './assets/lombardia.svg'
import venetoImg from './assets/veneto.webp'
import piemonteImg from './assets/piemonte.svg'
import liguriaImg from './assets/liguria.svg'
import emiliaImg from './assets/emiliaromagna.svg'
import friuliImg from './assets/friuli.svg'
import trentinoImg from './assets/trentino.svg'
import valledaostaImg from './assets/valledaosta.svg'
import toscanaImg from './assets/toscana.svg'
import umbriaImg from './assets/umbria.svg'
import marcheImg from './assets/marche.svg'
import lazioImg from './assets/lazio.svg'
import abruzzoImg from './assets/abruzzo.svg'
import moliseImg from './assets/molise.svg'
import campaniaImg from './assets/campania.svg'
import basilicataImg from './assets/basilicata.svg'
import pugliaImg from './assets/puglia.svg'
import calabriaImg from './assets/calabria.svg'
import siciliaImg from './assets/sicilia.webp'
import sardegnaImg from './assets/sardegna.svg'

function App() {

  const regioni = [
  // Italia Settentrionale
  {
    nome: "Lombardia",
    img: lombardiaImg,
    link: "https://www.regione.lombardia.it",
    zona: "Italia Settentrionale"
  },
  {
    nome: "Veneto",
    img: venetoImg,
    link: "https://www.regione.veneto.it/",
    zona: "Italia Settentrionale"
  },
  {
    nome: "Piemonte",
    img: piemonteImg,
    link: "https://www.regione.piemonte.it/web/",
    zona: "Italia Settentrionale"
  },
  {
    nome: "Liguria",
    img: liguriaImg,
    link: "https://www.regione.liguria.it/",
    zona: "Italia Settentrionale"
  },
  {
    nome: "Emilia-Romagna",
    img: emiliaImg,
    link: "https://www.regione.emilia-romagna.it/",
    zona: "Italia Settentrionale"
  },
  {
    nome: "Trentino-Alto Adige",
    img: trentinoImg,
    link: "https://www.regione.taa.it/",
    zona: "Italia Settentrionale"
  },
  {
    nome: "Friuli Venezia Giulia",
    img: friuliImg,
    link: "https://www.regione.fvg.it/rafvg/cms/RAFVG/",
    zona: "Italia Settentrionale"
  },
  {
    nome: "Valle d'Aosta",
    img: valledaostaImg,
    link: "https://www.regione.vda.it/",
    zona: "Italia Settentrionale"
  },
  

  // Italia Centrale
  {
    nome: "Toscana",
    img: toscanaImg,
    link: "https://www.regione.toscana.it/",
    zona: "Italia Centrale"
  },
  {
    nome: "Umbria",
    img: umbriaImg,
    link: "https://www.regione.umbria.it/home",
    zona: "Italia Centrale"
  },
  {
    nome: "Marche",
    img: marcheImg,
    link: "https://www.regione.marche.it/",
    zona: "Italia Centrale"
  },
  {
    nome: "Lazio",
    img: lazioImg,
    link: "https://www.regione.lazio.it/",
    zona: "Italia Centrale"
  },

  // Italia Meridionale
  {
    nome: "Abruzzo",
    img: abruzzoImg,
    link: "https://www.regione.abruzzo.it/",
    zona: "Italia Meridionale"
  },
  {
    nome: "Molise",
    img: moliseImg,
    link: "https://www.regione.molise.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/1",
    zona: "Italia Meridionale"
  },
  {
    nome: "Campania",
    img: campaniaImg,
    link: "https://www.regione.campania.it/",
    zona: "Italia Meridionale"
  },
  {
    nome: "Puglia",
    img: pugliaImg,
    link: "https://www.regione.puglia.it/",
    zona: "Italia Meridionale"
  },
  {
    nome: "Basilicata",
    img: basilicataImg,
    link: "https://www.regione.basilicata.it/",
    zona: "Italia Meridionale"
  },
  {
    nome: "Calabria",
    img: calabriaImg,
    link: "https://www.regione.calabria.it/",
    zona: "Italia Meridionale"
  },

  // Italia Insulare
  {
    nome: "Sicilia",
    img: siciliaImg,
    link: "https://www.regione.sicilia.it/",
    zona: "Italia Insulare"
  },
  {
    nome: "Sardegna",
    img: sardegnaImg,
    link: "https://www.regione.sardegna.it/",
    zona: "Italia Insulare"
  }
];


  return (
    <>
      <div className="bg-blue-300 font-serif text-2xl text-white py-6 px-2 flex justify-start">
        Benvenuto sul portale delle regioni italiane

        <div className="ml-auto">
          <img
            src={italiaGif}
            alt="Bandiera italiana"
            className="h-10"
          />
        </div>
      </div>

      
      <div className="max-w-5xl mx-auto p-6 space-y-4">


        <h2 className="font-extrabold text-black flex justify-center bg-green-800 py-4 rounded-xl">
          ITALIA SETTENTRIONALE
        </h2>

        {regioni
          .filter((regione) => regione.zona === "Italia Settentrionale")
          .map((regione) => (
            <CardRegione
              key={regione.nome}
              regione={regione}
            />
          ))}


        <h2 className="font-extrabold text-black flex justify-center bg-yellow-400 py-4 rounded-xl">
          ITALIA CENTRALE
        </h2>

        {regioni
          .filter((regione) => regione.zona === "Italia Centrale")
          .map((regione) => (
            <CardRegione
              key={regione.nome}
              regione={regione}
            />
          ))}


        <h2 className="font-extrabold text-black flex justify-center bg-red-700 py-4 rounded-xl">
          ITALIA MERIDIONALE
        </h2>

        {regioni
          .filter((regione) => regione.zona === "Italia Meridionale")
          .map((regione) => (
            <CardRegione
              key={regione.nome}
              regione={regione}
            />
          ))}


        <h2 className="font-extrabold text-black flex justify-center bg-blue-700 py-4 rounded-xl">
          ITALIA INSULARE
        </h2>

        {regioni
          .filter((regione) => regione.zona === "Italia Insulare")
          .map((regione) => (
            <CardRegione
              key={regione.nome}
              regione={regione}
            />
          ))}

      </div>
  </>
  )
}

export default App