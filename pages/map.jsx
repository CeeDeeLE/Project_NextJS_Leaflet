import Layout from '../components/Layout';

// Test für Karte mit PLZ-Suche
// Ausgabe im Terminal: node node-server/server.js
// Stopp: Mülleimer oder Strg + C
import { useEffect, useState } from 'react';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

export default function Map() {
  // Test Kartenintegration
  // für Auslese des Eingabefeld-Inhalts
  const [search, setSearch] = useState('');

  // debounce: search, wenn search 600 ms unverändert geblieben ist
  // löst search-Variable in dieser Fkt. ab
  const debouncedSearch = useDebouncedValue(search, 600);

  // für Auslese der Array-Daten
  const [locations, setLocations] = useState([]);

  useLocationSearch(debouncedSearch, setLocations);

  /* 
  damit alles in der gewünschten Reihenfolge abläuft, 
  muss die asynchrone fetch-function innerhab einer Kapsel-Fkt. aufgerufen werden
  */
  useEffect(() => {
    // damit die Ortssuche nicht beim ersten Buchstaben losläuft...
    if (debouncedSearch.length < 2) {
      // zurücksetzen der Suche für neue Suche
      setLocations([]);
      return;
    }
    // gekapselte fetch function
    async function fetchLocations() {
      try {
        const response = await fetch(
          // `http://localhost:8000/?search=${debouncedSearch}`
          `http://localhost:3000/?search=${debouncedSearch}`
        );
        if (!response.ok) {
          throw new Error('Fehler beim Laden der Daten');
        }
        const jsonData = await response.json();
        setLocations(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLocations();
  }, [debouncedSearch]);

  // Ende Test
  return (
    <Layout title="Karte">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, odit dicta
        neque molestiae et optio cum esse incidunt voluptates ad! Sit iusto vero
        dolores aliquam quas, molestiae quos quae aliquid provident excepturi
        omnis, quibusdam asperiores, obcaecati enim corrupti. Aspernatur
        assumenda magnam veniam inventore voluptatum? Doloremque cumque
        voluptatem iusto totam repellendus!
      </p>
      {/* Ausgabe der Karte in ein div
      http://www.dynamicdrive.com/dynamicindex17/ajaxcontent.htm
      */}
      <div id="content">
        <iframe
          name="content"
          src=""
          title="unique"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
        <label htmlFor="search">PLZ oder Ortsname: </label>
        <input
          id="search"
          type="search"
          // an dieser Stelle nicht debouncedSearch,
          // sonst kann man jeden einzelnen Buchstaben erst nach 600 ms eingeben ^^
          value={search}
          // Aktion ist direkt ans Eingabefeld gekopplet
          // -> Suche beginnt unmittelbar
          // s. JS-Document/ Abs. fetch: Hilfsfunktionen Debounce und Throttle
          // -> throttle: drosselt die Anz. der nacheinander ausführbaren Male einer Fkt. innerhalb einer bestimmten Zeit
          // -> debounce: lässt alle Aufrufe zurückprallen bis eine bestimmte Zeit vergangen ist (Pausenzeit)
          onChange={(e) => setSearch(e.target.value)}
        />
        {locations.map(
          ({ country_code, place, zipcode, latitude, longitude }, index) => {
            console.log(latitude);
            const url = `https://www.openstreetmap.org/#map=14/${latitude}/${longitude}`;
            return (
              <div key={index} name="map">
                <a href={url} target="content" rel="noreferrer">
                  {`${country_code} ${zipcode} ${place}`}
                </a>
              </div>
            );
          }
        )}
      </div>
    </Layout>
  );
}

// zum Test Kartenintegration
/* 
damit alles in der gewünschten Reihenfolge abläuft, 
muss die asynchrone fetch-function innerhab einer Kapsel-Fkt. aufgerufen werden
*/
function useLocationSearch(debouncedSearch, setLocations) {
  useEffect(() => {
    // damit die Ortssuche nicht beim ersten Buchstaben losläuft...
    if (debouncedSearch.length < 2) {
      // zurücksetzen der Suche für neue Suche
      setLocations([]);
      return;
    }
    // gekapselte fetch function
    async function fetchLocations() {
      try {
        const response = await fetch(
          `http://localhost:8000/?search=${debouncedSearch}`
        );
        if (!response.ok) {
          throw new Error('Fehler beim Laden der Daten');
        }
        const jsonData = await response.json();
        setLocations(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLocations();
    // Programm schlägt als Änderungsoption beide Eingänge vor
    //
  }, [debouncedSearch, setLocations]);
}
