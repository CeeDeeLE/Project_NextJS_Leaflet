import Layout from '../components/Layout';

export default function impressum() {
  return (
    <Layout title="Impressum">
      <p>
        <img
          className="logo"
          src="/img/logo@2x.jpg"
          srcSet="/img/logo@1x.jpg 1x, /img/logo@2x.jpg 2x"
          // verzögertes Laden für besseren Bildaufbau und weniger Speichernutzung
          loading="lazy"
          alt="Logo Schoenlein"
          title="Logo Schoenlein"
          // width und height für den Browser angeben -> Berechnung Seitenverhältnis
          width="320"
          height="100"
        />
      </p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        rerum sunt deserunt molestias facere nam ab reiciendis rem architecto
        culpa.
      </p>
    </Layout>
  );
}
