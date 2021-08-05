import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/textShuffler">
        <a>Text-Shuffler</a>
      </Link>
      <Link href="/gallery">
        <a>Galerie</a>
      </Link>
      <Link href="/news">
        <a>News</a>
      </Link>
      <Link href="https://cimdata.de">
        <a target="_blank">Cimdata</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/contact">
        <a>Kontakt</a>
      </Link>
      <Link href="/impressum">
        <a>Impressum</a>
      </Link>
    </nav>
  );
}
