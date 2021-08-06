// Quelle: https://newsapi.org/
import Layout from '@/components/Layout';
import NewsList from '@/components/NewsList';

// statt des Keys hier ein Link auf eine Datei, die nicht auf GitHub geladen wird
/* https://nextjs.org/docs/basic-features/environment-variables
Achtung: process.env ist kein normales Objekt, Destructuring
funktioniert nicht, immer process.env.KEY ausschreiben! 
Achtung: Werte stehen erst nach Neustart des Servers bzw.
dev-Prozesses zur Verfügung.
*/
// const apiKey = process.env.NEWS_API_KEY;

const testResults = {
  status: 'ok',
  totalResults: 38,

  articles: [
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Chris Isidore, CNN Business',
      title: "Boeing's 737 Max gets approval to fly passengers again - CNN",
      description:
        "The Federal Aviation Administration Wednesday gave approval for the Boeing 737 Max to carry passengers again, ending the jet's 20-month grounding.",
      url: 'https://www.cnn.com/2020/11/18/business/boeing-737-max-approval/index.html',
      urlToImage:
        'https://cdn.cnn.com/cnnnext/dam/assets/201116084430-boeing-737-max-southwest-restricted-super-tease.jpg',
      publishedAt: '2020-11-18T12:12:00Z',
      content: null,
    },

    {
      source: {
        id: null,
        name: 'HuffPost',
      },
      author: 'Yahoo Entertainment',
      title: "'MasterChef Junior' Star Ben Watkins Dies At Age 14 - HuffPost",
      description:
        '"MasterChef Junior" judge Gordon Ramsay hailed Watkins as "an incredibly talented home cook and even stronger young man."',
      url: 'https://www.huffpost.com/entry/ben-watkins-dead_n_5fb508edc5b66cd4ad40820e',
      urlToImage:
        'https://img.huffingtonpost.com/asset/5fb5105e2400008630b047cf.png?ops=1778_1000',
      publishedAt: '2020-11-18T11:59:00Z',
      content:
        'Ben Watkins, a fan-favorite from MasterChef Junior, died on Monday after an 18-month battle with cancer. He was 14.\r\nWatkins was diagnosed with angiomatoid fibrous histiocytoma, an extremely rare for… [+2665 chars]',
    },
  ],

  baeder: [
    {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [13.14228, 52.43271],
          },
          properties: {
            title: 'Alter Hof / Unterhavel',
            href: '/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/detail/1',
            description:
              '<img src="/imgscaler/yOPMBrjouu9SA7vfqS_hALGM8Pp-etDlTxHIVJ_zSmo/quadrat40/L3N5czExLXByb2QvbGFnZXNvL2dlc3VuZGhlaXQvZ2VzdW5kaGVpdHNzY2h1dHovYmFkZWdld2Flc3Nlci9saXN0ZS1kZXItYmFkZXN0ZWxsZW4vZ3J1ZW4uanBn.jpg" alt="" />Steglitz-Zehlendorf<br /> <a href="/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/detail/1">Mehr...</a>',
            id: '/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/detail/1',
            data: {
              id: '1',
              prognoselink: '',
              farbe: 'gruen.jpg',
              badestellelink:
                '"Alter Hof(Link zur Badestelle Alter Hof)":/lageso/gesundheit/gesundheitsschutz/badegewaesser/badestellen/artikel.344360.php',
              badname: 'Alter Hof',
              bezirk: 'Steglitz-Zehlendorf',
              dat: '2021-07-20',
              eco: '<15',
              ente: '<15',
              sicht: '140',
              temp: '24',
              profillink:
                '"Unterhavel - Alter Hof(Link zum Badegewässerprofil Unterhavel Alter Hof)":/lageso/gesundheit/gesundheitsschutz/badegewaesser/badegewaesserprofile/artikel.339134.php',
              pdflink:
                '"Alle Probeentnamen der aktuellen Saison für diese Badestelle(Link zur PDF-Datei mit allen Probeentnamen der aktuellen Saison)":https://data.lageso.de/lageso/baden/bad29.pdf',
              dat_predict: '',
            },
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [13.62254, 52.4075],
          },
          properties: {
            title: 'Bammelecke',
            href: '/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/detail/4',
            description:
              '<img src="/imgscaler/yOPMBrjouu9SA7vfqS_hALGM8Pp-etDlTxHIVJ_zSmo/quadrat40/L3N5czExLXByb2QvbGFnZXNvL2dlc3VuZGhlaXQvZ2VzdW5kaGVpdHNzY2h1dHovYmFkZWdld2Flc3Nlci9saXN0ZS1kZXItYmFkZXN0ZWxsZW4vZ3J1ZW4uanBn.jpg" alt="" />Treptow-Köpenick<br /> <a href="/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/detail/4">Mehr...</a>',
            id: '/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/detail/4',
            data: {
              id: '4',
              prognoselink: '',
              farbe: 'gruen.jpg',
              badestellelink:
                '"Bammelecke(Link zur Badestelle Bammelecke)":/lageso/gesundheit/gesundheitsschutz/badegewaesser/badestellen/artikel.344320.php',
              badname: 'Bammelecke',
              bezirk: 'Treptow-Köpenick',
              dat: '2021-07-27',
              eco: '<15',
              ente: '15',
              sicht: '180',
              temp: '25,6',
              profillink:
                '"Dahme - Bammelecke(Link zum Badegewässerprofil Bammelecke)":/lageso/gesundheit/gesundheitsschutz/badegewaesser/badegewaesserprofile/artikel.339118.php',
              pdflink:
                '"Alle Probeentnamen der aktuellen Saison für diese Badestelle(Link zur PDF-Datei mit allen Probeentnamen der aktuellen Saison)":https://data.lageso.de/lageso/baden/bad1.pdf',
              dat_predict: '',
            },
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [13.1798, 52.46575],
          },
          properties: {
            title: 'Breitehorn / Unterhavel',
            href: '/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/detail/7',
            description:
              '<img src="/imgscaler/yOuVLK2KYlCxkzMJzhtt-Fue_QytByvOgcH-IOX9dLw/quadrat40/L3N5czExLXByb2QvbGFnZXNvL2dlc3VuZGhlaXQvZ2VzdW5kaGVpdHNzY2h1dHovYmFkZWdld2Flc3Nlci9saXN0ZS1kZXItYmFkZXN0ZWxsZW4vZ3J1ZW5fcHJvZy5qcGc.jpg" alt="" />Spandau<br /> <a href="/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/detail/7">Mehr...</a>',
            id: '/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/detail/7',
            data: {
              id: '7',
              prognoselink: '',
              farbe: 'gruen_prog.jpg',
              badestellelink:
                '"Breitehorn(Link zur Badestelle Breitehorn)":/lageso/gesundheit/gesundheitsschutz/badegewaesser/badestellen/artikel.344350.php',
              badname: 'Breitehorn',
              bezirk: 'Spandau',
              dat: '2021-07-29',
              eco: '<15',
              ente: '<15',
              sicht: '>100',
              temp: '24,6',
              profillink:
                '"Unterhavel - Breitehorn(Link zum Badegewässerprofil Unterhavel Breithorn)":/lageso/gesundheit/gesundheitsschutz/badegewaesser/badegewaesserprofile/artikel.339130.php',
              pdflink:
                '"Alle Probeentnamen der aktuellen Saison für diese Badestelle(Link zur PDF-Datei mit allen Probeentnamen der aktuellen Saison)":https://data.lageso.de/lageso/baden/bad30.pdf',
              dat_predict: '2021-08-04T05:51:03.790Z',
            },
          },
        },
      ],
    },
  ],
};

export async function getStaticProps() {
  // code, der nur auf dem Server läuft und im Browser nicht zu sehen ist

  let news = [];

  try {
    const response = await fetch(
      // `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=de&category=technology&pageSize=10`
      `https://www.berlin.de/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/index/all.gjson?q=`
    );

    const newsData = await response.json();
    // news = newsData.articles;
    news = newsData.features;
  } catch (error) {
    console.log('Fehler beim Laden der News');
  }

  return {
    props: {
      test: 'Hallo vom Server: 😛',
      time: new Date().toLocaleTimeString(),
      news: testResults.articles,
      livenews: news,
    },
    revalidate: 5,
  };
}

// Function musste 2x angelegt werden, da compilieren mit ungenutzen Var nicht mgl.
export default function news({ test, time, livenews }) {
  // export default function news({ test, time, news }) {
  return (
    <Layout title="Baden gehen... ">
      {test} - es ist {time}
      <br />
      <br />
      {/* {JSON.stringify(news)} */}
      {/* {JSON.stringify(livenews)} */}
      {/* <NewsList news={news} title="aktuelle Meldungen" /> */}
      <NewsList news={livenews} title="Bäder in und um Berlin" />
      <br />
    </Layout>
  );
}
