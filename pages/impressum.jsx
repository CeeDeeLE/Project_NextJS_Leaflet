import Layout from '../components/Layout';

export default function impressum() {
  return (
    <Layout title="Impressum">
      <img
        src="/img/logo.jpg"
        className="logo"
        // verzögertes Laden für besseren Bildaufbau und weniger Speichernutzung
        loading="lazy"
        alt="Bildbeschreibung"
        title="Bildbeschreibung"
        // width und height für den Browser angeben -> Berechnung Seitenverhältnis
        width="320"
        height="100"
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        rerum sunt deserunt molestias facere nam ab reiciendis rem architecto
        culpa.
      </p>
    </Layout>
  );
}
