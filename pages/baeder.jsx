// Quelle: https://newsapi.org/
import Layout from '@/components/Layout';
import BaederList from '@/components/BaederList';

// statt des Keys hier ein Link auf eine Datei, die nicht auf GitHub geladen wird
/* https://nextjs.org/docs/basic-features/environment-variables
Achtung: process.env ist kein normales Objekt, Destructuring
funktioniert nicht, immer process.env.KEY ausschreiben! 
Achtung: Werte stehen erst nach Neustart des Servers bzw.
dev-Prozesses zur Verfügung.
*/
// const apiKey = process.env.NEWS_API_KEY;

export async function getStaticProps() {
  // code, der nur auf dem Server läuft und im Browser nicht zu sehen ist

  let baederWeb = [];

  // const urlWeb = `https://www.berlin.de/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/index/all.gjson?q=`;
  const urlWeb = `../library/BerlinerBaeder.geojson`;

  // const urlJson = `library/BerlinerBaeder.geojson`;

  // Auslesen von im Web bereit gestellten Daten des LaGeSo Berlin
  try {
    const response = await fetch(
      // beliebte News-API:
      // `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=de&category=technology&pageSize=10`
      // Bäder-API des LaGeSo Berlin:
      urlWeb
    );

    const baederWebData = await response.json();

    baederWeb = baederWebData.features;
    for (let i = 0; i <= baederWeb.length; i + 2) {
      baederWeb.fill(i, baederWeb[2][3]);
    }
    console.log(baederWeb);
  } catch (error) {
    console.log('Fehler beim Laden der Baederinfos');
  }

  // // Auslesen der Daten aus der BerlinerBaeder.geojson
  // try {
  //   const response = await fetch(urlJson);

  //   const baederJsonData = await response.json();

  //   baederJson = baederJsonData.features;
  // } catch (error) {
  //   console.log('Fehler beim Einlesen der Baederinfos');
  // }

  return {
    props: {
      grusz: 'Bitte auch den Wetterbericht beachten: 😛',
      time: new Date().toLocaleTimeString(),
      baederWeb,
      // baederJson,
    },
    revalidate: 10,
  };
}

// Function musste 2x angelegt werden, da compilieren mit ungenutzen Var nicht mgl.
export default function news({ grusz, time, baederWeb }) {
  //
  return (
    <Layout title="Baden gehen... ">
      {grusz} - es ist {time}
      <br />
      <br />
      {/* {JSON.stringify(news)} */}
      {/* <NewsList news={news} title="aktuelle Meldungen" /> */}
      <BaederList baederWeb={baederWeb} title="Bäder in und um Berlin" />
      <br />
    </Layout>
  );
}
