// https://www.badestellen.berlin.de/#/

// import Image from 'next/image';
// import { useToggle } from '../hooks/useToggle';

export default function BadItem({
  // id: properties.data.id,
  // bezirk: properties.data.bezirk,
  // eco: properties.data.eco,
  // ente: properties.data.ente,
  // temperature: properties.data.temp,
  // sicht: properties.data.sicht,
  // datum: properties.data.dat,
  // pdf: properties.data.pdflink,
  // bad: properties.title,
  // url2: properties.href,
  // bild: properties.description,
  // coords: geometry.coordinates,

  properties,
  geometry,
  baederID,
}) {
  // const [showDetails, toogleShowDetails] = useToggle(false);

  // const link = {
  //   'Alter Hof': '2',
  //   Bammelecke: '4',
  //   Breitehorn: '6',
  //   'Bürgerablage / Oberhavel': '8',
  //   Dämeritzsee: 10,
  //   Flughafensee: 12,
  //   'Friedrichshagen, Seebad': 14,
  //   'Gartenstraße, Flussbad': 16,
  //   'Groß Glienicker See, nördlich': 18,
  //   'Groß Glienicker See, südlich': 20,
  //   'Große Krampe': 22,
  // Große Steinlanke
  // Grünau, Freibad
  // Grunewaldturm
  // Halensee
  // Heiligensee, Freibad
  // Jungfernheide, Freibad
  // Kleine Badewiese
  // Kleiner Müggelsee
  // Krumme Lanke
  // Lieper Bucht
  // Lübars, Freibad (Ziegeleisee)
  // Müggelsee, Strandbad
  // Orankesee, Strandbad
  // Plötzensee, Freibad
  // Radfahrerwiese
  // Sandhauser Straße
  // Schlachtensee
  // Schmöckwitz
  // Seddinsee
  // Tegeler See, Freibad
  // Tegeler See, gegenüber Reiswerder
  // Tegeler See, gegenüber Scharfenberg
  // Tegeler See, Reiherwerder
  // Tegeler See, Saatwinkel
  // Teufelssee
  // Wannsee, Strandbad
  // Weißensee, Seebadeanstalt
  // Wendenschloss, Freibad
  //  };

  return (
    <div>
      <article className="news-item">
        <h3 className="news-item__title">
          <a
            href={`https://www.badestellen.berlin.de/#/detail/${baederID}`}
            target="_blank"
            rel="noreferrer"
          >
            {properties.title}
          </a>
        </h3>
        <div>
          Quelle: LaGeSo, vom:{' '}
          {new Date(properties.data.dat).toLocaleDateString()}
        </div>
        {/* <button onClick={toogleShowDetails}>
          {showDetails ? 'Weniger anzeigen' : 'Mehr anzeigen'}
        </button> */}
        <div className="news-item__content">
          <img
            className="news-item__image"
            // src={properties.description}
            alt="Bild zur Nachricht"
          />
          <p className="news-item__description">
            {(geometry.coordinates[1], geometry.coordinates[0])}
          </p>
        </div>
      </article>
    </div>
  );
}
