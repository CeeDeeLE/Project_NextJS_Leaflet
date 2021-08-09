import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/gallery">
        <a>Galerie</a>
      </Link>
      <Link href="/baeder">
        <a>Bäder</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/map">
        <a>Karte</a>
      </Link>
      <Link href="/standorte">
        <a>Standorte</a>
      </Link>
      <Link href="/textShuffler">
        <a>Fun-Stuff</a>
      </Link>
      <Link href="/impressum">
        <a>Impressum</a>
      </Link>
    </nav>
  );
}
