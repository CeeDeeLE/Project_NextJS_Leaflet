// Quelle: https://newsapi.org/
// Add geojson: https://egghead.io/lessons/react-add-geojson-location-data-to-a-map-using-markers-and-popups-in-react-leaflet

import Layout from '@/components/Layout';
import BaederList from '@/components/BaederList';
// import BaederLocations from './library/berlinerBaeder.geojson';

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

  // Auslesen von im Web bereit gestellten Daten des LaGeSo Berlin
  try {
    const response = await fetch(
      // beliebte News-API:
      // `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=de&category=technology&pageSize=10`// Bäder-API des LaGeSo Berlin:
      // urlWeb
      // { BaederLocations }
      `https://www.berlin.de/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/index/all.gjson?q=`
    );

    const baederWebData = await response.json();

    baederWeb = baederWebData.features;
    console.log(baederWeb);

    //
  } catch (error) {
    console.log('Fehler beim Laden der Baederinfos');
  }

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
      <BaederList
        baederWeb={baederWeb}
        title="Bäder in und um Berlin - Infos zu Standort und Qualität"
      />
      <br />
    </Layout>
  );
}
