import Image from 'next/image';
import Navigation from './Navigation';

export default function Header({ title }) {
  return (
    <header className="site-header">
      <div className="inner-width">
        {/** 
      eslint schlägt Image statt img als bevorzugte Lösung vor 
      -> ist deaktiviert, geht jetzt beides 
      */}
        <Image
          className="logo"
          src="/img/logo-bildteil.jpg"
          srcSet="/img/logo-bildteil.jpg 1x, /img/logo-bildteil.jpg 2x"
          // verzögertes Laden für besseren Bildaufbau und weniger Speichernutzung
          // width und height für den Browser angeben -> Berechnung Seitenverhältnis
          width="800"
          height="300"
          loading="lazy"
          alt="Logo"
          title="Logo"
        />
        <Navigation />
        <h1>{title}</h1>
      </div>
    </header>
  );
}
