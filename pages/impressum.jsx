import Layout from '../components/Layout';
import Image from 'next/image';

export default function impressum() {
  return (
    <Layout title="Impressum">
      {/** 
      eslint schlägt Image statt img als bevorzugte Lösung vor 
      -> ist deaktiviert, geht jetzt beides 
      */}
      <Image
        className="logo"
        src="/img/logo@2x.jpg"
        srcSet="/img/logo@1x.jpg 1x, /img/logo@2x.jpg 2x"
        // verzögertes Laden für besseren Bildaufbau und weniger Speichernutzung
        // width und height für den Browser angeben -> Berechnung Seitenverhältnis
        width="320"
        height="100"
        loading="lazy"
        alt="Logo Schoenlein"
        title="Logo Schoenlein"
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        rerum sunt deserunt molestias facere nam ab reiciendis rem architecto
        culpa.
      </p>
    </Layout>
  );
}
